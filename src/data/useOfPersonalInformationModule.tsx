import {MessageType} from '../model/index'

export let useOfPersonalInformationModule:any = [
    {
        id: 12,
        type: MessageType.singleSelect,
        content: 'Does the personal information you collect help fulfil the non-profit’s mission or purpose?',
        options: [
          {
            id: 1201,
            label: 'Yes'
          },
          {
            id: 1200,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 1210,
            expectedResponses: {
              messageId: 12,
              optionIds: [
                1200
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 13
            },
            todo: "Only collect personal information relevant to your mission or purpose",
            reply: "Hmm, be careful. Information should only be collected to support the non-profit's purpose or goals.",
            resultReport: "Information collected should be related to the society’s purpose/goals. For example, “we are a theatre company and collect information from our subscribers.” We collect personal information for the following purposes: 1.	Communicate with members; 2. Send newsletter; 3. Service phone calls and emails."
          },
          {
            id: 1211,
            expectedResponses: {
              messageId: 12,
              optionIds: [
                1201
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 13
            },
            resultReport: "Information collected should be related to the society’s purpose/goals. For example, “we are a theatre company and collect information from our subscribers.” We collect personal information for the following purposes: 1.	Communicate with members; 2. Send newsletter; 3. Service phone calls and emails."
          }
        ],
        defaultTriggerId: 1211,
        extraInfo: {
            title: "I need more information",
            content: "Information collected should be related to the society’s purpose/goals. For example, “we are a theatre company and collect information from our subscribers to sell tickets.”"
        }
    },
    {
        id: 13,
        type: MessageType.multiSelect,
        content: 'Select the reasons you use personal information.',
        options: [
          {
            id: 1300,
            label: 'To communicate with members'
          },
          {
            id: 1301,
            label: 'To send newsletters and invitations'
          },
          {
            id: 1302,
            label: 'For service phone calls and emails'
          },
          {
            id: 1303,
            label: 'For audit purposes'
          },
          {
            id: 1304,
            label: 'To solicit donations'
          },
          {
            id: 1305,
            label: 'To issue tax receipts'
          },
          {
            id: 1306,
            label: 'Other reasons'
          }
        ],
        triggers: [
          {
            id: 1310,
            expectedResponses: {
              messageId: 13,
              optionIds: [
                1306
              ]
            },
            action: {
              type: 'nextModule',
              nextModuleId: 4,
              nextQuestionId: 14
            },
            reply: "Your use of personal information could be problematic. Check the “Uses of Personal Information” at the end of the assessment to learn more",
            todo: 'Review acceptable Uses of Personal Information',
            resultReport: 'Examples of valid reasons to collect personal information include: •	To communicate with members; •	To send newsletters and invitations; •	For service phone calls and emails; •	For audit purposes; •	To solicit donations; •	To issue tax receipts'
          },
          {
            id: 1311,
            expectedResponses: {
              optionIds: []
            },
            action: {
                type: 'nextModule',
                nextModuleId: 4,
                nextQuestionId: 14
              },
            reply: 'Great - these are all valid uses of personal information!',
            resultReport: 'Examples of valid reasons to collect personal information include: •	To communicate with members; •	To send newsletters and invitations; •	For service phone calls and emails; •	For audit purposes; •	To solicit donations; •	To issue tax receipts'
          }
        ],
        defaultTriggerId: 1311
      },
]