import React from 'react';
import './ChatbotStyle.css';

import Header from '../../../components/Header/Header'
import HeaderLinks from "../../../components/Header/HeaderLink"

import ProgressBar from "./ProgressBar";
import Chat from "./Chat";
import ToDoSection from "./ToDoSection";
import { getSurvey, getModules, Node, Answer, Module, NodeTypes, TriggerType, Trigger } from "../../../data/data";
import { ResultContext, ResultContextConsumer, Context } from '../../../data/context';
import { triggerAsyncId } from 'async_hooks';
import { Message } from '@material-ui/icons';
import history from '../../../history';

interface IState {
    currentMessage: any,
    currentModuleId: any,
    questionPath: any,
    messageList: any[],
    todoList: any[],
    context: Context
}

export default class ChatbotPage extends React.Component {
    survey: any;
    modules: any;
    state: IState;
    constructor(props: any) {
        super(props);
        // let context = this.context;
        this.survey = getSurvey();
        this.modules = getModules();
        this.state = {
            currentMessage: this.survey[1],
            currentModuleId: 1,
            questionPath: [],
            messageList: [],
            todoList: [],
            context: this.context
        };
        this.handleSelectOptions = this.handleSelectOptions.bind(this);
        this.handleShowExtraInfo = this.handleShowExtraInfo.bind(this);
    }
    componentDidMount() {
        this.displayNextMsg(1);
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

    public displayNextMsg(qId: number) {
        // const nextMessage = this.survey[qId];
        const nextMessage = this.modules[this.state.currentModuleId].nodes[qId];
        this.state.messageList.push(nextMessage);
        this.setState((state: IState, props) => {
            return {
                currentMessage: nextMessage,
                messageList: state.messageList // CHANGE THIS TO ADD TO THE MESSAGE LIST (right now it just replaces the current message list)
            }
        })
        if (nextMessage.type === NodeTypes.message) { // if next message type is general message, auto display next one
            this.setState((state: IState, props) => {
                return {
                    currentModuleId: this.checkModule(nextMessage.triggers[0])
                }
            })
            this.displayNextMsg(nextMessage.triggers[0].nextQuestionId);

        }
    }

    public handleSelectOptions(questionId: any, optionId: any) { // this method will need to be refactored and the functionality will need to be extended later.
        if (questionId !== this.state.currentMessage.id) {
            return;
        }
        const selectedOptionId = optionId;
        let triggered = false;
        let resultItem: any = {};
        let lastMessage = this.state.currentMessage;
        lastMessage.selectedOptionId = selectedOptionId; // set selected optionId
        resultItem.path = { questionId: this.state.currentMessage.id, optionId: selectedOptionId };
        this.state.questionPath.push(resultItem.path); // add selected option to pathlist
        const pathLength = this.state.questionPath.length - 1;
        this.state.currentMessage.triggers.some((trigger: any) => {
            if (trigger.type === TriggerType.default) {
                trigger = true;
            } else {
                trigger.answers.forEach((answer: any, index: any) => {// check path  
                    triggered = false;
                    if (answer.optionId === this.state.questionPath[pathLength - index].optionId && answer.questionId === this.state.questionPath[pathLength - index].questionId) {
                        triggered = true;
                    }
                })
            }
            if (triggered) {
                if (trigger.type === TriggerType.exit) {
                    history.push('/result')
                } else {
                    this.state.messageList[this.state.messageList.length - 1].response = trigger.response; // add response, may need to be rewrite
                    let newTodoList = trigger.todos ? trigger.todos : []
                    resultItem.name = "Privacy Polic";
                    resultItem.todos = newTodoList;
                    resultItem.reminders = newTodoList; // change it to reminderlist
                    resultItem.result = trigger.result;
                    this.context.updateContext(this.state.currentModuleId, resultItem);
                    console.log(this.context);
                    this.setState({
                        currentMessage: lastMessage,
                        currentModuleId: this.checkModule(trigger),
                        questionPath: this.state.questionPath,
                        todoList: this.state.todoList.concat(newTodoList)
                    }, () => {
                        this.displayNextMsg(trigger.nextQuestionId);
                    })
                }
                return true;
            }
        })
    }
    public handleShowExtraInfo(questionId: any) {
        if (questionId === this.state.currentMessage.id) {
            let repeatMsg = Object.assign({}, this.state.currentMessage);
            let lastMsg = this.state.messageList[this.state.messageList.length - 1];
            lastMsg.showExtraInfo = true;
            // this.state.messageList[this.state.messageList.length - 1].showExtraInfo = true; // may need to be optimized
            this.state.messageList.push(repeatMsg);
            this.setState({
                currentMessage: repeatMsg,
                messageList: this.state.messageList
            })
        }
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
                        handleShowExtraInfo={this.handleShowExtraInfo}
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

