

import {MessageFactory} from '../../../model/index'
import {MessageType, Message} from '../../../model/index'
import {getSurvey, getModules} from '../../../data/data'
import ChatbotPage from './ChatbotPage'
jest.mock('../../../data/data')
const mockedGetSurvey = getSurvey as jest.Mock<any>
const mockedGetModules = getModules as jest.Mock<any>

describe("ChatbotPage", () => {
    beforeEach(() => {
        const surveyDialogue = generateMessages()
        mockedGetSurvey.mockReturnValue(surveyDialogue)

        mockedGetModules.mockReturnValue(
         [{ name: "Privacy Policy", nodes: surveyDialogue }]
        )
    })

    test('mocked modules and questions are being loaded', () => {
        let chatbotPage: any = new ChatbotPage();
        console.log(JSON.stringify(chatbotPage.survey))
        
    })

    function generateMessages() {
        const message1 = MessageFactory.createMessageFromData(
            {
                id: 1,
                type: MessageType.singleSelect,
                content: "yuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuh",
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
                        expectedResponses: [100],
                        action: { // fix this
                            type: "next",
                            nextQuestionId: 2
                        },
                        resultReport: "some result report.",
                        todo: "todo item 1",
                        reminder: "reminder item 1"
                    },
                ],
                defaultTrigger: {
                    expectedResponses: [101],
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
    
        const message2 = MessageFactory.createMessageFromData(
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
                        expectedResponses: [100],
                        action: { // fix this
                            type: "exit",
                        },
                        resultReport: "some result report.",
                        todo: "todo item 1",
                        reminder: "reminder item 1"
                    },
                ],
                defaultTrigger: {
                    expectedResponses: [101],
                        action: { // fix this
                            type: "exit",
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

        return [message1, message2]
    
    }

})
