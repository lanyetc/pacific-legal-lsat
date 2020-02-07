import React from 'react';
import './ChatbotStyle.css';

import Header from '../../../components/Header/Header'
import HeaderLinks from "../../../components/Header/HeaderLink"

import ProgressBar from "./ProgressBar";
import Chat from "./Chat";
import ToDoSection from "./ToDoSection";
import {getSurvey} from "../../../data/data";
export default class ChatbotPage extends React.Component {
  private survey = getSurvey();
  private data = {
    messages: [ // this will need to be encoded in classes. 
      {
        id: 1,
        type: "multi",
        content: 'Intro',
        options: [
          {
            id: 700,
            label: "option 1",
          },
          {
            id: 701,
            label: "option 2",
          }
        ],
        extraInfo: [],
        triggers: [
            {
                answers: [
                    {
                        questionId: 1,
                        optionId: 700
                    }
                ],
                results: [
                    "some result for q 1"
                ],
                response: ["some response"],
                nextQuestionId: 1
            }
        ]
      },
      {
        id: 2,
        content: 'some contnent',
        options: [
          {
            id: 888,
            label: "some label"
          }
        ],
        extraInfo: [],
        triggers: []
      }
    ],
  }

  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
  }

  render(){
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
              <Chat data={this.data}></Chat>
              <ToDoSection></ToDoSection>
          </div>
  
      </div>
    );
  }
  
}

