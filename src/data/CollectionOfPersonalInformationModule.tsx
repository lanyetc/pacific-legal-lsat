import {MessageType} from '../model/index'
export let collectionOfPersonalInformationModule:any = [
    {
        id: 4,
        type: MessageType.autoPlayMessage,
        content: 'Personal information is information that is personal to an individual. Some examples include: name, address, email address, birthdate, SIN, gender, medical information, educational history, employment status, IP address, family status and income.',
        options: [],
        triggers: [
          {
            expectedResponses: {
              optionIds: []
            },
            id: 410,
            action: {
              type: 'nextQuestion',
              nextQuestionId: 5
            }
          }
        ],
        defaultTriggerId: 410
    },
    {
        id: 5,
        type: MessageType.singleSelect,
        content: 'Does your non-profit collect personal information?',
        options: [
          {
            id: 501,
            label: 'Yes'
          },
          {
            id: 500,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 510,
            expectedResponses: {
              messageId: 5,
              optionIds: [
                501
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 6
            },
            resultReport: ''
          },
          {
            id: 511,
            expectedResponses: {
              messageId: 5,
              optionIds: [
                500
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQeustionId: 6
            },
            reply: "Hmm, are you sure about that? All non profits collection personal information; even a members name or email address counts as personal information.",
            resultReport: ""
          }
        ],
        defaultTriggerId: 511
    },
    {
        id: 6,
        type: MessageType.multiSelect,
        content: 'Select the ways you collect information ... ',
        options: [
          {
            id: 600,
            label: 'by email when they sign up to our newsletter'
          },
          {
            id: 601,
            label: 'by phone when they call to buy a ticket from our box office'
          },
          {
            id: 602,
            label: 'in person when they come to our office and fill out a request for services'
          },
          {
            id: 603,
            label: 'in an application form (for membership in the society)'
          },
          {
            id: 604,
            label: 'at public events that we hold (fundraising gala or educational workshop for example)'
          },
          {
            id: 605,
            label: 'None of the above'
          }
        ],
        triggers: [
          {
            id: 610,
            expectedResponses: {
              messageId: 6,
              optionIds: [
                605
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 7
            },
            resultReport: '',
          },
          {
            expectedResponses: {
              optionIds: []
            },
            id: 611,
            action: {
              type: 'nextQuestion',
              nextQuestionId: 7
            },
            resultReport: '',
            reply: 'Looking good. More information about personal information collection will be included in the assessment results at the end of the module.'
          }
        ],
        defaultTriggerId: 611
      },
      {
        id: 7,
        type: MessageType.autoPlayMessage,
        content: "If your purpose for collecting information is obvious and voluntarily, like collecting an email address when someone signs up for your newsletter, this is implied consent.",
        options: [],
        triggers: [
          {
            expectedResponses: {
              optionIds: []
            },
            id: 710,
            action: {
              type: 'nextQuestion',
              nextQuestionId: 8
            }
          }
        ],
        defaultTriggerId: 710
    },
    {
        id: 8,
        type: MessageType.autoPlayMessage,
        content: "If someone explicitly agrees to the collection, use, and disclosure of their information (by signing a consent form, for example) this is explicit consent. ",
        options: [],
        triggers: [
          {
            expectedResponses: {
              optionIds: []
            },
            id: 810,
            action: {
              type: 'nextQuestion',
              nextQuestionId: 9
            }
          }
        ],
        defaultTriggerId: 810
    },
    {
        id: 9,
        type: MessageType.singleSelect,
        content: 'Would you like to review collection of employee personal information',
        options: [
          {
            id: 901,
            label: 'Yes'
          },
          {
            id: 900,
            label: 'Skip this'
          }
        ],
        triggers: [
          {
            id: 910,
            expectedResponses: {
              messageId: 9,
              optionIds: [
                900
              ]
            },
            action: {
              type: 'nextModule',
              nextModuleId: 3,
              nextQuestionId: 12
            },
            resultReport: ''
          },
          {
            id: 911,
            expectedResponses: {
              messageId: 9,
              optionIds: [
                901
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQeustionId: 10
            },
            resultReport: ""
          }
        ],
        defaultTriggerId: 911
    },
    {
        id: 10,
        type: MessageType.singleSelect,
        content: 'Do you tell employees that you are collecting their personal information and how it will be used?',
        options: [
          {
            id: 1001,
            label: 'Yes'
          },
          {
            id: 1000,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 1010,
            expectedResponses: {
              messageId: 10,
              optionIds: [
                1000
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 11
            },
            reminder: "Notify employees before collecting their personal information",
            reply: "Let employees know before collecting any personal information.",
            resultReport: 'The organization must notify the individual that it will be collecting employee personal information, before it collects the information.'
          },
          {
            id: 1011,
            expectedResponses: {
              messageId: 10,
              optionIds: [
                1001
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQeustionId: 11
            },
            resultReport: 'The organization must notify the individual that it will be collecting employee personal information, before it collects the information.'
          }
        ],
        defaultTriggerId: 1011
    },
    {
        id: 11,
        type: MessageType.multiSelect,
        content: 'Select your reasons for collecting employee information.',
        options: [
          {
            id: 1100,
            label: 'To establish employment'
          },
          {
            id: 1101,
            label: 'To manage employment'
          },
          {
            id: 1102,
            label: 'To terminate employment'
          },
          {
            id: 1103,
            label: 'Other reasons'
          }
        ],
        triggers: [
          {
            id: 1110,
            expectedResponses: {
              messageId: 11,
              optionIds: [
                1103
              ]
            },
            action: {
              type: 'nextModule',
              nextModuleId: 3,
              nextQuestionId: 12
            },
            reply: "Unless the other reasons are directly connected to the kind of employment are offering you may not be collecting personal information correctly.  Check the “Employee Personal Information” at the end of the assessment to learn more.",
            reminder: 'Avoid collecting irrelevant employee personal information',
            resultReport: 'Under s 13 of PIPA, an organization may collect employee personal information without consent of the individual if the information is collected to establish, manage or terminate the employment relationship between the organization and individual. The organization must notify the individual that it will be collecting employee personal information, before it collects the information.'
          },
          {
            id: 1111,
            expectedResponses: {
              optionIds: []
            },
            action: {
                type: 'nextModule',
                nextModuleId: 3,
                nextQuestionId: 12
            },
            reply: "Great! These are all valid reasons for collecting employee personal information.",
            resultReport: 'some repo on question 18'
          }
        ],
        defaultTriggerId: 1111
      },
]