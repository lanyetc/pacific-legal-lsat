import React from "react";

import ChatbotMessage from './ChatbotMessage'
import UserMessage from "./UserMessage";

export default function Chat(props: any) {
    const messageOptions = props.messages.map((message: any, key: any) => {
        if (message.content) {
            return (
                <div key={key}>
                    <ChatbotMessage content={message.content}></ChatbotMessage>
                    {message.options && message.options.length > 0 && <UserMessage message={message} handleShowExtraInfo={props.handleShowExtraInfo} handleSelectOptions={props.handleSelectOptions}></UserMessage>}
                    {message.response && message.response.length > 0 &&
                        message.response.map((res: any, key: any) => {
                            return (<ChatbotMessage content={res} key={key}></ChatbotMessage>)
                        })}
                    {message.showExtraInfo && <ChatbotMessage content={message.extraInfo.content}></ChatbotMessage>}
                </div>
            )
        }
        return null;
    });

    return (
        <div className="content-container">
            <div className="chat-area">
                {messageOptions}
            </div>
        </div>
    )


}






