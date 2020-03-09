import { Item, Result } from './context';
import { Message, MessageFactory, MessageType } from '../model/index'
import { module2 } from './mod2'
import { privacyPolicyModule } from './privacyPolicyModule'
import { antiSpamModule } from './antiSpamModule'
import { privacyOfficerModule } from './privacyOfficerModule'
import { requestsForInformationModule } from './requestsForInformationModule'

export interface SurveyDialogue {
    [key: number]: Message
}

export interface Module {
    name: string,
    modules?: { [key: number]: Module },
    nodes?: SurveyDialogue
}

// COMMENTED OUT SURVEY UNTIL WE UPDATE IT

export function getSurvey() {
    let masterModule: any = []
    masterModule.concat(privacyPolicyModule, module2, privacyOfficerModule, requestsForInformationModule, antiSpamModule)
    return generateSurveyDialogue(masterModule)
}

export function getModules() {
    const privacyPolicySurvey: SurveyDialogue = generateSurveyDialogue(privacyPolicyModule);
    const personalInfoSurvey: SurveyDialogue = generateSurveyDialogue(module2);
    const privacyOfficerSurvey: SurveyDialogue = generateSurveyDialogue(privacyOfficerModule)
    const requestsForInformationSurvey: SurveyDialogue = generateSurveyDialogue(requestsForInformationModule);
    const antiSpamSurvey: SurveyDialogue = generateSurveyDialogue(antiSpamModule);

    const modules: any ={ 1: { name: "Privacy Policy", nodes: privacyPolicySurvey },
    2: { name: "Personal Info", nodes: personalInfoSurvey },
    3: { name: "Privacy Officer", nodes: privacyOfficerSurvey },
    4: { name: "Requests for Information", nodes: requestsForInformationSurvey },
    5: { name: "Anti Spam", nodes: antiSpamSurvey }}


}

export function generateSurveyDialogue(moduleData: any) {
    let survey: SurveyDialogue = {}
    moduleData.forEach((question: any) => {
        try {
            let newMessage: Message = MessageFactory.createMessageFromData(question)
            survey[newMessage.id] = newMessage;
        } catch (error) {
            console.log("questionid failed to cast to Messagetype: " + question.id)
        }
    });
    console.log("done");
    return survey
}

// function getSurvey() {
//     let survey: SurveyDialogue = {};
//     survey[1] = MessageFactory.createMessageFromData(
//         {
//             id: 1,
//             type: NodeTypes.single,
//             content: "Does your org have a privacy policy?",
//             options: [
//                 {
//                     id: 101,
//                     label: "Yes"
//                 },
//                 {
//                     id: 100,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 1, optionId: 101 }
//                     ],
//                     result: { questionId: 1, optionId: 101, repo: "some repo on quetion 1 Yes" },
//                     nextQuestionId: 3
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 1, optionId: 100 }
//                     ],
//                     result: { questionId: 1, optionId: 100, repo: "some repo on quetion 1 No" },
//                     todos: [{ title: "Todo Item 1" }],
//                     nextQuestionId: 2,
//                     nextModuleId: 2
//                 }
//             ],
//             extraInfo: {
//                 title: "What is a privacy policy?",
//                 content: "A privacy policy is a document which describes whose personal information we are collecting: " +
//                     "why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."
//             }
//         }
//     );
//     // questionId = 2 belongs to another submodule, so it's not included in here
//     survey[3] = createNode(
//         {
//             id: 3,
//             type: NodeTypes.single,
//             content: "Who is covered in your privacy policy?",
//             options: [
//                 {
//                     id: 300,
//                     label: "All"
//                 },
//                 {
//                     id: 301,
//                     label: "Not All"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 3, optionId: 300 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 3, optionId: 300, repo: "some repo on quetion 3 No" },
//                     nextQuestionId: 4
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 3, optionId: 301 }
//                     ],
//                     result: { questionId: 3, optionId: 301, repo: "some repo on quetion 3 Yes" },
//                     todos: [{ title: "Todo Item 2" }],
//                     nextQuestionId: 4
//                 }
//             ]
//         }
//     );
//     survey[4] = createNode(
//         {
//             id: 4,
//             type: NodeTypes.single,
//             content: "Org operates website?",
//             options: [
//                 {
//                     id: 401,
//                     label: "Yes"
//                 },
//                 {
//                     id: 400,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 4, optionId: 401 }
//                     ],
//                     result: { questionId: 4, optionId: 401, repo: "some repo on quetion 4 Yes" },
//                     nextQuestionId: 6
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 4, optionId: 400 }
//                     ],
//                     result: { questionId: 4, optionId: 400, repo: "some repo on quetion 4 No" },
//                     nextQuestionId: 5
//                 }
//             ]
//         }
//     );
//     survey[5] = createNode(
//         {
//             id: 5,
//             type: NodeTypes.single,
//             content: "Org uses social media?",
//             options: [
//                 {
//                     id: 501,
//                     label: "Yes"
//                 },
//                 {
//                     id: 500,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 5, optionId: 501 }
//                     ],
//                     result: { questionId: 5, optionId: 501, repo: "some repo on quetion 5 Yes" },
//                     nextQuestionId: 8
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 5, optionId: 500 }
//                     ],
//                     result: { questionId: 5, optionId: 500, repo: "some repo on quetion 5 No" },
//                     nextQuestionId: 7
//                 }
//             ]
//         }
//     );
//     survey[6] = createNode(
//         {
//             id: 6,
//             type: NodeTypes.single,
//             content: "Collect data for analytics?",
//             options: [
//                 {
//                     id: 601,
//                     label: "Yes"
//                 },
//                 {
//                     id: 600,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 6, optionId: 601 }
//                     ],
//                     result: { questionId: 6, optionId: 601, repo: "some repo on quetion 6 Yes" },
//                     nextQuestionId: 9
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 6, optionId: 600 }
//                     ],
//                     result: { questionId: 6, optionId: 600, repo: "some repo on quetion 6 No" },
//                     nextQuestionId: 5
//                 }
//             ],
//             extraInfo: {
//                 title: "WHAT ARE DATA ANALYTICS?",
//                 content: "Data analytics refers to tracking website usage for reporting and evaluating purposes. " +
//                     "Google Analytics is a common example of a data analytics service."
//             }
//         }
//     );
//     survey[7] = createNode(
//         {
//             id: 7,
//             type: NodeTypes.single,
//             content: "List of people trained on privacy policy?",
//             options: [
//                 {
//                     id: 701,
//                     label: "Yes"
//                 },
//                 {
//                     id: 700,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 7, optionId: 701 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 7, optionId: 701, repo: "some repo on quetion 7 Yes" },
//                     nextQuestionId: 2
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 7, optionId: 700 }
//                     ],
//                     result: { questionId: 7, optionId: 700, repo: "some repo on quetion 7 No" },
//                     todos: [{ title: "Todo Item 5" }],
//                     nextQuestionId: 2
//                 }
//             ]
//         }
//     );
//     survey[8] = createNode(
//         {
//             id: 8,
//             type: NodeTypes.single,
//             content: "Reviewed social media terms?",
//             options: [
//                 {
//                     id: 801,
//                     label: "Yes"
//                 },
//                 {
//                     id: 800,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 8, optionId: 801 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 8, optionId: 801, repo: "some repo on quetion 8 Yes" },
//                     nextQuestionId: 7
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 8, optionId: 800 }
//                     ],
//                     result: { questionId: 8, optionId: 800, repo: "some repo on quetion 8 No" },
//                     todos: [{ title: "Todo Item 4" }],
//                     nextQuestionId: 7
//                 }
//             ],
//             extraInfo: {
//                 title: "WHAT IS THIS?",
//                 content: "Terms and conditions are the agreement between a service and the service user. " +
//                     "This is the legal text that we agree to before using a service and it can often be " +
//                     "accessed by a link on the bottom of a website or within the settings."
//             }
//         }
//     );
//     survey[9] = createNode(
//         {
//             id: 9,
//             type: NodeTypes.single,
//             content: "Does your privacy policy describe the collection of analytics?",
//             options: [
//                 {
//                     id: 901,
//                     label: "Yes"
//                 },
//                 {
//                     id: 900,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 9, optionId: 901 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 9, optionId: 901, repo: "some repo on quetion 9 Yes" },
//                     nextQuestionId: 5
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 9, optionId: 900 }
//                     ],
//                     result: { questionId: 9, optionId: 900, repo: "some repo on quetion 9 No" },
//                     todos: [{ title: "Todo Item 3" }],
//                     nextQuestionId: 5
//                 }
//             ]
//         }
//     );



