    import React from 'react';
    import './ChatbotStyle.css';
    import Header from '../../../components/Header/Header'
    import HeaderLinks from "../../../components/Header/HeaderLink"
    import ProgressBar from "./ProgressBar";
    import Chat from "./Chat";
    import ToDoSection from "./ToDoSection";
    import { getSurvey, getModules, NodeTypes, TriggerType, Trigger } from "../../../data/data";
    import { ResultContext, Context } from '../../../data/context';
    import history from '../../../history';
    import cloneDeep from 'lodash/cloneDeep';
    import banrdIcon from "../../../Assets/img/botavator.svg";

    interface IState {
        currentMessage: Message,
        currentModuleId: any,
        responsePath: any,
        messageList: any[],
        todoList: any[],
        reminderList: any[],
        context: Context
    }

    export default class ChatbotPage extends React.Component {
        survey: any;
        modules: any;
        state: IState;

        constructor(props: any) {
            super(props);
            this.survey = getSurvey();
            this.modules = getModules();
            this.state = {
                currentMessage: this.survey[1],
                currentModuleId: 1,
                responsePath: [],
                messageList: [], //TODO  maybe we don't need messagelist or todolist.. also responsepath here because the context gets them
                todoList: [],
                reminderList: [],
                context: this.context
            };
            this.handleSelectOptions = this.handleSelectOptions.bind(this);
            this.handleShowExtraInfo = this.handleShowExtraInfo.bind(this);
            this.getNextAction = this.getNextAction.bind(this);
        }

        componentDidMount() {
            this.displayNextMessage(1);
        }

        public scrollToBottom() {
            let chatbotScorller = document.getElementById('chatbot-scroller') as HTMLElement;
            chatbotScorller.scrollTop = chatbotScorller.scrollHeight;
        }

        // TODO chnage the parameter name...
        public displayNextMessage(next: any) {// have this also take a module id? 
            const nextMessage = this.modules[next.moduleId].nodes[next.messageId]; // TODO create modules class.. modules.getMessage(messageId)
            this.state.messageList.push(nextMessage);
            this.setState((state: IState, props) => {
                return {
                    currentModuleId: next.moduleId,
                    currentMessage: nextMessage,
                    messageList: state.messageList
                }
            },() => {
                this.scrollToBottom();
            })
            const trigger = nextMessage.getDefaultTrigger() // do we just pass nothing in? or maybe we should do find matching trigger
            if (nextMessage.type === NodeTypes.message) { // if next message type is general message, auto display next one
                this.displayNextMessage(this.getNextAction(trigger)); // TODO ughhh this too. wtf. we just need to get the default trigger. 
            }// TODO check what happens when this trigger is an exit type. 
            
        }

        // TODO test that a response item is added to the responsePath
        private updateResponsePath(responseItem: any) {
            this.setState({
                responsePath: [... responseItem]
              });
        }

        private updateMessageList(message: any) {
            this.setState((state: IState, props: any) => {
                const lastMessageIndex = state.messageList.length - 1
                state.messageList[lastMessageIndex].response = message; // TODO add components instead of message strings.
                return {
                    messageList: state.messageList
                }
            });
        }

        public async handleSelectOptions(messageId: any, selectedOptionId: any) { 
            if (this.isInactiveQuestion(messageId)) {
                return;
            }

            const responseItem = { messageId: this.state.currentMessage.id, optionId: selectedOptionId }; // TODO create a ResultItem class // TODO maybe rename path to messageResponse
            await this.updateResponsePath(responseItem) // check if this works with async await

            const trigger = this.state.currentMessage.findMatchingTrigger(this.state.responsePath); // the responsePath has to be updated by this point because we use it to find the trigger.
            await this.updateMessageList(trigger.response)

            let resultItem: any = {
                path: responseItem,
                todos: trigger.getTodos(),
                reminders: trigger.getReminders(),
                resultReport: trigger.getResultReport()
            }
            this.context.updateContext(this.state.currentModuleId, resultItem);  // TODO make sure this is actually the current module. i think it is. could be a test.

            // if we did update the trigger action to always contain the next module, it would be easier to make a mistake when writing the json. 
            // but it would be more elegant here. 
            let nextMessage = this.getNextAction(trigger.action); // TODO this shouldnt take any arguments.. maybe we should just have the trigger always include the module. hmmmmmm
            this.displayNextMessage(nextMessage) // TODO if we push to history in dispaly next message.. will the rest of this function even run?   
        }   // maybe we can move the pushexit to diplayNextMessage... 

        public handleShowExtraInfo(questionId: any) {
            if (this.isInactiveQuestion(questionId)) {
                return;
            }
            this.setState((state: IState, props: any) => {
                const repeatMessage = cloneDeep(state.currentMessage);
                state.currentMessage.showExtraInfo = true;
                return {
                    currentMessage: repeatMessage,
                    messageList: [...state.messageList, repeatMessage]
                }
            });
        }

        // TODO this may just redirect the user to the result page.... needs to be fixed
        getNextAction(triggerAction: any) {
            // return information for next message.
            // Can make it a switch statement
            // or, make it a part of the handleSelectOption method rather than integrate in trigger class？
            if (triggerAction.type == "exit") {
                history.push('/result')
            } else if (triggerAction.type == "nextQuestion") {
                return {nextModuleId: this.state.currentModuleId, nextQuestionId: triggerAction.nextQuestionId};
            } else if (triggerAction.type == "nextModule") {
                return {nextModuleId: triggerAction.nextModuleId, nextQuestionId: triggerAction.nextQuestionId};
            }
        }

        public checkModule(trigger: Trigger) {
            let moduleId = this.state.currentModuleId;
            switch (trigger.type) {
                case TriggerType.skip:
                    moduleId = trigger.nextModuleId;
                    break;
                default:
            }
            return moduleId;
        }

        public isCorrectTrigger(answer: any, currentQuestionId: any, currentOptionId: any) {
            return answer.optionId === currentOptionId && answer.questionId === currentQuestionId
        }

        private isInactiveQuestion(questionId: number) {
            return questionId !== this.state.currentMessage.id
        }

        render() {
            console.log("messagelist: " + JSON.stringify(this.state.messageList))
            return (
                <div className="full-screen-container grey chatbot-page">
                    <Header
                        brand= {banrdIcon}
                        brandName = "LSALT 2.0 |"
                        toolTitle="Non-Profit Self Assessment"
                        fixed
                        color="white"
                        rightLinks={<HeaderLinks />}
                        absolute

                    />
                    <div className="main-container">
                        <ProgressBar ></ProgressBar>
                        <Chat
                            messages={this.state.messageList}
                            handleShowExtraInfo={this.handleShowExtraInfo}
                            handleSelectOptions={this.handleSelectOptions}></Chat>
                        <ToDoSection
                            todoList={this.state.todoList}
                            reminderList={this.state.reminderList}></ToDoSection>
                    </div>

                </div>
            );
        }

    }

    ChatbotPage.contextType = ResultContext;

