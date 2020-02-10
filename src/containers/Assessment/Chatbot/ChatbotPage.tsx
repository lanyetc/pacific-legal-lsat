import React from 'react';
import './ChatbotStyle.css';

import Header from '../../../components/Header/Header'
import HeaderLinks from "../../../components/Header/HeaderLink"

import ProgressBar from "./ProgressBar";
import Chat from "./Chat";
import ToDoSection from "./ToDoSection";
import {getSurvey, Node, Answer} from "../../../data/data";
import { triggerAsyncId } from 'async_hooks';
import { Message } from '@material-ui/icons';

interface IState {
  currentMessage: Node,
  questionPath: any,
  messageList: any[]
}
export default class ChatbotPage extends React.Component {
  survey: any;
  state: IState;

  constructor(props: any) {
    super(props);
    this.survey = getSurvey();

    this.state = {
      currentMessage: this.survey[1],
      questionPath: [],
      messageList: [this.survey[1]]
    };
    this.handleSelectOptions = this.handleSelectOptions.bind(this);
  }

  public handleSelectOptions(id: any){ // this method will need to be refactored and the functionality will need to be extended later.
    const selectedOptionId = id
    this.state.questionPath.push({questionId:this.state.currentMessage.id, optionId: selectedOptionId}); // add selected option to pathlist
    const pathLength = this.state.questionPath.length - 1;
    this.state.currentMessage.triggers.forEach((trigger: any) => {
      trigger.answers.forEach((answer: any, index:any) => {
        if(answer.optionId === this.state.questionPath[pathLength-index].optionId && answer.questionId === this.state.questionPath[pathLength-index].questionId){ // check path    
          const nextMessage = this.survey[trigger.nextQuestionId];
          this.state.messageList.push(nextMessage);
            this.setState((state: IState, props) => {     
              return {
                currentMessage: nextMessage,
                questionPath: this.state.questionPath,
                messageList: this.state.messageList // CHANGE THIS TO ADD TO THE MESSAGE LIST (right now it just replaces the current message list)
              }
            })
        }
      })
    })
  }

  render(){
    console.log("messagelist: " + JSON.stringify(this.state.messageList))
    return (
      <div className="full-screen-container grey">
        <Header
                  brand="PLEO"
                  toolTitle = "NPO SELF ASSESSMENT "
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
              <ToDoSection></ToDoSection>
          </div>
  
      </div>
    );
  }
  
}

