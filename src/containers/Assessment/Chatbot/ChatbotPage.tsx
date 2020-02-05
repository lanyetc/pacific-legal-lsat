import React from 'react';
import './ChatbotStyle.css';

import Header from '../../../components/Header/Header'
import HeaderLinks from "../../../components/Header/HeaderLink"

import ProgressSection from "./ProgressSection";
import ChatContentSection from "./ContentSection";
import ToDoSection from "./ToDoSection";
const ChatbotPage = () => {
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
            <ProgressSection ></ProgressSection>
            <ChatContentSection></ChatContentSection>
            <ToDoSection></ToDoSection>
        </div>

    </div>
  );
}

export default ChatbotPage;
