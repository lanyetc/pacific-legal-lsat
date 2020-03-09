import {MessageType} from '../model/index'
export let disclosureOfPersonalInformationModule:any = [
    {
        id: 14,
        type: MessageType.singleSelect,
        content: 'Does your non-profit ever give out personal information either within or outside the non-profit?',
        options: [
          {
            id: 1401,
            label: 'Yes'
          },
          {
            id: 1400,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 1410,
            expectedResponses: {
              messageId: 14,
              optionIds: [
                1400
              ]
            },
            action: {
              type: 'nextModule',
              nextModuleId: 5,
              nextQuestionId: 20
            },
            resultReport: "",
          },
          {
            id: 1411,
            expectedResponses: {
              messageId: 14,
              optionIds: [
                1401
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 15
            },
            resultReport: "",
          }
        ],
        defaultTriggerId: 1411,
    },
    {
        id: 15,
        type: MessageType.singleSelect,
        content: 'Do you have the consent to disclose the personal information?',
        options: [
          {
            id: 1501,
            label: 'Yes'
          },
          {
            id: 1500,
            label: 'Not sure'
          }
        ],
        triggers: [
          {
            id: 1510,
            expectedResponses: {
              messageId: 15,
              optionIds: [
                1500
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 16
              },
            resultReport: "",
          },
          {
            id: 1511,
            expectedResponses: {
              messageId: 15,
              optionIds: [
                1501
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 16
            },
            reply: "Great!",
            resultReport: "",
          }
        ],
        defaultTriggerId: 1511,
    },
    {
        id: 16,
        type: MessageType.singleSelect,
        content: 'Is the purpose for disclosing personal information obvious?',
        options: [
          {
            id: 1601,
            label: 'Yes'
          },
          {
            id: 1600,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 1610,
            expectedResponses: {
              messageId: 16,
              optionIds: [
                1600
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 18
            },
            reply: "Personal information that is not collected for obvious reasons requires explicit consent from the individual before giving out the information.",
            todo: "Seek explicit consent before disclosing non-voluntary, non-obvious personal information",
            resultReport: "Personal information that was not voluntarily provided or obvious may require a form of explicit consent, such as a form from the individual, before disclosing the information.",
          },
          {
            id: 1611,
            expectedResponses: {
              messageId: 16,
              optionIds: [
                1601
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 17
            },
            resultReport: "Personal information that was not voluntarily provided or obvious may require a form of explicit consent, such as a form from the individual, before disclosing the information.",
          }
        ],
        defaultTriggerId: 1611,
        extraInfo: {
            title: "I need an example",
            content: "For example, an obvious reason for collecting personal information could occur when someone buys a ticket to a show or comes into our office to seek services.",
        }
    },
    {
        id: 17,
        type: MessageType.singleSelect,
        content: 'Do these people voluntarily provide their personal information?',
        options: [
          {
            id: 1701,
            label: 'Yes'
          },
          {
            id: 1700,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 1710,
            expectedResponses: {
              messageId: 17,
              optionIds: [
                1700
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 18
            },
            reply: "Personal information that is not voluntarily provided or obvious may require a form of  explicit consent, such as a form from the individual, before disclosing the information.",
            todo: "Seek explicit consent before disclosing non-voluntary, non-obvious personal information",
            resultReport: "Personal information that was not voluntarily provided or obvious may require a form of explicit consent, such as a form from the individual, before disclosing the information.",
          },
          {
            id: 1711,
            expectedResponses: {
              messageId: 17,
              optionIds: [
                1701
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 18
            },
            reply: "Good job!",
            resultReport: "Personal information that was not voluntarily provided or obvious may require a form of explicit consent, such as a form from the individual, before disclosing the information.",
          }
        ],
        defaultTriggerId: 1711
    },
    {
        id: 18,
        type: MessageType.singleSelect,
        content: 'Have you been required to provide personal information due to a court order or subpoena?',
        options: [
          {
            id: 1801,
            label: 'Yes'
          },
          {
            id: 1800,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 1810,
            expectedResponses: {
              messageId: 18,
              optionIds: [
                1800
              ]
            },
            action: {
                type: 'nextModule',
                nextModuleId: 5,
                nextQuestionId: 20
            },
            resultReport: "",
          },
          {
            id: 1811,
            expectedResponses: {
              messageId: 18,
              optionIds: [
                1801
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 19
            },
            resultReport: "",
          }
        ],
        defaultTriggerId: 1811
    },
    {
        id: 19,
        type: MessageType.singleSelect,
        content: 'Does your privacy policy explain that you may disclose personal information for legal reasons?',
        options: [
          {
            id: 1901,
            label: 'Yes'
          },
          {
            id: 1900,
            label: 'No'
          },
          {
            id: 1902,
            label: 'No Privacy Policy yet'
          }
        ],
        triggers: [
          {
            id: 1910,
            expectedResponses: {
              messageId: 19,
              optionIds: [
                1900
              ]
            },
            action: {
              type: 'nextModule',
              nextModuleId: 5,
              nextQuestionId: 20
            },
            reply: 'Got it, adding this to your to-do list! ',
            reminder: 'Add a “legal disclosure” statement in your privacy policy',
            resultReport: 'Many privacy policies include words like “legal” or “regulatory” which would cover most situations required by law.'
          },
          {
            id: 1911,
            expectedResponses: {
              messageId: 19,
              optionIds: [
                1901
              ]
            },
            action: {
                type: 'nextModule',
                nextModuleId: 5,
                nextQuestionId: 20
              },
              reply: 'Perfect!',
              resultReport: 'Many privacy policies include words like “legal” or “regulatory” which would cover most situations required by law.'
            },
          {
            id: 1911,
            expectedResponses: {
              messageId: 19,
              optionIds: [
                1902
              ]
            },
            action: {
                type: 'nextModule',
                nextModuleId: 5,
                nextQuestionId: 20
              },
            reply: 'Okay, be sure to add this information to your privacy policy once you create it!',
            resultReport: 'Many privacy policies include words like “legal” or “regulatory” which would cover most situations required by law.'
          }
        ],
        defaultTriggerId: 1911
      }
]