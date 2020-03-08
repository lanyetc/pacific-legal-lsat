

import { mocked } from 'ts-jest/utils'
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';


import {MessageFactory} from '../../../model/index'
import {MessageType, Message, ResponsePath, Trigger} from '../../../model/index'
import {getSurvey, getModules, generateMessages} from '../../../data/data'
import ChatbotPage from './ChatbotPage'
import { ResultContextProvider } from '../../../data/context';
import {ResponseItem} from '../../../model/index'
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
        
        const responseItem: ResponseItem = new ResponseItem(2, [101])
        const trigger: Trigger = new Trigger(responseItem, {}, "some result report", ["todo1"], ["reminder1"], "replyy");
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

        let chatbotPage: any = new ChatbotPage({});
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


})
