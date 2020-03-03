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
import banrdIcon from "../../../assets/img/botavator.svg";

interface IState {
    currentMessage: any,
    currentModuleId: any,
    questionPath: any,
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
            questionPath: [],
            messageList: [],
            todoList: [],
            reminderList: [],
            context: this.context
        };
        this.handleSelectOptions = this.handleSelectOptions.bind(this);
        this.handleShowExtraInfo = this.handleShowExtraInfo.bind(this);
    }

    componentDidMount() {
        this.displayNextMsg(1);
    }

    public displayNextMsg(qId: number) {
        const nextMessage = this.modules[this.state.currentModuleId].nodes[qId];
        this.state.messageList.push(nextMessage);
        this.setState((state: IState, props) => {
            return {
                currentMessage: nextMessage,
                messageList: state.messageList
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

    public handleSelectOptions(questionId: any, selectedOptionId: any) { // this method will need to be refactored and the functionality will need to be extended later.
        if (this.isInactiveQuestion(questionId)) {
            return;
        }

        // add the result item to the question path
        let resultItem: any = {};
        resultItem.path = { questionId: this.state.currentMessage.id, optionId: selectedOptionId };
        this.state.questionPath.push(resultItem.path); // FIXME modifies state outside of setstate

        // why are we using some?
        this.state.currentMessage.triggers.forEach((trigger: Trigger) => {
            if (trigger.type === TriggerType.default) { // why do we need default?
                return false; // changed this to return false to make it clear that no trigger ends up running. 
            }

            trigger.answers.forEach((answer: any, index: any) => { // check path  
                const pathLength = this.state.questionPath.length - 1;
                const { optionId, questionId } = this.state.questionPath[pathLength - index];
                if (this.isCorrectTrigger(answer, questionId, optionId)) {
                    if (trigger.type === TriggerType.exit) {
                        history.push('/result')
                    } else {
                        // add to result
                        let newTodoList = trigger.todos ? trigger.todos : []
                        let newReminderList = trigger.reminders ? trigger.reminders : []
                        resultItem.name = "Privacy Policy";
                        resultItem.todos = newTodoList;
                        resultItem.reminders = newReminderList; // change it to reminderlist
                        resultItem.result = trigger.result;
                        this.context.updateContext(this.state.currentModuleId, resultItem);

                        this.setState((state: IState, props: any) => {
                            state.currentMessage.selectedOptionId = selectedOptionId;
                            state.messageList[this.state.messageList.length - 1].response = trigger.response; // add response, may need to be rewrite
                            return {
                                currentMessage: state.currentMessage,
                                currentModuleId: this.checkModule(trigger),
                                questionPath: state.questionPath,
                                todoList: state.todoList.concat(newTodoList)
                            }
                        }, () => this.displayNextMsg(trigger.nextQuestionId));
                    }
                }
            })
        })
    }

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
            <div className="full-screen-container grey">
                <Header
                    brand= {banrdIcon}
                    brandName = "LSALT 2.0 | "
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

