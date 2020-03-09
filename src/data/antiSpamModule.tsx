
export const antiSpamModule: any = [
    {
        id: 50,
        type: 3,
        content: 'Canada’s Anti-Spam Law (CASL) sets out the rules about sending mass email messages to members and the public.',
        options: [],
        triggers: [
            {
                id: 5010,
                expectedResponses: {
                    messageId: 50,
                    optionIds: []
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 51
                },
                resultReport: ''
            }
        ],
        defaultTriggerId: 5010
    },
    {
        id: 51,
        type: 1,
        content: 'Would you like to learn about Canada’s Anti-Spam Law?',
        options: [
            {
                id: 5101,
                label: 'Let’s do it'
            },
            {
                id: 5100,
                label: 'Skip to results'
            }
        ],
        triggers: [
            {
                id: 5110,
                expectedResponses: {
                    messageId: 51,
                    optionIds: [
                        5100
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 60
                },
                resultReport: ''
            },
            {
                id: 5111,
                expectedResponses: {
                    messageId: 51,
                    optionIds: [
                        5101
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 52
                },
                resultReport: ''
            }
        ],
        defaultTriggerId: 4511
    },
    {
        id: 52,
        type: 3,
        content: 'A CEM is a message sent by any electronic means (i.e., email, text, instant message, tweet) that has as its purpose, or one of its purposes, to encourage participation in a commercial activity. The activities of non profits and charities may be commercial if they involve selling to the public.',
        options: [],
        triggers: [
            {
                id: 5210,
                expectedResponses: {
                    messageId: 52,
                    optionIds: []
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 53
                },
                resultReport: ''
            }
        ],
        defaultTriggerId: 5210
    },
    {
        id: 53,
        type: 1,
        content: 'Do you send mass email messages to your members or the public?',
        options: [
            {
                id: 5301,
                label: 'Yes'
            },
            {
                id: 5300,
                label: 'No'
            }
        ],
        triggers: [
            {
                id: 5310,
                expectedResponses: {
                    messageId: 53,
                    optionIds: [
                        5300
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 60
                },
                resultReport: ''
            },
            {
                id: 5311,
                expectedResponses: {
                    messageId: 53,
                    optionIds: [
                        5301
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 54
                },
                resultReport: ''
            }
        ],
        defaultTriggerId: 5311
    },
    {
        id: 54,
        type: 1,
        content: 'Are you a registered charity?',
        options: [
            {
                id: 5401,
                label: 'Yes'
            },
            {
                id: 5400,
                label: 'No'
            }
        ],
        triggers: [
            {
                id: 5410,
                expectedResponses: {
                    messageId: 54,
                    optionIds: [
                        5400
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 57
                },
                resultReport: ''
            },
            {
                id: 5411,
                expectedResponses: {
                    messageId: 54,
                    optionIds: [
                        5401
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 55
                },
                resultReport: ''
            }
        ],
        defaultTriggerId: 5411,
        extraInfo: {
            title: 'I’m not sure',
            content: 'A registered charity is a non-profit that has applied for registration as a charity with the CRA. Only charities can issue receipts for charitable donations and receive a tax deduction.'
        }
    },
    {
        id: 55,
        type: 1,
        content: 'Is fundraising the main reason the charity is sending mass email messages?',
        options: [
            {
                id: 5501,
                label: 'Yes'
            },
            {
                id: 5500,
                label: 'No'
            }
        ],
        triggers: [
            {
                id: 5510,
                expectedResponses: {
                    messageId: 55,
                    optionIds: [
                        5500
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 57
                },
                resultReport: ''
            },
            {
                id: 5511,
                expectedResponses: {
                    messageId: 55,
                    optionIds: [
                        5501
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 56
                },
                resultReport: ''
            }
        ],
        defaultTriggerId: 5511
    },
    {
        id: 56,
        type: 3,
        content: 'Message sent by or on behalf of a charity with “primary purpose of raising funds for the charity” are exempt from the application of CASL. If the charity sends other kinds of emails to the public then it will have to follow CASL rules.',
        options: [],
        triggers: [
            {
                id: 5610,
                expectedResponses: {
                    messageId: 56,
                    optionIds: []
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 57
                },
                resultReport: ''
            }
        ],
        defaultTriggerId: 5610
    },
    {
        id: 57,
        type: 1,
        content: 'Have recipients “opted-in” before sending mass emails messages?',
        options: [
            {
                id: 5701,
                label: 'Yes'
            },
            {
                id: 5700,
                label: 'No'
            }
        ],
        triggers: [
            {
                id: 5710,
                expectedResponses: {
                    messageId: 57,
                    optionIds: [
                        5700
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 58
                },
                reply: 'Make sure individuals “opt-in” to mass messages before adding them to your contact list.',
                todo: 'Recipients must “opt-in” before receiving mess email messages.',
                resultReport: 'This is required under Canada’s Anti-Spam Law (CASL).'
            },
            {
                id: 5711,
                expectedResponses: {
                    messageId: 57,
                    optionIds: [
                        5701
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 58
                },
                reply: 'Great!',
                resultReport: 'This is required under Canada’s Anti-Spam Law (CASL).'
            }
        ],
        defaultTriggerId: 5711
    },
    {
        id: 58,
        type: 1,
        content: 'Do you include contact information in your mass email messages?',
        options: [
            {
                id: 5801,
                label: 'Yes'
            },
            {
                id: 5800,
                label: 'No'
            }
        ],
        triggers: [
            {
                id: 5810,
                expectedResponses: {
                    messageId: 58,
                    optionIds: [
                        5800
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 59
                },
                reply: 'Be sure you add this to all your mass messages!',
                todo: 'Include contact information in all mass email messages.',
                resultReport: 'This is required under Canada’s Anti-Spam Law (CASL).'
            },
            {
                id: 5811,
                expectedResponses: {
                    messageId: 58,
                    optionIds: [
                        5801
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 59
                },
                reply: 'Good job!',
                resultReport: 'This is required under Canada’s Anti-Spam Law (CASL).'
            }
        ],
        defaultTriggerId: 5811
    },
    {
        id: 59,
        type: 1,
        content: 'Do you include an “unsubscribe” option within your mass messages?',
        options: [
            {
                id: 5901,
                label: 'Yes'
            },
            {
                id: 5900,
                label: 'No'
            }
        ],
        triggers: [
            {
                id: 5910,
                expectedResponses: {
                    messageId: 59,
                    optionIds: [
                        5900
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 60
                },
                reply: 'An unsubscribe option must be included in all of your mass email messages!',
                todo: 'Include an “unsubscribe” option in all mass email messages',
                resultReport: 'This is required under Canada’s Anti-Spam Law (CASL).'
            },
            {
                id: 5911,
                expectedResponses: {
                    messageId: 59,
                    optionIds: [
                        5901
                    ]
                },
                action: {
                    type: 'nextQuestion',
                    nextQuestionId: 60
                },
                reply: 'Perfect!',
                resultReport: 'This is required under Canada’s Anti-Spam Law (CASL).'
            }
        ],
        defaultTriggerId: 5911
    },
    {
        id: 60,
        type: 1,
        content: 'You completed module',
        options: [
            {
                id: 6000,
                label: 'Go To Result'
            }
        ],
        triggers: [
            {
                id: 6010,
                expectedResponses: {
                    messageId: 60,
                    optionIds: [
                        6000
                    ]
                },
                action: {
                    type: 'exit'
                },
                resultReport: ''
            }
        ],
        defaultTriggerId: 6010
    }
]