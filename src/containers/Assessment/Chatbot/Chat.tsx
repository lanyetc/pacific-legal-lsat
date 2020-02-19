import React from "react";

import ChatbotMessage from './ChatbotMessage'
import UserMessage from "./UserMessage";


export default function Chat(props: any) { 
  const messageOptions =  props.messages.map((message: any, key: any) => {
      if(message.content){  
          return (
          <div key={key}>
              <ChatbotMessage content={message.content}></ChatbotMessage>
              {message.options && message.options.length>0 && <UserMessage userOptions={message.options} handleSelectOptions={props.handleSelectOptions}></UserMessage>}
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