//     return survey;
// }

// function getSurvey_part1() {
//     let survey: SurveyDialogue = {};
//     survey[1] = createNode(
//         {
//             id: 1,
//             type: NodeTypes.single,
//             content: "Does your org have a privacy policy?",
//             options: [
//                 {
//                     id: 101,
//                     label: "Yes"
//                 },
//                 {
//                     id: 100,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 1, optionId: 101 }
//                     ],
//                     result: { questionId: 1, optionId: 101, repo: "some repo on quetion 1 Yes" },
//                     nextQuestionId: 3
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 1, optionId: 100 }
//                     ],
//                     result: { questionId: 1, optionId: 100, repo: "some repo on quetion 1 No" },
//                     todos: [{ title: "Todo Item 1" }],
//                     nextQuestionId: 2,
//                     nextModuleId: 2
//                 }
//             ],
//             extraInfo: {
//                 title: "What is a privacy policy?",
//                 content: "A privacy policy is a document which describes whose personal information we are collecting: " +
//                     "why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."
//             }
//         }
//     );
//     // questionId = 2 belongs to another submodule, so it's not included in here
//     survey[3] = createNode(
//         {
//             id: 3,
//             type: NodeTypes.single,
//             content: "Who is covered in your privacy policy?",
//             options: [
//                 {
//                     id: 300,
//                     label: "All"
//                 },
//                 {
//                     id: 301,
//                     label: "Not All"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 3, optionId: 300 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 3, optionId: 300, repo: "some repo on quetion 3 No" },
//                     nextQuestionId: 4
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 3, optionId: 301 }
//                     ],
//                     result: { questionId: 3, optionId: 301, repo: "some repo on quetion 3 Yes" },
//                     reminders: [{ title: "Todo Item 2" }],
//                     nextQuestionId: 4
//                 }
//             ]
//         }
//     );
//     survey[4] = createNode(
//         {
//             id: 4,
//             type: NodeTypes.single,
//             content: "Org operates website?",
//             options: [
//                 {
//                     id: 401,
//                     label: "Yes"
//                 },
//                 {
//                     id: 400,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 4, optionId: 401 }
//                     ],
//                     result: { questionId: 4, optionId: 401, repo: "some repo on quetion 4 Yes" },
//                     nextQuestionId: 6
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 4, optionId: 400 }
//                     ],
//                     result: { questionId: 4, optionId: 400, repo: "some repo on quetion 4 No" },
//                     nextQuestionId: 5
//                 }
//             ]
//         }
//     );
//     survey[5] = createNode(
//         {
//             id: 5,
//             type: NodeTypes.single,
//             content: "Org uses social media?",
//             options: [
//                 {
//                     id: 501,
//                     label: "Yes"
//                 },
//                 {
//                     id: 500,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 5, optionId: 501 }
//                     ],
//                     result: { questionId: 5, optionId: 501, repo: "some repo on quetion 5 Yes" },
//                     nextQuestionId: 8
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 5, optionId: 500 }
//                     ],
//                     result: { questionId: 5, optionId: 500, repo: "some repo on quetion 5 No" },
//                     nextQuestionId: 7
//                 }
//             ]
//         }
//     );
//     survey[6] = createNode(
//         {
//             id: 6,
//             type: NodeTypes.single,
//             content: "Collect data for analytics?",
//             options: [
//                 {
//                     id: 601,
//                     label: "Yes"
//                 },
//                 {
//                     id: 600,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 6, optionId: 601 }
//                     ],
//                     result: { questionId: 6, optionId: 601, repo: "some repo on quetion 6 Yes" },
//                     nextQuestionId: 9
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 6, optionId: 600 }
//                     ],
//                     result: { questionId: 6, optionId: 600, repo: "some repo on quetion 6 No" },
//                     nextQuestionId: 5
//                 }
//             ],
//             extraInfo: {
//                 title: "WHAT ARE DATA ANALYTICS?",
//                 content: "Data analytics refers to tracking website usage for reporting and evaluating purposes. " +
//                     "Google Analytics is a common example of a data analytics service."
//             }
//         }
//     );
//     survey[7] = createNode(
//         {
//             id: 7,
//             type: NodeTypes.single,
//             content: "List of people trained on privacy policy?",
//             options: [
//                 {
//                     id: 701,
//                     label: "Yes"
//                 },
//                 {
//                     id: 700,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 7, optionId: 701 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 7, optionId: 701, repo: "some repo on quetion 7 Yes" },
//                     nextQuestionId: 2,
//                     nextModuleId: 2
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 7, optionId: 700 }
//                     ],
//                     result: { questionId: 7, optionId: 700, repo: "some repo on quetion 7 No" },
//                     reminders: [{ title: "Todo Item 5" }],
//                     nextQuestionId: 2,
//                     nextModuleId: 2
//                 }
//             ]
//         }
//     );
//     survey[8] = createNode(
//         {
//             id: 8,
//             type: NodeTypes.single,
//             content: "Reviewed social media terms?",
//             options: [
//                 {
//                     id: 801,
//                     label: "Yes"
//                 },
//                 {
//                     id: 800,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 8, optionId: 801 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 8, optionId: 801, repo: "some repo on quetion 8 Yes" },
//                     nextQuestionId: 7
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 8, optionId: 800 }
//                     ],
//                     result: { questionId: 8, optionId: 800, repo: "some repo on quetion 8 No" },
//                     reminders: [{ title: "Todo Item 4" }],
//                     nextQuestionId: 7
//                 }
//             ],
//             extraInfo: {
//                 title: "WHAT IS THIS?",
//                 content: "Terms and conditions are the agreement between a service and the service user. " +
//                     "This is the legal text that we agree to before using a service and it can often be " +
//                     "accessed by a link on the bottom of a website or within the settings."
//             }
//         }
//     );
//     survey[9] = createNode(
//         {
//             id: 9,
//             type: NodeTypes.single,
//             content: "Does your privacy policy describe the collection of analytics?",
//             options: [
//                 {
//                     id: 901,
//                     label: "Yes"
//                 },
//                 {
//                     id: 900,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 9, optionId: 901 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 9, optionId: 901, repo: "some repo on quetion 9 Yes" },
//                     nextQuestionId: 5
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 9, optionId: 900 }
//                     ],
//                     result: { questionId: 9, optionId: 900, repo: "some repo on quetion 9 No" },
//                     reminders: [{ title: "Todo Item 3" }],
//                     nextQuestionId: 5
//                 }
//             ]
//         }
//     );



//     return survey;
// }

