import React from "react";

import ChatbotMessage from './ChatbotMessage'
import UserMessage from "./UserMessage";


export default class ChatContentSection extends React.Component {
    
    constructor(props: any) {
        super(props);
    }

    // garbage data - will need to be passed through props
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


    render(){
       const messageOptions =  this.data.messages.map((message) => {
           
            if(message.content){
               return (
                <div>
                    <ChatbotMessage content={message.content}></ChatbotMessage>
                    {message.options && <UserMessage userOptions={message.options}></UserMessage>}
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

}






