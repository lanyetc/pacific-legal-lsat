import {MessageFactory} from './MessageFactory'
import {MessageType, Message} from './Message'


test('Message Creation', () => {
    const message = MessageFactory.createMessageFromData(
        {
            id: 1,
            type: MessageType.singleSelect,
            content: "Does your org have a privacy policy?",
            options: [
                {
                    id: 101,
                    label: "Yes"
                },
                {
                    id: 100,
                    label: "No"
                }
            ],
            triggers: [
                {
                    id: 1,
                    expectedResponses: {messageId: 1, optionIds:[100]},
                    action: { // fix this
                        type: "next",
                        nextQuestionId: 5
                    },
                    resultReport: "some result report.",
                    todo: "todo item 1",
                    reminder: "reminder item 1"
                },
                {
                    id: 2,
                    expectedResponses: {messageId: 1, optionIds:[101]},
                        action: { // fix this
                            type: "next",
                            nextQuestionId: 3
                        },
                        resultReport: "some result report.",
                        reply: "good job!"
                }
            ],
            defaultTriggerId: 2,
            extraInfo: {
                title: "What is a privacy policy?",
                content: "A privacy policy is a document which describes whose personal information we are collecting: " +
                    "why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."
            }
        }
    );

    // console.log(JSON.stringify(message));
});
