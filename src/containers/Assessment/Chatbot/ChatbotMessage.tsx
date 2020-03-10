import React from "react";
import botAvator from "../../../Assets/img/botavator.svg"

export default function ChatbotMessage(props: any) {
    return (
        <div className="chat-block bot">
            <div className="chat-avatar">
                <img src={botAvator} alt="chatbot avator" />
            </div>
            <div className="bubble white round">{props.content}</div>
        </div>
    )
}

