import React from "react";


export default function ChatbotMessage(props: any) {
    return(
        <div className="chat-block left"> 
                <div className="avatar"></div>
                <div className="bubble white round">{props.content}</div>
        </div>
    )
}

