

import { mocked } from 'ts-jest/utils'
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';


import {MessageFactory} from '../../../model/index'
import {MessageType, Message, ResponsePath, Trigger} from '../../../model/index'
import {getSurvey, getModules} from '../../../data/data'
import ChatbotPage from './ChatbotPage'
import { ResultContextProvider } from '../../../data/context';
// import {MessageType, Message} from '../../../model/Message'

jest.mock('../../../data/data')
// jest.mock('../../../model/Message')
const mockedGetSurvey = getSurvey as jest.Mock<any>
const mockedGetModules = getModules as jest.Mock<any> 
// const mockedMessage: any = mocked(Message, true)


describe("ChatbotPage", () => {
    beforeAll(() => {

        const surveyDialogue = generateMessages()
        mockedGetSurvey.mockReturnValue(surveyDialogue)

        mockedGetModules.mockReturnValue(
         [{ name: "Privacy Policy", nodes: surveyDialogue }]
        )

        const trigger: Trigger = new Trigger([1,2], {}, "some result report", ["todo1"], ["reminder1"], "replyy");
        Message.prototype.findTrigger = jest.fn((responsePath: ResponsePath ) => trigger);

        // let spy = jest.spyOn(Message, 'findTrigger').mockImplementation((responsePath: ResponsePath): Trigger => trigger);
        // const mockedFindTrigger = jest.fn((trigger: any) => { return "yay"; });
        // mockedMessage.findTrigger = mockedFindTrigger;
        
    })

    test('mocked modules and questions are being loaded', () => {
        const surveyDialogue = generateMessages()
        mockedGetSurvey.mockReturnValue(surveyDialogue)

        const modules = [{ name: "Privacy Policy", nodes: surveyDialogue }]
        mockedGetModules.mockReturnValue(modules)

        let chatbotPage: any = new ChatbotPage();
        expect(chatbotPage.survey).toBe(surveyDialogue);
        expect(chatbotPage.modules).toBe(modules)
    })


    // test('findTrigger method is mocked', () => {
    //     let chatbotPage: any = new ChatbotPage();
    //     console.log(JSON.stringify(chatbotPage.handleSelectOptions({moduleId: 3, messageId: 0})))
    // })
    

    test('something or other', () => {
        const wrapper = mount(<ResultContextProvider><ChatbotPage /></ResultContextProvider>);

        const cbInstance = wrapper.childAt(0).instance()
        
        cbInstance.isInactiveQuestion = jest.fn().mockReturnValue(false);
        cbInstance.handleSelectOptions(1, 0)
    })

    function generateMessages() {
        const message1: Message= MessageFactory.createMessageFromData(
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
    
        const message2: Message = MessageFactory.createMessageFromData(
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
