import React from 'react';
import './ChatbotStyle.css';
import Header from '../../../components/Header/Header'
import HeaderLinks from "../../../components/Header/HeaderLink"
import ProgressBar from "./ProgressBar";
import Chat from "./Chat";
import ToDoSection from "./ToDoSection";
import { getSurvey, getModules } from "../../../data/data";
import { ResultContext, Context } from '../../../data/context';
import { Trigger, Message, ResponsePath, AutoPlayMessage, ResponseItem } from '../../../model/index'
import history from '../../../history';
import cloneDeep from 'lodash/cloneDeep';
import banrdIcon from "../../../Assets/img/botavator.svg";

interface IState {
    currentMessage: Message,
    currentModuleId: any,
    responsePath: ResponsePath,
    displayedMessages: DisplayedMessage[],
    todoList: any[],
    reminderList: any[],
}


export interface DisplayedMessage {
    message: Message,
    selectedOptionIds: number[],
    showExtraInfo: boolean // becuase there can only be one
    reply?: string // TODO temp temporary
}

export default class ChatbotPage extends React.Component {

    survey: any;
    modules: any;
    state: IState;

    constructor(props: any) {
        super(props)
        this.survey = getSurvey();
        this.modules = getModules();
        
        const responsePath: ResponsePath = new ResponsePath()
        this.state = {
            currentMessage: this.survey[2],
            currentModuleId: 0,
            responsePath: responsePath,
            displayedMessages: [], //TODO  maybe we don't need messagelist or todolist.. also responsepath here because the context gets them
            todoList: [],
            reminderList: []
        };
        this.handleSingleSelectResponse = this.handleSingleSelectResponse.bind(this);
        this.handleMultiSelectSubmit = this.handleMultiSelectSubmit.bind(this)
        this.handleShowExtraInfo = this.handleShowExtraInfo.bind(this);
        this.handleMultiSelectClick = this.handleMultiSelectClick.bind(this);
        this.getNextAction = this.getNextAction.bind(this);
    }

    componentDidMount() {
        this.displayNextMessage({ moduleId: 0, messageId: 2});
    }

    // TODO chnage the parameter name...
    public displayNextMessage(next: any) {// have this also take a module id? 
        const nextMessage: Message = this.modules[next.moduleId].nodes[next.messageId]; // TODO create modules class.. modules.getMessage(messageId)
        const message: DisplayedMessage = { message: nextMessage, selectedOptionIds: [], showExtraInfo: false };

        this.setState((state: IState, props) => {
            return {
                currentModuleId: next.moduleId,
                currentMessage: nextMessage,
                displayedMessages: state.displayedMessages.concat(message)
            }
        }, () => {
            this.scrollToBottom();
        })

         // do we just pass nothing in? or maybe we should do find matching trigger
        if (nextMessage instanceof AutoPlayMessage) { // if next message type is general message, auto display next one
            const trigger: any = nextMessage.getDefaultTrigger()
            this.displayNextMessage(this.getNextAction(trigger)); // TODO ughhh this too. wtf. we just need to get the default trigger. 
        }// TODO check what happens when this trigger is an exit type. 

    }

    // TODO test that a response item is added to the responsePath
    private updateResponsePath(responseItem: any) {
        this.setState((state: IState) => {
            // state.responsePath.addResponseItem(responseItem);  TODO fix this.
            return {
                responsePath: state.responsePath
            }
        });
    }

    private updateState(message: any, todo: any, reminder: any) { //temporary
        this.setState((state: IState, props: any) => {
            let lastMessageIndex = state.displayedMessages.length - 1
            if (lastMessageIndex < 0)
                lastMessageIndex = 0
            state.displayedMessages[lastMessageIndex].reply = message; // TODO add components instead of message strings.
            if (todo)
                state.todoList.push(todo)

            if (reminder)
                state.reminderList.push(reminder)

            return {
                messageList: [...state.displayedMessages],
                todoList: state.todoList,
                reminderList: state.reminderList,
            }
        });
    }


    public handleMultiSelectClick(questionId: any, selectedOptionId: any) {
        if (this.isInactiveQuestion(questionId)) {
            return;
        }
        // add a selected option
        this.markOptionIdSelected(selectedOptionId)
    }

    public markOptionIdSelected(optionId: any) {
        this.setState((state: IState) => {
            let lastMessageIndex = state.displayedMessages.length - 1
            if (lastMessageIndex < 0)
                lastMessageIndex = 0
            if (!state.displayedMessages[lastMessageIndex].selectedOptionIds.includes(optionId))
                state.displayedMessages[lastMessageIndex].selectedOptionIds.push(optionId)

            return {
                displayedMessages: state.displayedMessages
            }
        })
    }

    // it should
    // not submit when nothing is selected
    // not submit when question is inactive
    public handleMultiSelectSubmit(questionId: any) {
        if (this.isInactiveQuestion(questionId) || this.isEmptySelection()) { //TODO also prevent submission when there's nothing selected. 
            return;
        }
        const lastMessage = this.state.displayedMessages.length - 1
        this.processSelectedOptions(questionId, this.state.displayedMessages[lastMessage].selectedOptionIds)
    }

