import {MessageType} from '../model/index'


export let module2 = [
    {
      id: 2,
      type: MessageType.autoPlayMessage,
      content: 'Explain what is personal info and what isn’t',
      options: [],
      triggers: [
        {
          expectedResponses: {
            optionIds: []
          },
          id: 110,
          action: {
            type: 'next',
            nextQuestionId: 10
          }
        }
      ],
      defaultTriggerId: 110
    },
    {
      id: 10,
      type: MessageType.singleSelect,
      content: 'Does your org collect personal information?',
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
          expectedResponses: {
            messageId: 10,
            optionIds: [
              1001
            ]
          },
          id: 111,
          action: {
            type: 'next',
            nextQuestionId: 12
          },
          resultReport: 'some repo on question 10 Yes'
        },
        {
          expectedResponses: {
            messageId: 10,
            optionIds: [
              1000
            ]
          },
          id: 112,
          action: {
            type: 'nextModule',
            nextQuestionId: 11,
            nextModuleId: 3
          },
          resultReport: 'some repo on question 10 No'
        }
      ],
      defaultTriggerId: 112
    },
    {
      id: 12,
      type: MessageType.singleSelect,
      content: 'Do you explain what the P.I. will be used for?',
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
          expectedResponses: {
            messageId: 12,
            optionIds: [
              1201
            ]
          },
          id: 113,
          action: {
            type: 'next',
            nextQuestionId: 13
          },
          resultReport: 'some repo on question 12 Yes',
          reply: 'Good Job'
        },
        {
          expectedResponses: {
            messageId: 12,
            optionIds: [
              1200
            ]
          },
          id: 114,
          action: {
            type: 'next',
            nextQuestionId: 13
          },
          resultReport: 'some repo on question 12 No',
          todo: 'Todo Item 6'
        }
      ],
      defaultTriggerId: 114
    },
    {
      id: 13,
      type: MessageType.singleSelect,
      content: 'Do you obtain consent from the person?',
      options: [
        {
          id: 1301,
          label: 'Yes'
        },
        {
          id: 1300,
          label: 'No'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 13,
            optionIds: [
              1301
            ]
          },
          id: 115,
          action: {
            type: 'next',
            nextQuestionId: 15
          },
          resultReport: 'some repo on question 13 Yes'
        },
        {
          expectedResponses: {
            messageId: 13,
            optionIds: [
              1300
            ]
          },
          id: 116,
          action: {
            type: 'next',
            nextQuestionId: 14
          },
          resultReport: 'some repo on question 13 No'
        }
      ],
      defaultTriggerId: 116
    },
    {
      id: 14,
      type: MessageType.multiSelect,
      content: 'Our information is collected .. Select all that apply.',
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
          expectedResponses: {
            messageId: 14,
            optionIds: [
              1401
            ]
          },
          id: 117,
          action: {
            type: 'next',
            nextQuestionId: 17
          },
          resultReport: 'some repo on question 14 Yes'
        },
        {
          expectedResponses: {
            messageId: 14,
            optionIds: [
              1400
            ]
          },
          id: 118,
          action: {
            type: 'next',
            nextQuestionId: 16
          },
          resultReport: 'some repo on question 14 No'
        }
      ],
      defaultTriggerId: 118
    },
    {
      id: 15,
      type: MessageType.multiSelect,
      content: 'Do you use a consent form?',
      options: [
        {
          id: 1501,
          label: 'Yes'
        },
        {
          id: 1500,
          label: 'No'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 15,
            optionIds: [
              1501
            ]
          },
          id: 119,
          action: {
            type: 'next',
            nextQuestionId: 14
          },
          resultReport: 'some repo on question 15 Yes',
          reply: 'Good Job.'
        },
        {
          expectedResponses: {
            messageId: 15,
            optionIds: [
              1500
            ]
          },
          id: 120,
          action: {
            type: 'next',
            nextQuestionId: 16
          },
          resultReport: 'some repo on question 15 No',
          reminder: 'Todo Item 7'
        }
      ],
      defaultTriggerId: 120
    },
    {
      id: 16,
      type: MessageType.singleSelect,
      content: 'Is the person an employee of the org?',
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
          expectedResponses: {
            messageId: 16,
            optionIds: [
              1601
            ]
          },
          id: 121,
          action: {
            type: 'next',
            nextQuestionId: 18
          },
          resultReport: 'some repo on question 16 Yes'
        },
        {
          expectedResponses: {
            messageId: 16,
            optionIds: [
              1600
            ]
          },
          id: 122,
          action: {
            type: 'next',
            nextQuestionId: 17
          },
          resultReport: 'some repo on question 16 No',
          todo: 'Todo Item 8'
        }
      ],
      defaultTriggerId: 122
    },
    {
      id: 17,
      type: MessageType.singleSelect,
      content: 'Does the P.I you collect help fufill the orgs mission/purpose?',
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
          expectedResponses: {
            messageId: 17,
            optionIds: [
              1701
            ]
          },
          id: 123,
          action: {
            type: 'next',
            nextQuestionId: 20
          },
          resultReport: 'some repo on question 17 Yes'
        },
        {
          expectedResponses: {
            messageId: 17,
            optionIds: [
              1700
            ]
          },
          id: 124,
          action: {
            type: 'next',
            nextQuestionId: 20
          },
          resultReport: 'some repo on question 17 No'
        }
      ],
      extraInfo: {
        title: 'I NEED MORE INFORMATION',
        content: 'Information collected should be related to the society’s purpose/goals. For example, “we are a theatre company and collect information from our subscribers to sell tickets.”'
      },
      defaultTriggerId: 124
    },
    {
      id: 18,
      type: MessageType.singleSelect,
      content: 'Select reasons for collecting employee information. Select one.',
      options: [
        {
          id: 1800,
          label: 'Establish employment'
        },
        {
          id: 1801,
          label: 'Manage employment'
        },
        {
          id: 1802,
          label: 'Terminate employment'
        },
        {
          id: 1803,
          label: 'Other reasons'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 18,
            optionIds: [
              1803
            ]
          },
          id: 125,
          action: {
            type: 'next',
            nextQuestionId: 17
          },
          resultReport: 'some repo on question 18 other reasons',
          todo: 'Todo Item 8'
        },
        {
          expectedResponses: {
            optionIds: []
          },
          id: 126,
          action: {
            type: 'next',
            nextQuestionId: 19
          },
          resultReport: 'some repo on question 18'
        }
      ],
      defaultTriggerId: 126
    },
    {
      id: 19,
      type: MessageType.singleSelect,
      content: 'Do you let these employees know ahead of time?',
      options: [
        {
          id: 1901,
          label: 'Yes'
        },
        {
          id: 1900,
          label: 'No'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 19,
            optionIds: [
              1900
            ]
          },
          id: 127,
          action: {
            type: 'next',
            nextQuestionId: 17
          },
          resultReport: 'some repo on question 19 N0',
          todo: 'Todo Item 9'
        },
        {
          expectedResponses: {
            messageId: 19,
            optionIds: [
              1901
            ]
          },
          id: 128,
          action: {
            type: 'next',
            nextQuestionId: 17
          },
          resultReport: 'some repo on question 19 Yes',
          reply: 'Good Job'
        }
      ],
      defaultTriggerId: 128
    },
    {
      id: 20,
      type: MessageType.multiSelect,
      content: 'Select the reasons you collect personal information. Select all that apply.',
      options: [
        {
          id: 2000,
          label: 'To communicate with members'
        },
        {
          id: 2001,
          label: 'To send newsletters and invitations'
        },
        {
          id: 2002,
          label: 'For service phone calls and emails'
        },
        {
          id: 2003,
          label: 'For audit purposes'
        },
        {
          id: 2004,
          label: 'To solicit donations'
        },
        {
          id: 2005,
          label: 'To issue tax receipts'
        },
        {
          id: 2006,
          label: 'Other reasons'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 20,
            optionIds: [
              2006
            ]
          },
          id: 129,
          action: {
            type: 'next',
            nextQuestionId: 21
          },
          resultReport: 'some repo on question 20 Other reasons',
          reply: 'Your use of personal information could be problematic. Check the “Permissions for Personal Information” at the end of the assessment to learn more.',
          todo: 'Todo Item 10'
        },
        {
          expectedResponses: {
            optionIds: []
          },
          id: 130,
          action: {
            type: 'next',
            nextQuestionId: 21
          },
          resultReport: 'some repo on question 20',
          reply: 'Great - these are all permissible uses of personal information!'
        }
      ],
      defaultTriggerId: 130
    },
    {
      id: 21,
      type: MessageType.singleSelect,
      content: 'Does your organization give out personal information either within or outside the organization?',
      options: [
        {
          id: 2101,
          label: 'Yes'
        },
        {
          id: 2100,
          label: 'No'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 21,
            optionIds: [
              2100
            ]
          },
          id: 131,
          action: {
            type: 'next',
            nextQuestionId: 28
          },
          resultReport: 'some repo on question 21 No'
        },
        {
          expectedResponses: {
            messageId: 21,
            optionIds: [
              2101
            ]
          },
          id: 132,
          action: {
            type: 'next',
            nextQuestionId: 22
          },
          resultReport: 'some repo on question 21 Yes'
        }
      ],
      defaultTriggerId: 132
    },
    {
      id: 22,
      type: MessageType.singleSelect,
      content: 'Do you get explicit consent from people before giving out their personal information?',
      options: [
        {
          id: 2201,
          label: 'Yes'
        },
        {
          id: 2200,
          label: 'No'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 22,
            optionIds: [
              2200
            ]
          },
          id: 133,
          action: {
            type: 'next',
            nextQuestionId: 23
          },
          resultReport: 'some repo on question 22 No'
        },
        {
          expectedResponses: {
            messageId: 22,
            optionIds: [
              2201
            ]
          },
          id: 134,
          action: {
            type: 'next',
            nextQuestionId: 24
          },
          resultReport: 'some repo on question 22 Yes',
          reply: 'Great!'
        }
      ],
      extraInfo: {
        title: 'WHAT IS EXPLICIT CONSENT?',
        content: 'For example, this could include...'
      },
      defaultTriggerId: 134
    },
    {
      id: 23,
      type: MessageType.singleSelect,
      content: 'Is the purpose for collecting personal information obvious?',
      options: [
        {
          id: 2301,
          label: 'Yes'
        },
        {
          id: 2300,
          label: 'No'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 23,
            optionIds: [
              2300
            ]
          },
          id: 135,
          action: {
            type: 'next',
            nextQuestionId: 25
          },
          resultReport: 'some repo on question 23 No',
          todo: 'Todo Item 11'
        },
        {
          expectedResponses: {
            messageId: 23,
            optionIds: [
              2301
            ]
          },
          id: 136,
          action: {
            type: 'next',
            nextQuestionId: 25
          },
          resultReport: 'some repo on question 23 Yes'
        }
      ],
      defaultTriggerId: 136
    },
    {
      id: 24,
      type: MessageType.singleSelect,
      content: 'Have you been required to provide personal information due to a court order or subpoena?',
      options: [
        {
          id: 2401,
          label: 'Yes'
        },
        {
          id: 2400,
          label: 'No'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 24,
            optionIds: [
              2400
            ]
          },
          id: 137,
          action: {
            type: 'next',
            nextQuestionId: 26
          },
          resultReport: 'some repo on question 24 No'
        },
        {
          expectedResponses: {
            messageId: 24,
            optionIds: [
              2401
            ]
          },
          id: 138,
          action: {
            type: 'next',
            nextQuestionId: 27
          },
          resultReport: 'some repo on question 24 Yes'
        }
      ],
      defaultTriggerId: 138
    },
    {
      id: 25,
      type: MessageType.singleSelect,
      content: 'Do these people voluntarily provide their personal information?',
      options: [
        {
          id: 2501,
          label: 'Yes'
        },
        {
          id: 2500,
          label: 'No'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 25,
            optionIds: [
              2500
            ]
          },
          id: 139,
          action: {
            type: 'next',
            nextQuestionId: 24
          },
          resultReport: 'some repo on question 25 No',
          todo: 'Todo Item 12'
        },
        {
          expectedResponses: {
            messageId: 25,
            optionIds: [
              2501
            ]
          },
          id: 140,
          action: {
            type: 'next',
            nextQuestionId: 24
          },
          resultReport: 'some repo on question 25 Yes',
          reply: 'Good job!'
        }
      ],
      defaultTriggerId: 140
    },
    {
      id: 26,
      type: MessageType.multiSelect,
      content: 'Select all the reasons you disclose personal information internally, including information from a Members Register. (Multiple choice, select all that apply.',
      options: [
        {
          id: 2600,
          label: 'To register/call a general meeting'
        },
        {
          id: 2601,
          label: 'To submit a member proposal'
        },
        {
          id: 2602,
          label: 'To influence the voting of members'
        },
        {
          id: 2603,
          label: 'Other reasons'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 26,
            optionIds: [
              2603
            ]
          },
          id: 141,
          action: {
            type: 'next',
            nextQuestionId: 28
          },
          resultReport: 'some repo on question 27 Other reasons',
          todo: 'Todo Item 14'
        },
        {
          expectedResponses: {
            optionIds: []
          },
          id: 142,
          action: {
            type: 'next',
            nextQuestionId: 28
          },
          resultReport: 'some repo on question 26',
          reply: 'Great!'
        }
      ],
      defaultTriggerId: 142
    },
    {
      id: 27,
      type: MessageType.singleSelect,
      content: 'Does your privacy policy explain that you may disclose personal information for legal reasons?',
      options: [
        {
          id: 2701,
          label: 'Yes'
        },
        {
          id: 2700,
          label: 'No'
        },
        {
          id: 2702,
          label: 'NO PRIVACY POLICY YET'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 27,
            optionIds: [
              2700
            ]
          },
          id: 143,
          action: {
            type: 'next',
            nextQuestionId: 26
          },
          resultReport: 'some repo on question 27 No',
          reply: 'Got it, adding this to your to-do list!',
          reminder: 'Todo Item 13'
        },
        {
          expectedResponses: {
            messageId: 27,
            optionIds: [
              2701
            ]
          },
          id: 144,
          action: {
            type: 'next',
            nextQuestionId: 26
          },
          resultReport: 'some repo on question 27 Yes',
          reply: 'Perfect!'
        },
        {
          expectedResponses: {
            messageId: 27,
            optionIds: [
              2702
            ]
          },
          id: 145,
          action: {
            type: 'next',
            nextQuestionId: 26
          },
          resultReport: 'some repo on question 27 No PP',
          reply: 'Okay, be sure to add this information to your privacy policy once you create it!',
          reminder: 'Todo Item 13'
        }
      ],
      defaultTriggerId: 145
    },
    {
      id: 28,
      type: MessageType.singleSelect,
      content: 'Let’s talk about storing personal information! Select everyone who can access personal information.',
      options: [
        {
          id: 2800,
          label: 'All employees'
        },
        {
          id: 2801,
          label: 'All employees and volunteers'
        },
        {
          id: 2802,
          label: 'A small number of authorized individuals'
        },
        {
          id: 2803,
          label: 'No one'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 28,
            optionIds: [
              2800
            ]
          },
          id: 146,
          action: {
            type: 'next',
            nextQuestionId: 29
          },
          resultReport: 'some repo on question 28 All',
          reply: 'Okay for small organizations. If you are a larger organization, you will want to reduce access to only a few individuals.'
        },
        {
          expectedResponses: {
            messageId: 28,
            optionIds: [
              2801
            ]
          },
          id: 147,
          action: {
            type: 'next',
            nextQuestionId: 29
          },
          resultReport: 'some repo on question 28 small',
          reply: 'Perfect!'
        },
        {
          expectedResponses: {
            messageId: 28,
            optionIds: [
              2802
            ]
          },
          id: 148,
          action: {
            type: 'next',
            nextQuestionId: 29
          },
          resultReport: 'some repo on question 28 volunteers',
          reply: 'Let’s change the access to a few designated individuals!',
          todo: 'Todo Item 15'
        },
        {
          expectedResponses: {
            messageId: 28,
            optionIds: [
              2803
            ]
          },
          id: 149,
          action: {
            type: 'next',
            nextQuestionId: 29
          },
          resultReport: 'some repo on question 28 no one',
          reply: 'Let’s change the access to a few designated individuals!',
          todo: 'Todo Item 15'
        }
      ],
      defaultTriggerId: 149
    },
    {
      id: 29,
      type: MessageType.singleSelect,
      content: 'Do you have policies and procedures to keep personal information secure?',
      options: [
        {
          id: 2901,
          label: 'YES'
        },
        {
          id: 2900,
          label: 'NO'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 29,
            optionIds: [
              2900
            ]
          },
          id: 150,
          action: {
            type: 'next',
            nextQuestionId: 30
          },
          resultReport: 'some repo on question 29 No',
          reply: 'Be sure to keep personal information secure! Check your results at the end of the module to find more tips on securing personal information.',
          reminder: 'Todo Item 16'
        },
        {
          expectedResponses: {
            messageId: 29,
            optionIds: [
              2901
            ]
          },
          id: 151,
          action: {
            type: 'next',
            nextQuestionId: 30
          },
          resultReport: 'some repo on question 29 Yes',
          reply: 'Good for you!'
        }
      ],
      defaultTriggerId: 151
    },
    {
      id: 30,
      type: MessageType.singleSelect,
      content: 'Where do you store personal information?',
      options: [
        {
          id: 3000,
          label: 'ON PAPER'
        },
        {
          id: 3001,
          label: 'ON THE COMPUTER'
        },
        {
          id: 3002,
          label: 'ON THE COMPUTER AND ON PAPER'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 30,
            optionIds: [
              3000
            ]
          },
          id: 152,
          action: {
            type: 'next',
            nextQuestionId: 33
          },
          resultReport: 'some repo on question 30 paper'
        },
        {
          expectedResponses: {
            messageId: 30,
            optionIds: [
              3001
            ]
          },
          id: 153,
          action: {
            type: 'next',
            nextQuestionId: 31
          },
          resultReport: 'some repo on question 30 paper/digital'
        },
        {
          expectedResponses: {
            messageId: 30,
            optionIds: [
              3002
            ]
          },
          id: 154,
          action: {
            type: 'next',
            nextQuestionId: 32
          },
          resultReport: 'some repo on question 30 digital'
        }
      ],
      defaultTriggerId: 154
    },
    {
      id: 31,
      type: MessageType.singleSelect,
      content: 'Do you keep your sensitive data encrypted?',
      options: [
        {
          id: 3101,
          label: 'YES'
        },
        {
          id: 3100,
          label: 'NO'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 31,
            optionIds: [
              3100
            ]
          },
          id: 155,
          action: {
            type: 'next',
            nextQuestionId: 34
          },
          resultReport: 'some repo on question 31 No',
          reply: 'This is a great way to keep data secure, added to your list',
          reminder: 'Todo Item 18'
        },
        {
          expectedResponses: {
            messageId: 31,
            optionIds: [
              3101
            ]
          },
          id: 156,
          action: {
            type: 'next',
            nextQuestionId: 34
          },
          resultReport: 'some repo on question 31 Yes',
          reply: 'Great!'
        }
      ],
      defaultTriggerId: 156
    },
    {
      id: 32,
      type: MessageType.singleSelect,
      content: 'Do you keep your paper documents in a locked cabinet?',
      options: [
        {
          id: 3201,
          label: 'YES'
        },
        {
          id: 3200,
          label: 'NO'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 32,
            optionIds: [
              3200
            ]
          },
          id: 157,
          action: {
            type: 'next',
            nextQuestionId: 31
          },
          resultReport: 'some repo on question 32 No',
          reply: 'Lock those documents up!',
          todo: 'Todo Item 17'
        },
        {
          expectedResponses: {
            messageId: 32,
            optionIds: [
              3201
            ]
          },
          id: 158,
          action: {
            type: 'next',
            nextQuestionId: 31
          },
          resultReport: 'some repo on question 32 Yes',
          reply: 'Good job!'
        }
      ],
      defaultTriggerId: 158
    },
    {
      id: 33,
      type: MessageType.singleSelect,
      content: 'Do you keep your paper documents in a locked cabinet?',
      options: [
        {
          id: 3301,
          label: 'YES'
        },
        {
          id: 3300,
          label: 'NO'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 33,
            optionIds: [
              3300
            ]
          },
          id: 159,
          action: {
            type: 'next',
            nextQuestionId: 39
          },
          resultReport: 'some repo on question 33 No',
          reply: 'Lock those documents up!',
          todo: 'Todo Item 17'
        },
        {
          expectedResponses: {
            messageId: 33,
            optionIds: [
              3301
            ]
          },
          id: 160,
          action: {
            type: 'next',
            nextQuestionId: 39
          },
          resultReport: 'some repo on question 33 Yes',
          reply: 'Good job!'
        }
      ],
      defaultTriggerId: 160
    },
    {
      id: 34,
      type: MessageType.singleSelect,
      content: 'Is your digital content password protected?',
      options: [
        {
          id: 3401,
          label: 'YES'
        },
        {
          id: 3400,
          label: 'NO'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 34,
            optionIds: [
              3400
            ]
          },
          id: 161,
          action: {
            type: 'next',
            nextQuestionId: 36
          },
          resultReport: 'some repo on question 34 No',
          reply: 'Always use passwords to keep your digital content secure.',
          todo: 'Todo Item 19'
        },
        {
          expectedResponses: {
            messageId: 34,
            optionIds: [
              3401
            ]
          },
          id: 162,
          action: {
            type: 'next',
            nextQuestionId: 35
          },
          resultReport: 'some repo on question 34 Yes'
        }
      ],
      defaultTriggerId: 162
    },
    {
      id: 35,
      type: MessageType.singleSelect,
      content: 'How often do you change your passwords?',
      options: [
        {
          id: 3500,
          label: '0-6 MONTHS'
        },
        {
          id: 3501,
          label: '6-12 MONTHS'
        },
        {
          id: 3502,
          label: 'OVER A YEAR'
        },
        {
          id: 3503,
          label: 'NEVER'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 35,
            optionIds: [
              3500
            ]
          },
          id: 163,
          action: {
            type: 'next',
            nextQuestionId: 36
          },
          resultReport: 'some repo on question 35 0-6',
          reply: 'Awesome, keep it up!'
        },
        {
          expectedResponses: {
            messageId: 35,
            optionIds: [
              3501
            ]
          },
          id: 164,
          action: {
            type: 'next',
            nextQuestionId: 36
          },
          resultReport: 'some repo on question 35 6-12',
          reply: 'Pretty good, try changing your passwords every 6 months.'
        },
        {
          expectedResponses: {
            optionIds: []
          },
          id: 165,
          action: {
            type: 'next',
            nextQuestionId: 36
          },
          resultReport: 'some repo on question 35 over 1 year',
          reply: 'Change passwords every 6 months to keep your digital content secure.',
          reminder: 'Todo Item 20'
        }
      ],
      defaultTriggerId: 165
    },
    {
      id: 36,
      type: MessageType.singleSelect,
      content: 'Do you collect Digitally Created Personal Information (D.C.P.I., such as information from website traffic?',
      options: [
        {
          id: 3601,
          label: 'YES'
        },
        {
          id: 3600,
          label: 'NO'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 36,
            optionIds: [
              3600
            ]
          },
          id: 166,
          action: {
            type: 'next',
            nextQuestionId: 38
          },
          resultReport: 'some repo on question 36 No'
        },
        {
          expectedResponses: {
            messageId: 36,
            optionIds: [
              3601
            ]
          },
          id: 167,
          action: {
            type: 'next',
            nextQuestionId: 37
          },
          resultReport: 'some repo on question 36 Yes'
        }
      ],
      extraInfo: {
        title: 'WHAT IS D.C.P.I.?',
        content: ' Digitally created personal information includes location information, including GPS data; device identifiers such as IP and MAC addresses; click stream data, browser history, bookmarks; user generated social network data such as comments, ratings, likes and dislikes, Twitter stream, or customer service interactions.'
      },
      defaultTriggerId: 167
    },
    {
      id: 37,
      type: MessageType.singleSelect,
      content: 'Does your privacy policy include information about the D.C.P.I. you collect?',
      options: [
        {
          id: 3701,
          label: 'YES'
        },
        {
          id: 3700,
          label: 'NO'
        },
        {
          id: 3702,
          label: 'NO PRIVACY POLICY YET'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 37,
            optionIds: [
              3700
            ]
          },
          id: 168,
          action: {
            type: 'next',
            nextQuestionId: 38
          },
          resultReport: 'some repo on question 37 No',
          reply: 'Added to your list! Check out your results at the end to find suggested wording to add to your privacy policy.',
          reminder: 'Todo Item 21'
        },
        {
          expectedResponses: {
            messageId: 37,
            optionIds: [
              3701
            ]
          },
          id: 169,
          action: {
            type: 'next',
            nextQuestionId: 38
          },
          resultReport: 'some repo on question 37 Yes',
          reply: 'Great!'
        },
        {
          expectedResponses: {
            messageId: 37,
            optionIds: [
              3702
            ]
          },
          id: 170,
          action: {
            type: 'next',
            nextQuestionId: 38
          },
          resultReport: 'some repo on question 37 No PP',
          reply: 'Be sure to include this when you make your privacy policy!',
          reminder: 'Todo Item 21'
        }
      ],
      defaultTriggerId: 170
    },
    {
      id: 38,
      type: MessageType.singleSelect,
      content: 'How often do you review your antivirus software?',
      options: [
        {
          id: 3800,
          label: '0-6 MONTHS'
        },
        {
          id: 3801,
          label: '6-12 MONTHS'
        },
        {
          id: 3802,
          label: 'MORE THAN A YEAR'
        },
        {
          id: 3803,
          label: 'NEVER'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 38,
            optionIds: [
              3800
            ]
          },
          id: 171,
          action: {
            type: 'next',
            nextQuestionId: 39
          },
          resultReport: 'some repo on question 38 0-6',
          reply: 'Great!'
        },
        {
          expectedResponses: {
            messageId: 38,
            optionIds: [
              3803
            ]
          },
          id: 172,
          action: {
            type: 'next',
            nextQuestionId: 39
          },
          resultReport: 'some repo on question 38 never',
          reply: 'It’s a good idea to review your antivirus software every 6 months.',
          reminder: 'Todo Item 22'
        },
        {
          expectedResponses: {
            optionIds: []
          },
          id: 173,
          action: {
            type: 'next',
            nextQuestionId: 39
          },
          resultReport: 'some repo on question 38',
          reply: 'Not bad, try to review once every 6 months!'
        }
      ],
      defaultTriggerId: 173
    },
    {
      id: 39,
      type: MessageType.singleSelect,
      content: 'Do you have personal information that is no longer necessary for legal or business purposes?',
      options: [
        {
          id: 3901,
          label: 'YES'
        },
        {
          id: 3900,
          label: 'NO'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 39,
            optionIds: [
              3900
            ]
          },
          id: 174,
          action: {
            type: 'next',
            nextQuestionId: 42
          },
          resultReport: 'some repo on question 39 no'
        },
        {
          expectedResponses: {
            messageId: 39,
            optionIds: [
              3901
            ]
          },
          id: 175,
          action: {
            type: 'next',
            nextQuestionId: 40
          },
          resultReport: 'some repo on question 39 yes'
        }
      ],
      defaultTriggerId: 175
    },
    {
      id: 40,
      type: MessageType.singleSelect,
      content: 'How long are you keeping this information?',
      options: [
        {
          id: 4000,
          label: 'LESS THAN 1 YEAR'
        },
        {
          id: 4001,
          label: 'MORE THAN 1 YEAR'
        },
        {
          id: 4002,
          label: 'PERMANENTLY'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 40,
            optionIds: [
              4002
            ]
          },
          id: 176,
          action: {
            type: 'next',
            nextQuestionId: 42
          },
          resultReport: 'some repo on question 40 PERMANENTLY',
          reply: 'Not a good idea, let’s keep going to see what we should do with this information.',
          todo: 'Todo Item 23'
        },
        {
          expectedResponses: {
            optionIds: []
          },
          id: 177,
          action: {
            type: 'next',
            nextQuestionId: 41
          },
          resultReport: 'some repo on question 40'
        }
      ],
      defaultTriggerId: 177
    },
    {
      id: 41,
      type: MessageType.singleSelect,
      content: 'Is the personal information you still have being used to make a decision that would affect this individual?',
      options: [
        {
          id: 4101,
          label: 'YES'
        },
        {
          id: 4100,
          label: 'NO'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 41,
            optionIds: [
              4100
            ]
          },
          id: 178,
          action: {
            type: 'next',
            nextQuestionId: 42
          },
          resultReport: 'some repo on question 41 no',
          reply: 'If the personal information has no relevance, it is time to destroy it.',
          todo: 'Todo Item 24'
        },
        {
          expectedResponses: {
            messageId: 41,
            optionIds: [
              4101
            ]
          },
          id: 179,
          action: {
            type: 'next',
            nextQuestionId: 42
          },
          resultReport: 'some repo on question 41 yes',
          reply: 'Okay, keep the information for one year after making the decision.'
        }
      ],
      defaultTriggerId: 179
    },
    {
      id: 42,
      type: MessageType.singleSelect,
      content: 'How long do you keep your financial information?',
      options: [
        {
          id: 4200,
          label: 'LESS THAN 7 YEARS'
        },
        {
          id: 4201,
          label: '7 YEARS'
        },
        {
          id: 4202,
          label: 'MORE THAN 7 YEARS'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 42,
            optionIds: [
              4200
            ]
          },
          id: 180,
          action: {
            type: 'next',
            nextQuestionId: 43
          },
          resultReport: 'some repo on question 42 4200',
          reply: 'Keep financial information for 7 years.',
          todo: 'Todo Item 25'
        },
        {
          expectedResponses: {
            messageId: 42,
            optionIds: [
              4201
            ]
          },
          id: 181,
          action: {
            type: 'next',
            nextQuestionId: 43
          },
          resultReport: 'some repo on question 41 4201',
          reply: 'Perfect!'
        },
        {
          expectedResponses: {
            messageId: 42,
            optionIds: [
              4202
            ]
          },
          id: 182,
          action: {
            type: 'next',
            nextQuestionId: 43
          },
          resultReport: 'some repo on question 41 4202',
          reply: 'Destroy financial information after 7 years.'
        }
      ],
      defaultTriggerId: 182
    },
    {
      id: 43,
      type: MessageType.singleSelect,
      content: 'How long does your organization keep relevant records?',
      options: [
        {
          id: 4300,
          label: 'LESS THAN 10 YEARS'
        },
        {
          id: 4301,
          label: '10 YEARS'
        },
        {
          id: 4302,
          label: '10 YEARS, LONGER IF IT IS RELEVANT'
        }
      ],
      triggers: [
        {
          expectedResponses: {
            messageId: 43,
            optionIds: [
              4300
            ]
          },
          id: 183,
          action: {
            type: 'nextModule',
            nextQuestionId: 11,
            nextModuleId: 3
          },
          resultReport: 'some repo on question 43 4300',
          reply: 'Keep all records for at least 10 years!',
          todo: 'Todo Item 26'
        },
        {
          expectedResponses: {
            messageId: 43,
            optionIds: [
              4301
            ]
          },
          id: 184,
          action: {
            type: 'nextModule',
            nextQuestionId: 11,
            nextModuleId: 3
          },
          resultReport: 'some repo on question 43 4301',
          reply: 'Good start - be sure to keep relevant records as long as they are relevant.'
        },
        {
          expectedResponses: {
            messageId: 43,
            optionIds: [
              4302
            ]
          },
          id: 185,
          action: {
            type: 'nextModule',
            nextQuestionId: 11,
            nextModuleId: 3
          },
          resultReport: 'some repo on question 43 4302',
          reply: 'Great!'
        }
      ],
      extraInfo: {
        title: 'WHAT IS RELEVANT?',
        content: 'Please write 1-2 sentences describing what relevant records are in this context'
      },
      defaultTriggerId: 185
    }
  ]