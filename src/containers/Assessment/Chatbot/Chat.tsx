import React from "react";

import ChatbotMessage from './ChatbotMessage'
import UserMessage from "./UserMessage";
import { DisplayedMessage } from "./ChatbotPage";
import { AutoPlayMessage } from "../../../model";

export default function Chat(props: any) {
    const messageOptions = props.displayedMessages.map((displayedMessage: DisplayedMessage, key: any) => {
        const {message, showExtraInfo, selectedOptionIds, reply} = displayedMessage;
        const messageClass = (message instanceof AutoPlayMessage) ? "auto-message-content" : "question-content";
        if (message.content) {
            return (
                <div className="message-block" key={key}>
                    <ChatbotMessage bubbleClass={messageClass}  content={message.content}></ChatbotMessage>
                    {message.options && message.options.length > 0 && 
                    <UserMessage 
                        message={displayedMessage} 
                        handleShowExtraInfo={props.handleShowExtraInfo} 
                        handleSelectOptions={props.handleSelectOptions}
                        handleMultiSelectOptions={props.handleMultiSelectOptions}
                        handleMultiSelectSubmit={props.handleMultiSelectSubmit}
                        ></UserMessage>}
                    {reply && (<ChatbotMessage bubbleClass="reply" content={reply}></ChatbotMessage>)}
                    {showExtraInfo && <ChatbotMessage bubbleClass="extra-info" content={message.extraInfo.content}></ChatbotMessage>}
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