// function getSurvey_part2() {
//     let survey: SurveyDialogue = {};
//     survey[2] = createNode(
//         {
//             id: 2,
//             type: NodeTypes.message,
//             content: "Explain what is personal info and what isn’t",
//             options: [],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [],
//                     nextQuestionId: 10
//                 }
//             ]
//         }
//     );
//     survey[10] = createNode(
//         {
//             id: 10,
//             type: NodeTypes.single,
//             content: "Does your org collect personal information?",
//             options: [
//                 {
//                     id: 1001,
//                     label: "Yes"
//                 },
//                 {
//                     id: 1000,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 10, optionId: 1001 }
//                     ],
//                     result: { questionId: 10, optionId: 1001, repo: "some repo on question 10 Yes" },
//                     nextQuestionId: 12
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 10, optionId: 1000 }
//                     ],
//                     result: { questionId: 10, optionId: 1000, repo: "some repo on question 10 No" },
//                     nextQuestionId: 11,
//                     nextModuleId: 3
//                 }
//             ]
//         }
//     )
//     survey[12] = createNode(
//         {
//             id: 12,
//             type: NodeTypes.single,
//             content: "Do you explain what the P.I. will be used for?",
//             options: [
//                 {
//                     id: 1201,
//                     label: "Yes"
//                 },
//                 {
//                     id: 1200,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 12, optionId: 1201 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 12, optionId: 1201, repo: "some repo on question 12 Yes" },
//                     nextQuestionId: 13
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 12, optionId: 1200 }
//                     ],
//                     todos: [{ title: "Todo Item 6" }],
//                     result: { questionId: 12, optionId: 1200, repo: "some repo on question 12 No" },
//                     nextQuestionId: 13
//                 }
//             ]
//         }
//     )
//     survey[13] = createNode(
//         {
//             id: 13,
//             type: NodeTypes.single,
//             content: "Do you obtain consent from the person?",
//             options: [
//                 {
//                     id: 1301,
//                     label: "Yes"
//                 },
//                 {
//                     id: 1300,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 13, optionId: 1301 }
//                     ],
//                     result: { questionId: 13, optionId: 1301, repo: "some repo on question 13 Yes" },
//                     nextQuestionId: 15
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 13, optionId: 1300 }
//                     ],
//                     result: { questionId: 13, optionId: 1300, repo: "some repo on question 13 No" },
//                     nextQuestionId: 14
//                 }
//             ]
//         }
//     )
//     survey[14] = createNode(
//         {
//             id: 14,
//             type: NodeTypes.multi,
//             content: "Our information is collected .. Select all that apply.",
//             options: [
//                 {
//                     id: 1401,
//                     label: "Yes"
//                 },
//                 {
//                     id: 1400,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 14, optionId: 1401 }
//                     ],
//                     result: { questionId: 14, optionId: 1401, repo: "some repo on question 14 Yes" },
//                     nextQuestionId: 17
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 14, optionId: 1400 }
//                     ],
//                     result: { questionId: 14, optionId: 1400, repo: "some repo on question 14 No" },
//                     nextQuestionId: 16
//                 }
//             ]
//         }
//     )
//     survey[15] = createNode(
//         {
//             id: 15,
//             type: NodeTypes.multi,
//             content: "Do you use a consent form?",
//             options: [
//                 {
//                     id: 1501,
//                     label: "Yes"
//                 },
//                 {
//                     id: 1500,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 15, optionId: 1501 }
//                     ],
//                     response: ["Good Job."],
//                     result: { questionId: 15, optionId: 1501, repo: "some repo on question 15 Yes" },
//                     nextQuestionId: 14
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 15, optionId: 1500 }
//                     ],
//                     reminders: [{ title: "Todo Item 7" }],
//                     result: { questionId: 15, optionId: 1500, repo: "some repo on question 15 No" },
//                     nextQuestionId: 16
//                 }
//             ]
//         }
//     )
//     survey[16] = createNode(
//         {
//             id: 16,
//             type: NodeTypes.single,
//             content: "Is the person an employee of the org?",
//             options: [
//                 {
//                     id: 1601,
//                     label: "Yes"
//                 },
//                 {
//                     id: 1600,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 16, optionId: 1601 }
//                     ],
//                     result: { questionId: 16, optionId: 1601, repo: "some repo on question 16 Yes" },
//                     nextQuestionId: 18
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 16, optionId: 1600 }
//                     ],
//                     result: { questionId: 16, optionId: 1600, repo: "some repo on question 16 No" },
//                     todos: [{ title: "Todo Item 8" }],
//                     nextQuestionId: 17
//                 }
//             ]
//         }
//     )
//     survey[17] = createNode(
//         {
//             id: 17,
//             type: NodeTypes.single,
//             content: "Does the P.I you collect help fufill the orgs mission/purpose?",
//             options: [
//                 {
//                     id: 1701,
//                     label: "Yes"
//                 },
//                 {
//                     id: 1700,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 17, optionId: 1701 }
//                     ],
//                     result: { questionId: 17, optionId: 1701, repo: "some repo on question 17 Yes" },
//                     nextQuestionId: 20
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 17, optionId: 1700 }
//                     ],
//                     result: { questionId: 17, optionId: 1700, repo: "some repo on question 17 No" },
//                     nextQuestionId: 20
//                 }
//             ],
//             extraInfo: {
//                 title: "I NEED MORE INFORMATION",
//                 content: "Information collected should be related to the society’s purpose/goals. " +
//                     "For example, “we are a theatre company and collect information from our subscribers to sell tickets.”"
//             },
//         }
//     )
//     survey[18] = createNode(
//         {
//             id: 18,
//             type: NodeTypes.single,
//             content: "Select reasons for collecting employee information. Select one.",
//             options: [
//                 {
//                     id: 1800,
//                     label: "Establish employment"
//                 },
//                 {
//                     id: 1801,
//                     label: "Manage employment"
//                 },
//                 {
//                     id: 1802,
//                     label: "Terminate employment"
//                 },
//                 {
//                     id: 1803,
//                     label: "Other reasons"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 18, optionId: 1803 }
//                     ],
//                     result: { questionId: 18, optionId: 1803, repo: "some repo on question 18 other reasons" },
//                     todos: [{ title: "Todo Item 8" }],
//                     nextQuestionId: 17
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     result: { questionId: 18, optionId: 1800, repo: "some repo on question 18" },
//                     nextQuestionId: 19
//                 }
//             ]
//         }
//     )
//     survey[19] = createNode(
//         {
//             id: 19,
//             type: NodeTypes.single,
//             content: "Do you let these employees know ahead of time?",
//             options: [
//                 {
//                     id: 1901,
//                     label: "Yes"
//                 },
//                 {
//                     id: 1900,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 19, optionId: 1900 }
//                     ],
//                     result: { questionId: 19, optionId: 1900, repo: "some repo on question 19 N0" },
//                     todos: [{ title: "Todo Item 9" }],
//                     nextQuestionId: 17
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 19, optionId: 1901 }
//                     ],
//                     response: ["Good Job"],
//                     result: { questionId: 18, optionId: 1800, repo: "some repo on question 19 Yes" },
//                     nextQuestionId: 17
//                 }
//             ]
//         }
//     )
//     survey[20] = createNode(
//         {
//             id: 20,
//             type: NodeTypes.multi,
//             content: "Select the reasons you collect personal information. Select all that apply.",
//             options: [
//                 {
//                     id: 2000,
//                     label: "To communicate with members"
//                 },
//                 {
//                     id: 2001,
//                     label: "To send newsletters and invitations"
//                 },
//                 {
//                     id: 2002,
//                     label: "For service phone calls and emails"
//                 },
//                 {
//                     id: 2003,
//                     label: "For audit purposes"
//                 },
//                 {
//                     id: 2004,
//                     label: "To solicit donations"
//                 },
//                 {
//                     id: 2005,
//                     label: "To issue tax receipts"
//                 },
//                 {
//                     id: 2006,
//                     label: "Other reasons"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 20, optionId: 2006 }
//                     ],
//                     result: { questionId: 20, optionId: 2006, repo: "some repo on question 20 Other reasons" },
//                     response: ["Your use of personal information could be problematic. Check the “Permissions for Personal Information” at the end of the assessment to learn more."],
//                     todos: [{title: "Todo Item 10"}],
//                     nextQuestionId: 21
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     response: ["Great - these are all permissible uses of personal information!"],
//                     result: { questionId: 20, optionId: 2000, repo: "some repo on question 20" },
//                     nextQuestionId: 21
//                 }
//             ]
//         }
//     )
//     survey[21] = createNode(
//         {
//             id: 21,
//             type: NodeTypes.single,
//             content: "Does your organization give out personal information either within or outside the organization?",
//             options: [
//                 {
//                     id: 2101,
//                     label: "Yes"
//                 },
//                 {
//                     id: 2100,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 21, optionId: 2100 }
//                     ],
//                     result: { questionId: 21, optionId: 2100, repo: "some repo on question 21 No" },
//                     nextQuestionId: 28
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 21, optionId: 2101 }
//                     ],
//                     result: { questionId: 21, optionId: 2101, repo: "some repo on question 21 Yes" },
//                     nextQuestionId: 22
//                 }
//             ]
//         }
//     )
//     survey[22] = createNode(
//         {
//             id: 22,
//             type: NodeTypes.single,
//             content: "Do you get explicit consent from people before giving out their personal information?",
//             options: [
//                 {
//                     id: 2201,
//                     label: "Yes"
//                 },
//                 {
//                     id: 2200,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 22, optionId: 2200 }
//                     ],
//                     result: { questionId: 22, optionId: 2200, repo: "some repo on question 22 No" },
//                     nextQuestionId: 23
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 22, optionId: 2201 }
//                     ],
//                     response: ["Great!"],
//                     result: { questionId: 22, optionId: 2201, repo: "some repo on question 22 Yes" },
//                     nextQuestionId: 24
//                 }
//             ],
//             extraInfo: {title: "WHAT IS EXPLICIT CONSENT?", content: "For example, this could include..."}
//         }
//     )
//     survey[23] = createNode(
//         {
//             id: 23,
//             type: NodeTypes.single,
//             content: "Is the purpose for collecting personal information obvious?",
//             options: [
//                 {
//                     id: 2301,
//                     label: "Yes"
//                 },
//                 {
//                     id: 2300,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 23, optionId: 2300 }
//                     ],
//                     result: { questionId: 23, optionId: 2300, repo: "some repo on question 23 No" },
//                     todos: [{title: "Todo Item 11"}],
//                     nextQuestionId: 25
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 23, optionId: 2301 }
//                     ],
//                     result: { questionId: 23, optionId: 2301, repo: "some repo on question 23 Yes" },
//                     nextQuestionId: 25
//                 }
//             ]
//         }
//     )
//     survey[24] = createNode(
//         {
//             id: 24,
//             type: NodeTypes.single,
//             content: "Have you been required to provide personal information due to a court order or subpoena?",
//             options: [
//                 {
//                     id: 2401,
//                     label: "Yes"
//                 },
//                 {
//                     id: 2400,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 24, optionId: 2400 }
//                     ],
//                     result: { questionId: 24, optionId: 2400, repo: "some repo on question 24 No" },
//                     nextQuestionId: 26
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 24, optionId: 2401 }
//                     ],
//                     result: { questionId: 24, optionId: 2401, repo: "some repo on question 24 Yes" },
//                     nextQuestionId: 27
//                 }
//             ]
//         }
//     )
//     survey[25] = createNode(
//         {
//             id: 25,
//             type: NodeTypes.single,
//             content: "Do these people voluntarily provide their personal information?",
//             options: [
//                 {
//                     id: 2501,
//                     label: "Yes"
//                 },
//                 {
//                     id: 2500,
//                     label: "No"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 25, optionId: 2500 }
//                     ],
//                     result: { questionId: 25, optionId: 2500, repo: "some repo on question 25 No" },
//                     todos: [{title: "Todo Item 12"}],
//                     nextQuestionId: 24
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 25, optionId: 2501 }
//                     ],
//                     response: ["Good job!"],
//                     result: { questionId: 25, optionId: 2501, repo: "some repo on question 25 Yes" },
//                     nextQuestionId: 24
//                 }
//             ]
//         }
//     )
//     survey[26] = createNode(
//         {
//             id: 26,
//             type: NodeTypes.multi,
//             content: "Select all the reasons you disclose personal information internally, including information from a Members Register. (Multiple choice, select all that apply).",
//             options: [
//                 {
//                     id: 2600,
//                     label: "To register/call a general meeting"
//                 },
//                 {
//                     id: 2601,
//                     label: "To submit a member proposal"
//                 },
//                 {
//                     id: 2602,
//                     label: "To influence the voting of members"
//                 },
//                 {
//                     id: 2603,
//                     label: "Other reasons"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 26, optionId: 2603 }
//                     ],
//                     result: { questionId: 26, optionId: 2603, repo: "some repo on question 27 Other reasons" },
//                     todos: [{title: "Todo Item 14"}],
//                     nextQuestionId: 28
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     response: ["Great!"],
//                     result: { questionId: 26, optionId: 2601, repo: "some repo on question 26" },
//                     nextQuestionId: 28
//                 }
//             ]
//         }
//     )
//     survey[27] = createNode(
//         {
//             id: 27,
//             type: NodeTypes.single,
//             content: "Does your privacy policy explain that you may disclose personal information for legal reasons?",
//             options: [
//                 {
//                     id: 2701,
//                     label: "Yes"
//                 },
//                 {
//                     id: 2700,
//                     label: "No"
//                 },
//                 {
//                     id: 2702,
//                     label: "NO PRIVACY POLICY YET"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 27, optionId: 2700 }
//                     ],
//                     result: { questionId: 27, optionId: 2700, repo: "some repo on question 27 No" },
//                     response: ["Got it, adding this to your to-do list!"],
//                     reminders: [{title: "Todo Item 13"}],
//                     nextQuestionId: 26
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 27, optionId: 2701 }
//                     ],
//                     result: { questionId: 27, optionId: 2701, repo: "some repo on question 27 Yes" },
//                     response: ["Perfect!"],
//                     nextQuestionId: 26
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 27, optionId: 2702 }
//                     ],
//                     response: ["Okay, be sure to add this information to your privacy policy once you create it!"],
//                     reminders: [{title: "Todo Item 13"}],
//                     result: { questionId: 27, optionId: 2702, repo: "some repo on question 27 No PP" },
//                     nextQuestionId: 26
//                 }
//             ]
//         }
//     )
//     survey[28] = createNode(
//         {
//             id: 28,
//             type: NodeTypes.single,
//             content: "Let’s talk about storing personal information! Select everyone who can access personal information.",
//             options: [
//                 {
//                     id: 2800,
//                     label: "All employees"
//                 },
//                 {
//                     id: 2801,
//                     label: "All employees and volunteers"
//                 },
//                 {
//                     id: 2802,
//                     label: "A small number of authorized individuals"
//                 },
//                 {
//                     id: 2803,
//                     label: "No one"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 28, optionId: 2800 }
//                     ],
//                     result: { questionId: 28, optionId: 2800, repo: "some repo on question 28 All" },
//                     response: ["Okay for small organizations. If you are a larger organization, you will want to reduce access to only a few individuals."],
//                     nextQuestionId: 29
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 28, optionId: 2801 }
//                     ],
//                     result: { questionId: 28, optionId: 2801, repo: "some repo on question 28 small" },
//                     response: ["Perfect!"],
//                     nextQuestionId: 29
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 28, optionId: 2802 }
//                     ],
//                     response: ["Let’s change the access to a few designated individuals!"],
//                     todos: [{title: "Todo Item 15"}],
//                     result: { questionId: 28, optionId: 2802, repo: "some repo on question 28 volunteers" },
//                     nextQuestionId: 29
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 28, optionId: 2803 }
//                     ],
//                     response: ["Let’s change the access to a few designated individuals!"],
//                     todos: [{title: "Todo Item 15"}],
//                     result: { questionId: 28, optionId: 2803, repo: "some repo on question 28 no one" },
//                     nextQuestionId: 29
//                 }
//             ]
//         }
//     )
//     survey[29] = createNode(
//         {
//             id: 29,
//             type: NodeTypes.single,
//             content: "Do you have policies and procedures to keep personal information secure?",
//             options: [
//                 {
//                     id: 2901,
//                     label: "YES"
//                 },
//                 {
//                     id: 2900,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 29, optionId: 2900 }
//                     ],
//                     result: { questionId: 29, optionId: 2900, repo: "some repo on question 29 No" },
//                     reminders: [{title: "Todo Item 16"}],
//                     response: ["Be sure to keep personal information secure! Check your results at the end of the module to find more tips on securing personal information."],
//                     nextQuestionId: 30
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 29, optionId: 2901 }
//                     ],
//                     result: { questionId: 29, optionId: 2901, repo: "some repo on question 29 Yes" },
//                     response: ["Good for you!"],
//                     nextQuestionId: 30
//                 }
//             ]
//         }
//     )
//     survey[30] = createNode(
//         {
//             id: 30,
//             type: NodeTypes.single,
//             content: "Where do you store personal information?",
//             options: [
//                 {
//                     id: 3000,
//                     label: "ON PAPER"
//                 },
//                 {
//                     id: 3001,
//                     label: "ON THE COMPUTER"
//                 },
//                 {
//                     id: 3002,
//                     label: "ON THE COMPUTER AND ON PAPER"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 30, optionId: 3000 }
//                     ],
//                     result: { questionId: 30, optionId: 3000, repo: "some repo on question 30 paper" },
//                     nextQuestionId: 33
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 30, optionId: 3001 }
//                     ],
//                     result: { questionId: 30, optionId: 3001, repo: "some repo on question 30 paper/digital" },
//                     nextQuestionId: 31
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 30, optionId: 3002 }
//                     ],
//                     result: { questionId: 30, optionId: 3002, repo: "some repo on question 30 digital" },
//                     nextQuestionId: 32
//                 }
//             ]
//         }
//     )
//     survey[31] = createNode(
//         {
//             id: 31,
//             type: NodeTypes.single,
//             content: "Do you keep your sensitive data encrypted?",
//             options: [
//                 {
//                     id: 3101,
//                     label: "YES"
//                 },
//                 {
//                     id: 3100,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 31, optionId: 3100 }
//                     ],
//                     result: { questionId: 31, optionId: 3100, repo: "some repo on question 31 No" },
//                     response: ["This is a great way to keep data secure, added to your list"],
//                     reminders: [{title: "Todo Item 18"}],
//                     nextQuestionId: 34
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 31, optionId: 3101 }
//                     ],
//                     result: { questionId: 31, optionId: 3101, repo: "some repo on question 31 Yes" },
//                     response: ["Great!"],
//                     nextQuestionId: 34
//                 }
//             ]
//         }
//     )
//     survey[32] = createNode(
//         {
//             id: 32,
//             type: NodeTypes.single,
//             content: "Do you keep your paper documents in a locked cabinet?",
//             options: [
//                 {
//                     id: 3201,
//                     label: "YES"
//                 },
//                 {
//                     id: 3200,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 32, optionId: 3200 }
//                     ],
//                     result: { questionId: 32, optionId: 3200, repo: "some repo on question 32 No" },
//                     response: ["Lock those documents up!"],
//                     todos: [{title: "Todo Item 17"}],
//                     nextQuestionId: 31
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 32, optionId: 3201 }
//                     ],
//                     result: { questionId: 32, optionId: 3201, repo: "some repo on question 32 Yes" },
//                     response: ["Good job!"],
//                     nextQuestionId: 31
//                 }
//             ]
//         }
//     )
//     survey[33] = createNode(
//         {
//             id: 33,
//             type: NodeTypes.single,
//             content: "Do you keep your paper documents in a locked cabinet?",
//             options: [
//                 {
//                     id: 3301,
//                     label: "YES"
//                 },
//                 {
//                     id: 3300,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 33, optionId: 3300 }
//                     ],
//                     result: { questionId: 33, optionId: 3300, repo: "some repo on question 33 No" },
//                     response: ["Lock those documents up!"],
//                     todos: [{title: "Todo Item 17"}],
//                     nextQuestionId: 39
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 33, optionId: 3301 }
//                     ],
//                     result: { questionId: 33, optionId: 3301, repo: "some repo on question 33 Yes" },
//                     response: ["Good job!"],
//                     nextQuestionId: 39
//                 }
//             ]
//         }
//     )
//     survey[34] = createNode(
//         {
//             id: 34,
//             type: NodeTypes.single,
//             content: "Is your digital content password protected?",
//             options: [
//                 {
//                     id: 3401,
//                     label: "YES"
//                 },
//                 {
//                     id: 3400,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 34, optionId: 3400 }
//                     ],
//                     result: { questionId: 34, optionId: 3400, repo: "some repo on question 34 No" },
//                     response: ["Always use passwords to keep your digital content secure."],
//                     todos: [{title: "Todo Item 19"}],
//                     nextQuestionId: 36
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 34, optionId: 3401 }
//                     ],
//                     result: { questionId: 34, optionId: 3401, repo: "some repo on question 34 Yes" },
//                     nextQuestionId: 35
//                 }
//             ]
//         }
//     )
//     survey[35] = createNode(
//         {
//             id: 35,
//             type: NodeTypes.single,
//             content: "How often do you change your passwords?",
//             options: [
//                 {
//                     id: 3500,
//                     label: "0-6 MONTHS"
//                 },
//                 {
//                     id: 3501,
//                     label: "6-12 MONTHS"
//                 },
//                 {
//                     id: 3502,
//                     label: "OVER A YEAR"
//                 },
//                 {
//                     id: 3503,
//                     label: "NEVER"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 35, optionId: 3500 }
//                     ],
//                     result: { questionId: 35, optionId: 3500, repo: "some repo on question 35 0-6" },
//                     response: ["Awesome, keep it up!"],
//                     nextQuestionId: 36
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 35, optionId: 3501 }
//                     ],
//                     result: { questionId: 35, optionId: 3501, repo: "some repo on question 35 6-12" },
//                     response: ["Pretty good, try changing your passwords every 6 months."],
//                     nextQuestionId: 36
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     result: { questionId: 35, optionId: 3502, repo: "some repo on question 35 over 1 year" },
//                     response: ["Change passwords every 6 months to keep your digital content secure."],
//                     reminders: [{title: "Todo Item 20"}],
//                     nextQuestionId: 36
//                 }
//             ]
//         }
//     )
//     survey[36] = createNode(
//         {
//             id: 36,
//             type: NodeTypes.single,
//             content: "Do you collect Digitally Created Personal Information (D.C.P.I.), such as information from website traffic?",
//             options: [
//                 {
//                     id: 3601,
//                     label: "YES"
//                 },
//                 {
//                     id: 3600,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 36, optionId: 3600 }
//                     ],
//                     result: { questionId: 36, optionId: 3600, repo: "some repo on question 36 No" },
//                     nextQuestionId: 38
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 36, optionId: 3601 }
//                     ],
//                     result: { questionId: 36, optionId: 3601, repo: "some repo on question 36 Yes" },
//                     nextQuestionId: 37
//                 }
//             ],
//             extraInfo: {
//                 title: "WHAT IS D.C.P.I.?",
//                 content: " Digitally created personal information includes location information, " + 
//                     "including GPS data; device identifiers such as IP and MAC addresses; click stream data, " +
//                     "browser history, bookmarks; user generated social network data such as comments, ratings, " +
//                     "likes and dislikes, Twitter stream, or customer service interactions." 
//             }
//         }
//     )
//     survey[37] = createNode(
//         {
//             id: 37,
//             type: NodeTypes.single,
//             content: "Does your privacy policy include information about the D.C.P.I. you collect?",
//             options: [
//                 {
//                     id: 3701,
//                     label: "YES"
//                 },
//                 {
//                     id: 3700,
//                     label: "NO"
//                 },
//                 {
//                     id: 3702,
//                     label: "NO PRIVACY POLICY YET"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 37, optionId: 3700 }
//                     ],
//                     result: { questionId: 37, optionId: 3700, repo: "some repo on question 37 No" },
//                     response: ["Added to your list! Check out your results at the end to find suggested wording to add to your privacy policy."],
//                     reminders: [{title: "Todo Item 21"}],
//                     nextQuestionId: 38
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 37, optionId: 3701 }
//                     ],
//                     result: { questionId: 37, optionId: 3701, repo: "some repo on question 37 Yes" },
//                     response: ["Great!"],
//                     nextQuestionId: 38
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 37, optionId: 3702 }
//                     ],
//                     result: { questionId: 37, optionId: 3702, repo: "some repo on question 37 No PP" },
//                     response: ["Be sure to include this when you make your privacy policy!"],
//                     reminders: [{title: "Todo Item 21"}],
//                     nextQuestionId: 38
//                 }
//             ]
//         }
//     )
//     survey[38] = createNode(
//         {
//             id: 38,
//             type: NodeTypes.single,
//             content: "How often do you review your antivirus software?",
//             options: [
//                 {
//                     id: 3800,
//                     label: "0-6 MONTHS"
//                 },
//                 {
//                     id: 3801,
//                     label: "6-12 MONTHS"
//                 },
//                 {
//                     id: 3802,
//                     label: "MORE THAN A YEAR"
//                 },
//                 {
//                     id: 3803,
//                     label: "NEVER"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 38, optionId: 3800 }
//                     ],
//                     result: { questionId: 38, optionId: 3800, repo: "some repo on question 38 0-6" },
//                     response: ["Great!"],
//                     nextQuestionId: 39
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 38, optionId: 3803 }
//                     ],
//                     result: { questionId: 38, optionId: 3803, repo: "some repo on question 38 never" },
//                     reminders: [{title: "Todo Item 22"}],
//                     response: ["It’s a good idea to review your antivirus software every 6 months."],
//                     nextQuestionId: 39
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     result: { questionId: 38, optionId: 3802, repo: "some repo on question 38" },
//                     response: ["Not bad, try to review once every 6 months!"],
//                     nextQuestionId: 39
//                 }
//             ]
//         }
//     )
//     survey[39] = createNode(
//         {
//             id: 39,
//             type: NodeTypes.single,
//             content: "Do you have personal information that is no longer necessary for legal or business purposes?",
//             options: [
//                 {
//                     id: 3901,
//                     label: "YES"
//                 },
//                 {
//                     id: 3900,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 39, optionId: 3900 }
//                     ],
//                     result: { questionId: 39, optionId: 3900, repo: "some repo on question 39 no" },
//                     nextQuestionId: 42
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 39, optionId: 3901 }
//                     ],
//                     result: { questionId: 39, optionId: 3901, repo: "some repo on question 39 yes" },
//                     nextQuestionId: 40
//                 }
//             ]
//         }
//     )
//     survey[40] = createNode(
//         {
//             id: 40,
//             type: NodeTypes.single,
//             content: "How long are you keeping this information?",
//             options: [
//                 {
//                     id: 4000,
//                     label: "LESS THAN 1 YEAR"
//                 },
//                 {
//                     id: 4001,
//                     label: "MORE THAN 1 YEAR"
//                 },
//                 {
//                     id: 4002,
//                     label: "PERMANENTLY"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 40, optionId: 4002 }
//                     ],
//                     result: { questionId: 40, optionId: 4002, repo: "some repo on question 40 PERMANENTLY" },
//                     response: ["Not a good idea, let’s keep going to see what we should do with this information."],
//                     todos: [{title: "Todo Item 23"}],
//                     nextQuestionId: 42
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     result: { questionId: 40, optionId: 4001, repo: "some repo on question 40" },
//                     nextQuestionId: 41
//                 }
//             ]
//         }
//     )
//     survey[41] = createNode(
//         {
//             id: 41,
//             type: NodeTypes.single,
//             content: "Is the personal information you still have being used to make a decision that would affect this individual?",
//             options: [
//                 {
//                     id: 4101,
//                     label: "YES"
//                 },
//                 {
//                     id: 4100,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 41, optionId: 4100 }
//                     ],
//                     result: { questionId: 41, optionId: 4100, repo: "some repo on question 41 no" },
//                     response: ["If the personal information has no relevance, it is time to destroy it."],
//                     todos: [{title: "Todo Item 24"}],
//                     nextQuestionId: 42
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 41, optionId: 4101 }
//                     ],
//                     result: { questionId: 41, optionId: 4101, repo: "some repo on question 41 yes" },
//                     response: ["Okay, keep the information for one year after making the decision."],
//                     nextQuestionId: 42
//                 }
//             ]
//         }
//     )
//     survey[42] = createNode(
//         {
//             id: 42,
//             type: NodeTypes.single,
//             content: "How long do you keep your financial information?",
//             options: [
//                 {
//                     id: 4200,
//                     label: "LESS THAN 7 YEARS"
//                 },
//                 {
//                     id: 4201,
//                     label: "7 YEARS"
//                 },
//                 {
//                     id: 4202,
//                     label: "MORE THAN 7 YEARS"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 42, optionId: 4200 }
//                     ],
//                     result: { questionId: 42, optionId: 4200, repo: "some repo on question 42 4200" },
//                     response: ["Keep financial information for 7 years."],
//                     todos: [{title: "Todo Item 25"}],
//                     nextQuestionId: 43
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 42, optionId: 4201 }
//                     ],
//                     result: { questionId: 42, optionId: 4201, repo: "some repo on question 41 4201" },
//                     response: ["Perfect!"],
//                     nextQuestionId: 43
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 42, optionId: 4202 }
//                     ],
//                     result: { questionId: 42, optionId: 4202, repo: "some repo on question 41 4202" },
//                     response: ["Destroy financial information after 7 years."],
//                     nextQuestionId: 43
//                 }
//             ]
//         }
//     )
//     survey[43] = createNode(
//         {
//             id: 43,
//             type: NodeTypes.single,
//             content: "How long does your organization keep relevant records?",
//             options: [
//                 {
//                     id: 4300,
//                     label: "LESS THAN 10 YEARS"
//                 },
//                 {
//                     id: 4301,
//                     label: "10 YEARS"
//                 },
//                 {
//                     id: 4302,
//                     label: "10 YEARS, LONGER IF IT IS RELEVANT"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 43, optionId: 4300 }
//                     ],
//                     result: { questionId: 43, optionId: 4300, repo: "some repo on question 43 4300" },
//                     response: ["Keep all records for at least 10 years!"],
//                     todos: [{title: "Todo Item 26"}],
//                     nextQuestionId: 11,
//                     nextModuleId: 3
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 43, optionId: 4301 }
//                     ],
//                     result: { questionId: 43, optionId: 4301, repo: "some repo on question 43 4301" },
//                     response: ["Good start - be sure to keep relevant records as long as they are relevant."],
//                     nextQuestionId: 11,
//                     nextModuleId: 3
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 43, optionId: 4302 }
//                     ],
//                     result: { questionId: 43, optionId: 4302, repo: "some repo on question 43 4302" },
//                     response: ["Great!"],
//                     nextQuestionId: 11,
//                     nextModuleId: 3
//                 }
//             ],
//             extraInfo: {
//                 title: "WHAT IS RELEVANT?",
//                 content: "Please write 1-2 sentences describing what relevant records are in this context"
//             }
//         }
//     )


