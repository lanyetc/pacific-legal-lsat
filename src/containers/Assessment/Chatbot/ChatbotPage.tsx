import React from 'react';
import './ChatbotStyle.css';

import Header from '../../../components/Header/Header'
import HeaderLinks from "../../../components/Header/HeaderLink"

import ProgressBar from "./ProgressBar";
import Chat from "./Chat";
import ToDoSection from "./ToDoSection";
import { getSurvey, Node, Answer, Module, NodeTypes } from "../../../data/data";
import { ResultContext, ResultContextConsumer, Context } from '../../../data/context';
import { triggerAsyncId } from 'async_hooks';
import { Message } from '@material-ui/icons';

interface IState {
    currentMessage: Node,
    questionPath: any,
    messageList: any[],
    todoList: any[],
    context: Context
}

export default class ChatbotPage extends React.Component {
    survey: any;
    state: IState;
    constructor(props: any) {
        super(props);
        // let context = this.context;
        this.survey = getSurvey();
        this.state = {
            currentMessage: this.survey[1],
            questionPath: [],
            messageList: [],
            todoList: [],
            context: this.context
        };
        this.handleSelectOptions = this.handleSelectOptions.bind(this);
    }
    componentDidMount() {
        this.displayNextMsg(1);
    }
    public displayNextMsg(id: number) {
        const nextMessage = this.survey[id];
        this.state.messageList.push(nextMessage);
        this.setState((state: IState, props) => {
            return {
                currentMessage: nextMessage,
                messageList: state.messageList // CHANGE THIS TO ADD TO THE MESSAGE LIST (right now it just replaces the current message list)
            }
        })
        if (nextMessage.type === NodeTypes.message) { // if next message type is general message, auto display next one
            this.displayNextMsg(nextMessage.triggers[0].nextQuestionId);
        }
    }

    public handleSelectOptions(id: any) { // this method will need to be refactored and the functionality will need to be extended later.
        const selectedOptionId = id
        let triggered = false;
        let resultItem:any = {};
        resultItem.path = { questionId: this.state.currentMessage.id, optionId: selectedOptionId };
        this.state.questionPath.push(resultItem.path); // add selected option to pathlist
        const pathLength = this.state.questionPath.length - 1;
        this.state.currentMessage.triggers.forEach((trigger: any) => {
            trigger.answers.forEach((answer: any, index: any) => {// check path  
                triggered = false;
                if (answer.optionId === this.state.questionPath[pathLength - index].optionId && answer.questionId === this.state.questionPath[pathLength - index].questionId) {
                    triggered = true;
                }
            })
            if (triggered) {
                // if (!this.survey[trigger.nextQuestionId]) {
                //     this.context.router.push("/result");
                // }
                
                // const nextMessage = this.survey[trigger.nextQuestionId];
                // this.state.messageList.push(nextMessage);
                this.state.messageList[this.state.messageList.length - 1].response = trigger.response; // add response, may need to be rewrite
                let newTodoList = trigger.todos ? trigger.todos : []
                this.state.todoList = this.state.todoList.concat(newTodoList)
                resultItem.name = "Privacy Polic";
                resultItem.todos = newTodoList;
                resultItem.reminders = newTodoList; // change it to reminderlist
                resultItem.result = trigger.result;
                this.context.updateContext(1, resultItem);
                console.log(this.context);
                this.setState((state: IState, props) => {
                    return {
                        // currentMessage: nextMessage,
                        questionPath: state.questionPath,
                        // messageList: state.messageList, // CHANGE THIS TO ADD TO THE MESSAGE LIST (right now it just replaces the current message list)
                        todoList: newTodoList
                    }
                })
                this.displayNextMsg(trigger.nextQuestionId);
            }
        })
    }

    render() {
        console.log("messagelist: " + JSON.stringify(this.state.messageList))
        return (
            <div className="full-screen-container grey">
                <Header
                    brand="PLEO"
                    toolTitle="NPO SELF ASSESSMENT "
                    fixed
                    color="white"
                    rightLinks={<HeaderLinks />}
                    absolute

                />


                <div className="main-container">
                    <ProgressBar ></ProgressBar>
                    
                    <Chat
                        messages={this.state.messageList}
                        handleSelectOptions={this.handleSelectOptions}></Chat>
                    <ToDoSection
                        todoList={this.state.todoList}
                        reminderList={this.state.todoList}></ToDoSection>
                </div>

            </div>
        );
    }

}

ChatbotPage.contextType = ResultContext;

