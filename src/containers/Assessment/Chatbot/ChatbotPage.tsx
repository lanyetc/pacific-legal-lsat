import React from 'react';
import './ChatbotStyle.css';

import Header from '../../../components/Header/Header'
import HeaderLinks from "../../../components/Header/HeaderLink"

import ProgressBar from "./ProgressBar";
import ChatContentSection from "./Chat";
import ToDoSection from "./ToDoSection";
import {getSurvey} from "../../../data/data";
const ChatbotPage = () => {
  let survey = getSurvey();
  console.log(survey);
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
            <ChatContentSection></ChatContentSection>
            <ToDoSection></ToDoSection>
        </div>

    </div>
  );
}

export default ChatbotPage;