//     return survey;
// }

// function getSurvey_part3() {
//     let survey: SurveyDialogue = {};
//     survey[11] = createNode(
//         {
//             id: 11,
//             type: NodeTypes.message,
//             content: "A privacy policy governs the organizations use of individuals’ data, " +
//                 "while a confidentiality policy covers keeping individuals’ data private so that unauthorized people cannot access it.",
//             options: [],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [],
//                     nextQuestionId: 44
//                 }
//             ]
//         }
//     );
//     survey[44] = createNode(
//         {
//             id: 44,
//             type: NodeTypes.single,
//             content: "Does your organization have a separate confidentiality policy from your privacy policy?",
//             options: [
//                 {
//                     id: 4401,
//                     label: "YES"
//                 },
//                 {
//                     id: 4400,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 44, optionId: 4401 }
//                     ],
//                     result: { questionId: 44, optionId: 4401, repo: "some repo on question 44 Yes" },
//                     response: ["Great!"],
//                     nextQuestionId: 45
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 44, optionId: 4400 }
//                     ],
//                     result: { questionId: 44, optionId: 4400, repo: "some repo on question 44 No" },
//                     response: ["Added to your to-do list!"],
//                     reminders: [{title: "Todo Item 27"}],
//                     nextQuestionId: 47,
//                     nextModuleId: 4
//                 }
//             ]
//         }
//     )
//     survey[45] = createNode(
//         {
//             id: 45,
//             type: NodeTypes.single,
//             content: "Does your confidentiality policy outline who can access personal information?",
//             options: [
//                 {
//                     id: 4501,
//                     label: "YES"
//                 },
//                 {
//                     id: 4500,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 45, optionId: 4501 }
//                     ],
//                     result: { questionId: 45, optionId: 4501, repo: "some repo on question 45 Yes" },
//                     nextQuestionId: 46
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 45, optionId: 4500 }
//                     ],
//                     result: { questionId: 45, optionId: 4500, repo: "some repo on question 45 No" },
//                     response: ["Be sure to clearly state who can access personal information in your confidentiality policy. " +
//                     "Remember: the more hands on it; the more likely a breach."],
//                     reminders: [{title: "Todo Item 28"}],
//                     nextQuestionId: 47,
//                     nextModuleId: 4
//                 }
//             ]
//         }
//     )
//     survey[46] = createNode(
//         {
//             id: 46,
//             type: NodeTypes.single,
//             content: "Who has access to personal information?",
//             options: [
//                 {
//                     id: 4600,
//                     label: "Everyone"
//                 },
//                 {
//                     id: 4601,
//                     label: "Many people"
//                 },
//                 {
//                     id: 4602,
//                     label: "Only one person"
//                 },
//                 {
//                     id: 4603,
//                     label: "A few people"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 46, optionId: 4602 }
//                     ],
//                     result: { questionId: 46, optionId: 4602, repo: "some repo on question 46 one" },
//                     response: ["Pretty good! You could also give a couple more appropriate individuals access if this person needs support."],
//                     nextQuestionId: 47,
//                     nextModuleId: 4
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 46, optionId: 4603 }
//                     ],
//                     result: { questionId: 46, optionId: 4603, repo: "some repo on question 46 few" },
//                     response: ["Awesome!"],
//                     nextQuestionId: 47,
//                     nextModuleId: 4
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 46, optionId: 4600 }
//                     ],
//                     result: { questionId: 46, optionId: 4600, repo: "some repo on question 46 everyone" },
//                     response: ["Be sure to clearly state who can access personal information in your confidentiality policy. " +
//                             "Remember: the more hands on it; the more likely a breach. "],
//                     reminders: [{title: "Todo Item 29"}],
//                     nextQuestionId: 47,
//                     nextModuleId: 4
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 46, optionId: 4601 }
//                     ],
//                     result: { questionId: 46, optionId: 4601, repo: "some repo on question 46 many" },
//                     response: ["Be sure to clearly state who can access personal information in your confidentiality policy. " +
//                             "Remember: the more hands on it; the more likely a breach. "],
//                     reminders: [{title: "Todo Item 29"}],
//                     nextQuestionId: 47,
//                     nextModuleId: 4
//                 }
//             ]
//         }
//     )
//     return survey;
// }

