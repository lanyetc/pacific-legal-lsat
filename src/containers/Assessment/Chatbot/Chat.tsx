import React from "react";

import ChatbotMessage from './ChatbotMessage'
import UserMessage from "./UserMessage";


export default function Chat(props: any) { 
  const messageOptions =  props.messages.map((message: any) => {
      if(message.content){  
          return (
          <div>
              <ChatbotMessage content={message.content}></ChatbotMessage>
              {message.options && <UserMessage userOptions={message.options} handleSelectOptions={props.handleSelectOptions}></UserMessage>}
          </div>
          )
      } 
  });

  return(
  <div className="content-container">
      <div className="chat-area">
          {messageOptions}   
      </div>
  </div>
  )


}