    isEmptySelection() {
        let lastMessageIndex = this.state.displayedMessages.length - 1
        if (lastMessageIndex < 0)
            lastMessageIndex = 0
        if (this.state.displayedMessages[lastMessageIndex].selectedOptionIds.length <= 0)
            return true;
        return false;
    }

    // it should 
    // return when a question is inactive
    // add a responseItem to the responsePath
    // update the messageList with a reply 
    // add a result Item to the context
    // get the next message
    // call displayNextMessage
    public handleSingleSelectResponse(questionId: any, selectedOptionId: any) {
        if (this.isInactiveQuestion(questionId)) {
            return;
        }
        this.markOptionIdSelected(selectedOptionId)
        this.processSelectedOptions(questionId, selectedOptionId)

    }

    public async processSelectedOptions(questionId: any, selectedOptionIds: any) {
        const responseItem: ResponseItem = new ResponseItem(this.state.currentMessage.id, selectedOptionIds)
        await this.updateResponsePath(responseItem) // check if this works with async await

        const trigger: any = this.state.currentMessage.findTrigger(this.state.responsePath); // the responsePath has to be updated by this point because we use it to find the trigger.

        let resultItem: any = {
            path: responseItem,
            todo: trigger.todo ? trigger.todo : null,
            reminder: trigger.reminder ? trigger.reminder : null,
            resultReport: trigger.resultReport
        }
        this.context.updateContext(this.state.currentModuleId, resultItem);  // TODO make sure this is actually the current module. i think it is. could be a test.
        await this.updateState(trigger.reply, resultItem.todo, resultItem.reminder);
        // if we did update the trigger action to always contain the next module, it would be easier to make a mistake when writing the json. 
        // but it would be more elegant here. 
        let nextMessage = this.getNextAction(trigger); // TODO this shouldnt take any arguments.. maybe we should just have the trigger always include the module. hmmmmmm
        this.displayNextMessage(nextMessage) // TODO if we push to history in dispaly next message.. will the rest of this function even run?   
    }// maybe we can move the pushexit to diplayNextMessage... 

    public handleShowExtraInfo(questionId: any) {// TODO this wont inactivate previous questions. 
        if (this.isInactiveQuestion(questionId)) {
            return;
        }
        this.setState((state: IState, props: any) => {
            let last = this.state.displayedMessages.length - 1
            if (last < 0)
                last = 0

            const repeatMessage = cloneDeep(state.displayedMessages[last]);
            state.displayedMessages[last].showExtraInfo = true;
            return {
                displayedMessages: [...state.displayedMessages, repeatMessage]
            }
        }, () => {
            this.scrollToBottom();
        });
    }



    // TODO this may just redirect the user to the result page.... needs to be fixed
    getNextAction(trigger: any) {
        
        // return information for next message.
        // Can make it a switch statement
        // or, make it a part of the handleSelectOption method rather than integrate in trigger class？
        if (trigger.action.type == "exit") {
            history.push('/result')
        } else if (trigger.action.type == "next") {
            return { moduleId: this.state.currentModuleId, messageId: trigger.action.nextQuestionId };
        } else if (trigger.action.type == "nextModule") {
            return { moduleId: trigger.action.nextModuleId, messageId: trigger.action.nextQuestionId };
        }
    }

    public scrollToBottom() {
        try {
            let chatbotScroller = document.getElementById('chatbot-scroller') as HTMLElement;
            chatbotScroller.scrollTop = chatbotScroller.scrollHeight;
        } catch (exception) {
            console.log("scroll exception");
        }
    }

    public isCorrectTrigger(answer: any, currentQuestionId: any, currentOptionId: any) {
        return answer.optionId === currentOptionId && answer.questionId === currentQuestionId
    }

    private isInactiveQuestion(questionId: number) {
        return questionId !== this.state.currentMessage.id
    }

    render() {
        // const todos = this.context.moduleResults[this.state.currentModuleId].todos
        // const reminders = this.context.moduleResults[this.state.currentModuleId].reminders

        return (
            <div className="full-screen-container grey chatbot-page">
                <Header
                    brand={banrdIcon}
                    brandName="LSALT 2.0 |"
                    toolTitle="Non-Profit Self Assessment"
                    fixed
                    color="white"
                    rightLinks={<HeaderLinks />}
                    absolute
                />
                <div className="main-container">
                    <ProgressBar ></ProgressBar>
                    <Chat
                        displayedMessages={this.state.displayedMessages}
                        handleMultiSelectOptions={this.handleMultiSelectClick}
                        handleMultiSelectSubmit={this.handleMultiSelectSubmit}
                        handleShowExtraInfo={this.handleShowExtraInfo}
                        handleSelectOptions={this.handleSingleSelectResponse}></Chat>
                    <ToDoSection
                        todoList={this.state.todoList}
                        reminderList={this.state.reminderList}></ToDoSection>
                </div>

            </div>
        );
    }

}

ChatbotPage.contextType = ResultContext;