// function getSurvey_part4() {
//     let survey: SurveyDialogue = {};
//     survey[47] = createNode(
//         {
//             id: 47,
//             type: NodeTypes.message,
//             content: "Every organization needs to have one person who can answer questions about the collection, " +
//                 "use and disclosure of data. This role is called the Privacy Officer.",
//             options: [],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [],
//                     nextQuestionId: 48
//                 }
//             ]
//         }
//     );
//     survey[48] = createNode(
//         {
//             id: 48,
//             type: NodeTypes.single,
//             content: "Does your organization have a designated privacy officer?",
//             options: [
//                 {
//                     id: 4801,
//                     label: "YES"
//                 },
//                 {
//                     id: 4800,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 48, optionId: 4801 }
//                     ],
//                     result: { questionId: 48, optionId: 4801, repo: "some repo on question 48 Yes" },
//                     nextQuestionId: 49
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 48, optionId: 4800 }
//                     ],
//                     result: { questionId: 48, optionId: 4800, repo: "some repo on question 48 No" },
//                     response: ["Added to your to-do list!"],
//                     todos: [{title: "Todo Item 30"}],
//                     nextQuestionId: 50,
//                     nextModuleId: 5
//                 }
//             ]
//         }
//     )
//     survey[49] = createNode(
//         {
//             id: 49,
//             type: NodeTypes.single,
//             content: "Is your privacy officers contact information included in your privacy policy?",
//             options: [
//                 {
//                     id: 4901,
//                     label: "YES"
//                 },
//                 {
//                     id: 4900,
//                     label: "NO"
//                 },
//                 {
//                     id: 4902,
//                     label: "NO PRIVACY POLICY YET"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 49, optionId: 4901 }
//                     ],
//                     result: { questionId: 49, optionId: 4901, repo: "some repo on question 49 Yes" },
//                     response: ["Great!"],
//                     nextQuestionId: 50,
//                     nextModuleId: 5
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 49, optionId: 4900 }
//                     ],
//                     result: { questionId: 49, optionId: 4900, repo: "some repo on question 49 No" },
//                     response: ["Be sure to add this to your privacy policy!"],
//                     reminders: [{title: "Todo Item 31"}],
//                     nextQuestionId: 50,
//                     nextModuleId: 5
//                 },
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 49, optionId: 4902 }
//                     ],
//                     result: { questionId: 49, optionId: 4902, repo: "some repo on question 49 No PP" },
//                     response: ["Add this to your privacy policy once you create it!"],
//                     reminders: [{title: "Todo Item 31"}],
//                     nextQuestionId: 50,
//                     nextModuleId: 5
//                 }
//             ]
//         }
//     )
//     return survey;
// }
// function getSurvey_part5() {
//     let survey: SurveyDialogue = {};
//     survey[50] = createNode(
//         {
//             id: 50,
//             type: NodeTypes.message,
//             content: "Sometimes an organization will get requests for information.",
//             options: [],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [],
//                     nextQuestionId: 51
//                 }
//             ]
//         }
//     );
//     survey[51] = createNode(
//         {
//             id: 51,
//             type: NodeTypes.message,
//             content: "Explain what type of P.I. must be redacted",
//             options: [],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [],
//                     nextQuestionId: 52
//                 }
//             ]
//         }
//     );
//     survey[52] = createNode(
//         {
//             id: 52,
//             type: NodeTypes.single,
//             content: "Does your privacy policy explain how someone could access the information you collect?",
//             options: [
//                 {
//                     id: 5201,
//                     label: "YES"
//                 },
//                 {
//                     id: 5200,
//                     label: "NO"
//                 },
//                 {
//                     id: 5202,
//                     label: "NO PRIVACY POLICY YET"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 52, optionId: 5200 }
//                     ],
//                     response: ["Check out the suggested wording in your results at the end of the module to add this to your privacy policy!"],
//                     result: {questionId: 52, optionId: 5200, repo: "some repo to question 52 no"},
//                     reminders: [{title: "Todo Item 32"}],
//                     nextQuestionId: 53
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 52, optionId: 5201 }
//                     ],
//                     result: {questionId: 52, optionId: 5201, repo: "some repo to question 52 yes"},
//                     nextQuestionId: 53
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 52, optionId: 5202 }
//                     ],
//                     response: ["Be sure to add this to your privacy policy once you create it!"],
//                     result: {questionId: 52, optionId: 5202, repo: "some repo to question 52 no pp"},
//                     reminders: [{title: "Todo Item 32"}],
//                     nextQuestionId: 53
//                 }
//             ]
//         }
//     );
//     survey[53] = createNode(
//         {
//             id: 53,
//             type: NodeTypes.single,
//             content: "Have you received or expect to receive requests for information?",
//             options: [
//                 {
//                     id: 5301,
//                     label: "YES"
//                 },
//                 {
//                     id: 5300,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 53, optionId: 5300 }
//                     ],
//                     result: {questionId: 53, optionId: 5300, repo: "some repo to question 53 no"},
//                     nextQuestionId: 58,
//                     nextModuleId: 6
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 53, optionId: 5301 }
//                     ],
//                     result: {questionId: 53, optionId: 5301, repo: "some repo to question 53 Yes"},
//                     nextQuestionId: 54
//                 }
//             ]
//         }
//     );
//     survey[54] = createNode(
//         {
//             id: 54,
//             type: NodeTypes.single,
//             content: "Who is asking",
//             options: [
//                 {
//                     id: 5400,
//                     label: "SOMEONE LOOKING FOR THEIR INFORMATION"
//                 },
//                 {
//                     id: 5401,
//                     label: "SOMEONE LOOKING FOR INFORMATION ABOUT OTHERS"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 54, optionId: 5400 }
//                     ],
//                     result: {questionId: 54, optionId: 5400, repo: "some repo to question 54 A"},
//                     nextQuestionId: 55,
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 54, optionId: 5401 }
//                     ],
//                     result: {questionId: 54, optionId: 5401, repo: "some repo to question 54 B"},
//                     nextQuestionId: 56
//                 }
//             ]
//         }
//     );
//     survey[55] = createNode(
//         {
//             id: 55,
//             type: NodeTypes.single,
//             content: "Are they requesting ..",
//             options: [
//                 {
//                     id: 5500,
//                     label: "THEIR PERSONAL INFORMATION"
//                 },
//                 {
//                     id: 5501,
//                     label: "HOW THEIR PERSONAL INFORMATION IS BEING USED"
//                 },
//                 {
//                     id: 5502,
//                     label: "WHO HAS ACCESS TO THEIR PERSONAL INFORMATION"
//                 },
//                 {
//                     id: 5503,
//                     label: "OTHER INFORMATION"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 55, optionId: 5503 }
//                     ],
//                     result: {questionId: 55, optionId: 5503, repo: "some repo to question 55 D"},
//                     nextQuestionId: 56,
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     result: {questionId: 55, optionId: 5500, repo: "some repo to question 55 B"},
//                     response: ["Great, they can have this information!"],
//                     nextQuestionId: 58,
//                     nextModuleId: 6
//                 }
//             ]
//         }
//     );
//     survey[56] = createNode(
//         {
//             id: 56,
//             type: NodeTypes.single,
//             content: "Is the information ..",
//             options: [
//                 {
//                     id: 5600,
//                     label: "Protected by S-C privilege?"
//                 },
//                 {
//                     id: 5601,
//                     label: "Likely to harm the competitive position of the organization"
//                 },
//                 {
//                     id: 5602,
//                     label: "Part of an investigation/appeal uncompleted"
//                 },
//                 {
//                     id: 5603,
//                     label: "Part of a mediation/arbitration"
//                 },
//                 {
//                     id: 5604,
//                     label: "None of the above"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 56, optionId: 5604 }
//                     ],
//                     result: {questionId: 56, optionId: 5604, repo: "some repo to question 56 None"},
//                     nextQuestionId: 57,
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     result: {questionId: 56, optionId: 5600, repo: "some repo to question 56 B"},
//                     response: ["Don’t give out this information. If you plan to deny a request for information, consult a lawyer."],
//                     todos: [{title: "Todo Item 33"}],
//                     nextQuestionId: 58,
//                     nextModuleId: 6
//                 }
//             ]
//         }
//     );
//     survey[57] = createNode(
//         {
//             id: 57,
//             type: NodeTypes.single,
//             content: "Would disclosing this information.. ",
//             options: [
//                 {
//                     id: 5700,
//                     label: "Threaten the safety/harm of another person"
//                 },
//                 {
//                     id: 5701,
//                     label: "Cause grave harm to the requester"
//                 },
//                 {
//                     id: 5702,
//                     label: "Reveal personal information about another person"
//                 },
//                 {
//                     id: 5703,
//                     label: "None of the above"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.skip,
//                     answers: [
//                         { questionId: 57, optionId: 5703 }
//                     ],
//                     result: {questionId: 57, optionId: 5703, repo: "some repo to question 57 None"},
//                     response: ["Proceed with caution. If you plan to deny a request for information, consult a lawyer."],
//                     nextQuestionId: 58,
//                     nextModuleId: 6
//                 },
//                 {
//                     type: TriggerType.default,
//                     answers: [],
//                     result: {questionId: 56, optionId: 5600, repo: "some repo to question 56 B"},
//                     response: ["Don’t give out this information. If you plan to deny a request for information, consult a lawyer."],
//                     todos: [{title: "Todo Item 33"}],
//                     nextQuestionId: 58,
//                     nextModuleId: 6
//                 }
//             ]
//         }
//     );
//     return survey;
// }
// function getSurvey_part6() {
//     let survey: SurveyDialogue = {};
//     survey[58] = createNode(
//         {
//             id: 58,
//             type: NodeTypes.message,
//             content: "Canada’s Anti-Spam Law (CASL) provides regulations around sending mass messages to members and the public.",
//             options: [],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [],
//                     nextQuestionId: 59
//                 }
//             ]
//         }
//     );
//     survey[59] = createNode(
//         {
//             id: 59,
//             type: NodeTypes.single,
//             content: "Do you send messages to your members or the public?",
//             options: [
//                 {
//                     id: 5901,
//                     label: "YES"
//                 },
//                 {
//                     id: 5900,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 59, optionId: 5900 }
//                     ],
//                     result: {questionId: 59, optionId: 5900, repo: "some repo to question 59 No"},
//                     nextQuestionId: 65,
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 59, optionId: 5901 }
//                     ],
//                     result: {questionId: 59, optionId: 5901, repo: "some repo to question 59 Yes"},
//                     nextQuestionId: 60,
//                 }
//             ]
//         }
//     );
//     survey[60] = createNode(
//         {
//             id: 60,
//             type: NodeTypes.single,
//             content: "Are you a registered charity?",
//             options: [
//                 {
//                     id: 6001,
//                     label: "YES"
//                 },
//                 {
//                     id: 6000,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 60, optionId: 6000 }
//                     ],
//                     result: {questionId: 60, optionId: 6000, repo: "some repo to question 60 No"},
//                     nextQuestionId: 62,
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 60, optionId: 6001 }
//                     ],
//                     result: {questionId: 60, optionId: 6001, repo: "some repo to question 60 Yes"},
//                     nextQuestionId: 61,
//                 }
//             ],
//             extraInfo: {
//                 title: "I’M NOT SURE",
//                 content: "A registered charity .. "
//             }
//         }
//     );
//     survey[61] = createNode(
//         {
//             id: 61,
//             type: NodeTypes.single,
//             content: "What is your main reason for sending mass messages?",
//             options: [
//                 {
//                     id: 6100,
//                     label: "FUNDRAISING"
//                 },
//                 {
//                     id: 6101,
//                     label: "OTHER"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 61, optionId: 6100 }
//                     ],
//                     result: {questionId: 61, optionId: 6100, repo: "some repo to question 61 FUNDRAISING"},
//                     nextQuestionId: 62,
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 61, optionId: 6101 }
//                     ],
//                     result: {questionId: 61, optionId: 6101, repo: "some repo to question 60 other"},
//                     response: ["Heads up - charities are only allowed to send mass messages for fundraising!"],
//                     todos: [{title: "Todo Item 34"}],
//                     nextQuestionId: 62,
//                 }
//             ]
//         }
//     );
//     survey[62] = createNode(
//         {
//             id: 62,
//             type: NodeTypes.single,
//             content: "Do you get consent before sending mass messages?",
//             options: [
//                 {
//                     id: 6201,
//                     label: "YES"
//                 },
//                 {
//                     id: 6200,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 62, optionId: 6200 }
//                     ],
//                     result: {questionId: 62, optionId: 6200, repo: "some repo to question 62 No"},
//                     response: ["Make sure individuals “opt-in” to mass messages before adding them to your mailing list."],
//                     todos: [{title: "Todo Item 35"}],
//                     nextQuestionId: 63,
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 62, optionId: 6201 }
//                     ],
//                     result: {questionId: 62, optionId: 6201, repo: "some repo to question 62 yes"},
//                     response: ["Great!"],
//                     nextQuestionId: 63,
//                 }
//             ]
//         }
//     );
//     survey[63] = createNode(
//         {
//             id: 63,
//             type: NodeTypes.single,
//             content: "Do you include contact information in your mass messages?",
//             options: [
//                 {
//                     id: 6301,
//                     label: "YES"
//                 },
//                 {
//                     id: 6300,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 63, optionId: 6300 }
//                     ],
//                     result: {questionId: 63, optionId: 6300, repo: "some repo to question 63 No"},
//                     response: ["Be sure you add this to all your mass messages!"],
//                     todos: [{title: "Todo Item 36"}],
//                     nextQuestionId: 64,
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 63, optionId: 6301 }
//                     ],
//                     result: {questionId: 63, optionId: 6301, repo: "some repo to question 63 yes"},
//                     response: ["Good job!"],
//                     nextQuestionId: 64,
//                 }
//             ]
//         }
//     );
//     survey[64] = createNode(
//         {
//             id: 64,
//             type: NodeTypes.single,
//             content: "Do you include an “unsubscribe” option within your mass messages?",
//             options: [
//                 {
//                     id: 6401,
//                     label: "YES"
//                 },
//                 {
//                     id: 6400,
//                     label: "NO"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 64, optionId: 6400 }
//                     ],
//                     result: {questionId: 64, optionId: 6400, repo: "some repo to question 64 No"},
//                     response: ["Include this in all your mass messages!"],
//                     todos: [{title: "Todo Item 37"}],
//                     nextQuestionId: 65,
//                 },
//                 {
//                     type: TriggerType.next,
//                     answers: [
//                         { questionId: 64, optionId: 6401 }
//                     ],
//                     result: {questionId: 64, optionId: 6401, repo: "some repo to question 64 yes"},
//                     response: ["Perfect!"],
//                     nextQuestionId: 65,
//                 }
//             ]
//         }
//     );
//     survey[65] = createNode(
//         {
//             id: 65,
//             type: NodeTypes.single,
//             content: "You completed module",
//             options: [
//                 {
//                     id: 6500,
//                     label: "Go to the results"
//                 }
//             ],
//             triggers: [
//                 {
//                     type: TriggerType.exit,
//                     answers: [
//                         {questionId: 65, optionId: 6500}
//                     ],
//                     nextQuestionId: -1
//                 }
//             ]
//         }
//     )
//     return survey;
// }

// function getModules() {
//     let modules: { [key: number]: Module } = {};
//     modules[1] = { name: "Privacy Policy", nodes: getSurvey_part1() };
//     modules[2] = { name: "Personal Info", nodes: getSurvey_part2()};
//     modules[3] = { name: "Confidentiality", nodes: getSurvey_part3()};
//     modules[4] = { name: "Privacy Officer", nodes: getSurvey_part4()};
//     modules[5] = { name: "Requests", nodes: getSurvey_part5()};
//     modules[6] = { name: "Requests", nodes: getSurvey_part6()};
//     return modules;
// }


// export {
//     getSurvey,
//     getModules
// }