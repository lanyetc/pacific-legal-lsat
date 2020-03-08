import React from "react";

import ChatbotMessage from './ChatbotMessage'
import UserMessage from "./UserMessage";
import { MessageType, MultiSelectQuestion } from "../../../model";

export default function Chat(props: any) {
    const messageOptions = props.messages.map((message: any, key: any) => {
        if (message.message.content) {
            return (
                <div key={key}>
                    <ChatbotMessage content={message.message.content}></ChatbotMessage>
                    {message.message.options && message.message.options.length > 0 && <UserMessage message={message} handleShowExtraInfo={props.handleShowExtraInfo} handleSelectOptions={props.handleSelectOptions}></UserMessage>}
                    {message.reply && (<ChatbotMessage content={message.reply}></ChatbotMessage>)}
                    {message.showExtraInfo && <ChatbotMessage content={message.extraInfo.content}></ChatbotMessage>}
                </div>
            )
        }
        return null;
    });

    return (
        <div className="content-container">
            <div className="chat-area" id="chatbot-scroller">
                {messageOptions}
            </div>
        </div>
    )


}






