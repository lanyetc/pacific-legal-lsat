import { MessageFactory } from "../MessageFactory";
import { MessageType } from "../Message";
import { TriggerFactory } from "../Trigger";
import { ResponsePath } from "../ResponsePath";
import { ResponseItem } from "../ResponseItem";

test('find trigger of a masseage', () => {
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
                    expectedResponses: {messageId: 1, optionIds:[100]},
                    action: { // fix this
                        type: "next",
                        nextQuestionId: 5
                    },
                    resultReport: "some result report.",
                    todo: "todo item 1",
                    reminder: "reminder item 1"
                },
            ],
            defaultTrigger: {
                expectedResponses: {messageId: 1, optionIds:[101]},
                    action: { // fix this
                        type: "next",
                        nextQuestionId: 3
                    },
                    resultReport: "some result report.",
                    reply: "good job!"
            },
            extraInfo: {
                title: "What is a privacy policy?",
                content: "A privacy policy is a document which describes whose personal information we are collecting: " +
                    "why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."
            }
        }
    );
    const triggerResponsePath = new ResponsePath();
    triggerResponsePath.addResponseItem(new ResponseItem(1, [100]));
    const defaultResponsePath = new ResponsePath();
    defaultResponsePath.addResponseItem(new ResponseItem(1, [101]));
    const correctTrigger = TriggerFactory.createTriggerFromData(
        {
            expectedResponses: {messageId: 1, optionIds:[100]},
            action: { // fix this
                type: "next",
                nextQuestionId: 5
            },
            resultReport: "some result report.",
            todo: "todo item 1",
            reminder: "reminder item 1"
        }
    )
    const defaultTrigger = TriggerFactory.createTriggerFromData(
        {
            expectedResponses: {messageId: 1, optionIds:[101]},
                action: { // fix this
                    type: "next",
                    nextQuestionId: 3
                },
                resultReport: "some result report.",
                reply: "good job!"
        }
    )
    expect(message.findTrigger(triggerResponsePath)).toEqual(correctTrigger);
    expect(message.findTrigger(defaultResponsePath)).toEqual(defaultTrigger);

})