import React from 'react';
import './ChatbotStyle.css';
import Header from '../../../components/Header/Header'
import HeaderLinks from "../../../components/Header/HeaderLink"
import ProgressBar from "./ProgressBar";
import Chat from "./Chat";
import ToDoSection from "./ToDoSection";
import { getSurvey, getModules } from "../../../data/data";
import { ResultContext, Context } from '../../../data/context';
import { Trigger, Message, ResponsePath, AutoPlayMessage } from '../../../model/index'
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


interface DisplayedMessage {
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
            currentMessage: this.survey[0],
            currentModuleId: 0,
            responsePath: responsePath,
            displayedMessages: [], //TODO  maybe we don't need messagelist or todolist.. also responsepath here because the context gets them
            todoList: [],
            reminderList: []
        };
        this.handleSelectOptions = this.handleSelectOptions.bind(this);
        this.handleMultiSelectSubmit = this.handleMultiSelectSubmit.bind(this)
        this.handleShowExtraInfo = this.handleShowExtraInfo.bind(this);
        this.handleMultiSelectOptions = this.handleMultiSelectOptions.bind(this);
        this.getNextAction = this.getNextAction.bind(this);
    }

    componentDidMount() {
        this.displayNextMessage({moduleId: 0, messageId: 0});
    }

    // TODO chnage the parameter name...
    public displayNextMessage(next: any) {// have this also take a module id? 
        const nextMessage: Message = this.modules[next.moduleId].nodes[next.messageId]; // TODO create modules class.. modules.getMessage(messageId)
         const message: DisplayedMessage = {message: nextMessage, selectedOptionIds: [-1], showExtraInfo: false };

        this.setState((state: IState, props) => {
            return {
                currentModuleId: next.moduleId,
                currentMessage: nextMessage,
                displayedMessages: state.displayedMessages.concat(message)
            }
        }, () => {
            this.scrollToBottom();
        })
        const trigger = nextMessage.defaultTrigger // do we just pass nothing in? or maybe we should do find matching trigger
        if (nextMessage instanceof AutoPlayMessage) { // if next message type is general message, auto display next one
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
            if(lastMessageIndex < 0) 
                lastMessageIndex = 0
            state.displayedMessages[lastMessageIndex].reply = message; // TODO add components instead of message strings.
            if(todo)
                state.todoList.push(todo)
            
            if(reminder)
                state.reminderList.push(reminder)

            return {
                messageList: [... state.displayedMessages ],
                todoList: state.todoList,
                reminderList: state.reminderList,
            }
        });
    }


    public handleMultiSelectOptions(questionId: any, selectedOptionIds: any){

    }

    public handleMultiSelectSubmit(){

    }

    // it should 
    // return when a question is inactive
    // add a responseItem to the responsePath
    // update the messageList with a reply 
    // add a result Item to the context
    // get the next message
    // call displayNextMessage
    public async handleSelectOptions(questionId: any, selectedOptionId: any) { 
        if (this.isInactiveQuestion(questionId)) {
            return;
        }

        const responseItem = { messageId: this.state.currentMessage.id, optionId: selectedOptionId }; // TODO create a ResultItem class // TODO maybe rename path to messageResponse
        await this.updateResponsePath(responseItem) // check if this works with async await

        const trigger: any = this.state.currentMessage.findTrigger(this.state.responsePath); // the responsePath has to be updated by this point because we use it to find the trigger.

        let resultItem: any = {
            path: responseItem,
            todo: trigger.todo ? trigger.todo : null,
            reminder: trigger.reminders ? trigger.reminder : null,
            resultReport: trigger.resultReport
        }
        this.context.updateContext(this.state.currentModuleId, resultItem);  // TODO make sure this is actually the current module. i think it is. could be a test.
        await this.updateState(trigger.reply, resultItem.todo, resultItem.reminders );
        // if we did update the trigger action to always contain the next module, it would be easier to make a mistake when writing the json. 
        // but it would be more elegant here. 
        let nextMessage = this.getNextAction(trigger.action); // TODO this shouldnt take any arguments.. maybe we should just have the trigger always include the module. hmmmmmm
        this.displayNextMessage(nextMessage) // TODO if we push to history in dispaly next message.. will the rest of this function even run?   
    }   // maybe we can move the pushexit to diplayNextMessage... 

    public handleShowExtraInfo(questionId: any) {// TODO This.. doesn't work yet. 
        if (this.isInactiveQuestion(questionId)) {
            return;
        }
        this.setState((state: IState, props: any) => {
            const repeatMessage = cloneDeep(state.currentMessage);
            // state.currentMessage.showExtraInfo = true;
            return {
                currentMessage: repeatMessage,
                messageList: [...state.displayedMessages, repeatMessage]
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
            return { moduleId: this.state.currentModuleId, messageId: triggerAction.nextQuestionId };
        } else if (triggerAction.type == "nextModule") {
            return { moduleId: triggerAction.nextModuleId, messageId: triggerAction.nextQuestionId };
        }
    }

    public scrollToBottom() {
        try{
        let chatbotScroller = document.getElementById('chatbot-scroller') as HTMLElement;
        chatbotScroller.scrollTop = chatbotScroller.scrollHeight;
        }catch(exception){
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
        console.log("messagelist: " + JSON.stringify(this.state.displayedMessages))
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
                        messages={this.state.displayedMessages}
                        handleMultiSelectOptions = {this.handleMultiSelectOptions}
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

