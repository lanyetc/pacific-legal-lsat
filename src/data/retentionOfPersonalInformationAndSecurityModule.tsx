import {MessageType} from '../model/index'
export let retentionOfPersonalInformationAndSecurityModule: any = [
    {
        id: 20,
        type: MessageType.singleSelect,
        content: 'Let’s talk about storing personal information! Select everyone who can access personal information',
        options: [
          {
            id: 2000,
            label: 'All employees'
          },
          {
            id: 2001,
            label: 'All employees and volunteers'
          },
          {
            id: 2002,
            label: 'A small number of authorized individuals'
          },
          {
            id: 2003,
            label: 'No one'
          }
        ],
        triggers: [
          {
            id: 2010,
            expectedResponses: {
              messageId: 20,
              optionIds: [
                2000
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 21
            },
            reply: "This is rarely a good approach, unless your non-profit is small. If you are a larger non-profit, you will want to reduce access to only a few individuals.",
            resultReport: 'Only a small number of authorized individuals should have access to stored personal information.'
          },
          {
            id: 2011,
            expectedResponses: {
              messageId: 20,
              optionIds: [
                2002
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 21
            },
            reply: 'Perfect!',
            resultReport: 'Only a small number of authorized individuals should have access to stored personal information.'
          },
          {
            id: 2012,
            expectedResponses: {
              messageId: 20,
              optionIds: [
                2001,
                2003
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 21
              },
            reply: 'Let’s change the access to a few designated individuals!',
            todo: 'Only allow a few individuals to access personal information',
            resultReport: 'some repo on question 28 volunteers'
          }
        ],
        defaultTriggerId: 2012
      },
      {
        id: 21,
        type: MessageType.singleSelect,
        content: 'Where do you store personal information?',
        options: [
          {
            id: 2100,
            label: 'On paper '
          },
          {
            id: 2101,
            label: 'On computer'
          },
          {
            id: 2102,
            label: 'On paper and on computer'
          }
        ],
        triggers: [
          {
            id: 2110,
            expectedResponses: {
              messageId: 21,
              optionIds: [
                2100
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 22
            },
            resultReport: ''
          },
          {
            id: 2111,
            expectedResponses: {
              messageId: 21,
              optionIds: [
                2101
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 24
            },
            resultReport: ''
          },
          {
            id: 2112,
            expectedResponses: {
              messageId: 21,
              optionIds: [
                2102
              ]
            },
            action: {
              type: 'next',
              nextQuestionId: 23
            },
            resultReport: ''
          }
        ],
        defaultTriggerId: 2112
      },
      {
        id: 22,
        type: MessageType.singleSelect,
        content: 'Do you keep your paper documents in a locked cabinet?',
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
            id: 2210,
            expectedResponses: {
              messageId: 22,
              optionIds: [
                2200
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 27
            },
            reply: 'Lock those documents up!',
            todo: 'Keep paper documents in a locked cabinet',
            resultReport: 'Use locked filing cabinets to keep personal information secured.'
          },
          {
            id: 2211,
            expectedResponses: {
              messageId: 22,
              optionIds: [
                2201
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 27
            },
            reply: 'Good job!',
            resultReport: 'Use locked filing cabinets to keep personal information secured.'
          }
        ],
        defaultTriggerId: 2211
      },
      {
        id: 23,
        type: MessageType.singleSelect,
        content: 'Do you keep your paper documents in a locked cabinet?',
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
            id: 2310,
            expectedResponses: {
              messageId: 23,
              optionIds: [
                2300
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 24
            },
            reply: 'Lock those documents up!',
            todo: 'Keep paper documents in a locked cabinet',
            resultReport: 'Use locked filing cabinets to keep personal information secured.',
          },
          {
            id: 2311,
            expectedResponses: {
              messageId: 23,
              optionIds: [
                2301
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 24
            },
            reply: 'Good job!',
            resultReport: 'Use locked filing cabinets to keep personal information secured.',
          }
        ],
        defaultTriggerId: 2311
      },
      {
        id: 24,
        type: MessageType.singleSelect,
        content: 'Do you keep personal information data encrypted?',
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
            id: 2410,
            expectedResponses: {
              messageId: 24,
              optionIds: [
                2400
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 25
            },
            reply: 'This is a great way to keep data secure, added to your list',
            reminder: 'Encrypt personal information stored on your computer',
            resultReport: 'Encrypt sensitive data if possible'
          },
          {
            id: 2411,
            expectedResponses: {
              messageId: 24,
              optionIds: [
                2401
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 25
            },
            reply: 'Great!',
            resultReport: 'Encrypt sensitive data if possible'
          }
        ],
        defaultTriggerId: 2411
      },
      {
        id: 25,
        type: MessageType.singleSelect,
        content: 'Is the personal information stored on your computer or online password protected?',
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
            id: 2510,
            expectedResponses: {
              messageId: 25,
              optionIds: [
                2500
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 27
            },
            reply: 'Always use passwords to keep your digital content secure.',
            reminder: 'Use passwords for all digital resources',
            resultReport: 'Always use passwords to keep digital content secure.',
          },
          {
            id: 2511,
            expectedResponses: {
                messageId: 25,
                optionIds: [
                  2501
                ]
              },
              action: {
                type: 'nextQuestion',
                nextQuestionId: 26
              },
              resultReport: 'Always use passwords to keep digital content secure.',
            }
        ],
        defaultTriggerId: 2511
      },
      {
        id: 26,
        type: MessageType.singleSelect,
        content: 'How often do you change your passwords?',
        options: [
          {
            id: 2600,
            label: '0-6 months '
          },
          {
            id: 2601,
            label: '6-12 months'
          },
          {
            id: 2602,
            label: 'Over a year'
          },
          {
            id: 2603,
            label: 'Never'
          }
        ],
        triggers: [
          {
            id: 2610,
            expectedResponses: {
              messageId: 26,
              optionIds: [
                2600
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 27
            },
            reply: 'Awesome, keep it up!',
            resultReport: 'Change passwords every 6 months to keep your digital content secure.',
          },
          {
            id: 2611,
            expectedResponses: {
              messageId: 26,
              optionIds: [
                2601
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 27
            },
            reply: 'Pretty good, try changing your passwords every 6 months.',
            resultReport: 'Change passwords every 6 months to keep your digital content secure.',
          },
          {
            id: 2612,
            expectedResponses: {
              messageId: 26,
              optionIds: [
                2602,
                2603
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 27
            },
            reply: 'Change passwords every 6 months to keep your digital content secure.',
            reminder: 'Change passwords every six months ',
            resultReport: 'Change passwords every 6 months to keep your digital content secure.',
          }
        ],
        defaultTriggerId: 2612
      },
      {
        id: 27,
        type: MessageType.singleSelect,
        content: 'Does your non-profit have a website?',
        options: [
          {
            id: 2701,
            label: 'Yes'
          },
          {
            id: 2700,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 2710,
            expectedResponses: {
              messageId: 27,
              optionIds: [
                2700
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 32
            },
            resultReport: '',
          },
          {
            id: 2711,
            expectedResponses: {
                messageId: 27,
                optionIds: [
                  2701
                ]
              },
              action: {
                type: 'nextQuestion',
                nextQuestionId: 28
              },
              resultReport: '',
            }
        ],
        defaultTriggerId: 2711
      },
      {
        id: 28,
        type: MessageType.singleSelect,
        content: 'Do you collect Digitally Created Personal Information (D.C.P.I.), such as information from website traffic?',
        options: [
          {
            id: 2801,
            label: 'Yes'
          },
          {
            id: 2800,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 2810,
            expectedResponses: {
              messageId: 28,
              optionIds: [
                2800
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 30
            },
            resultReport: ''
          },
          {
            id: 2811, 
            expectedResponses: {
              messageId: 28,
              optionIds: [
                2801
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 29
              },
            resultReport: ''
          }
        ],
        extraInfo: {
          title: 'WHAT IS D.C.P.I.?',
          content: "Digitally created personal information includes location information, including GPS data; device identifiers such as IP and MAC addresses; click stream data, browser history, bookmarks; user generated social network data such as comments, ratings, likes and dislikes, Twitter stream, or customer service interactions.",
        },
        defaultTriggerId: 2811
      },
      {
        id: 29,
        type: MessageType.singleSelect,
        content: 'Does your privacy policy include information about the D.C.P.I. you collect?',
        options: [
          {
            id: 2901,
            label: 'Yes'
          },
          {
            id: 2900,
            label: 'No'
          },
          {
            id: 2902,
            label: 'No Privacy Policy yet'
          }
        ],
        triggers: [
          {
            id: 2910,
            expectedResponses: {
              messageId: 29,
              optionIds: [
                2900
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 30
            },
            reply: 'Added to your list! Check out your results at the end to find suggested wording to add to your privacy policy.',
            reminder: 'Include D.C.P.I. information in your privacy policy',
            resultReport: 'For example, include a statement that states the organization does not systematically collect information about the identity of the individuals searching the site. If applicable, explain that the organization collects statistical information through a log file that indicates which pages were visited and how frequently.'
          },
          {
            id: 2911,
            expectedResponses: {
              messageId: 29,
              optionIds: [
                2901
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 30
            },
            reply: 'Great!',
            resultReport: 'For example, include a statement that states the organization does not systematically collect information about the identity of the individuals searching the site. If applicable, explain that the organization collects statistical information through a log file that indicates which pages were visited and how frequently.'
          },
          {
            id: 2912,
            expectedResponses: {
              messageId: 29,
              optionIds: [
                2902
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 30
            },
            reply: 'Be sure to include this when you make your privacy policy!',
            reminder: 'Include D.C.P.I. information in your privacy policy',
            resultReport: 'For example, include a statement that states the organization does not systematically collect information about the identity of the individuals searching the site. If applicable, explain that the organization collects statistical information through a log file that indicates which pages were visited and how frequently.'
          }
        ],
        defaultTriggerId: 2912
      },
      {
        id: 30,
        type: MessageType.singleSelect,
        content: 'Do you use a web analytics service to collect data on website visitors?',
        options: [
          {
            id: 3001,
            label: 'Yes'
          },
          {
            id: 3000,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 3010,
            expectedResponses: {
              messageId: 30,
              optionIds: [
                3000
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 32
            },
            resultReport: ''
          },
          {
            id: 3011, 
            expectedResponses: {
              messageId: 30,
              optionIds: [
                3001
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 31
              },
            resultReport: ''
          }
        ],
        defaultTriggerId: 3011,
        extraInfo: {
            title: "What are web analytics?",
            content: "Web analytics services are computer programs that track website usage for reporting and evaluating purposes. Google Analytics is a common example of a web analytics service.",
        }
      },
      {
        id: 31,
        type: MessageType.singleSelect,
        content: 'Does your privacy policy include your use and collection of analytics?',
        options: [
          {
            id: 3101,
            label: 'Yes'
          },
          {
            id: 3100,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 3110,
            expectedResponses: {
              messageId: 31,
              optionIds: [
                3100
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 32
            },
            reply: "This is important to include in your privacy policy. Added to your list!",
            reminder: "Include a description of your website analytics in your privacy policy",
            resultReport: 'For example, include a statement that explains that your website uses Google Analytics to track usage of the website for reporting and evaluation purposes. Also explain that Google Analytics uses first-party cookies, which store non-personally identifiable information, to report on user interactions on Google Analytics customers’ websites. Finally, explain that browsers do not share first-party cookies across domains.  See Google’s Privacy Policy: https://policies.google.com/privacy?hl=en'
          },
          {
            id: 3111, 
            expectedResponses: {
              messageId: 31,
              optionIds: [
                3101
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 32
              },
              reply: "Good job!",
              resultReport: 'For example, include a statement that explains that your website uses Google Analytics to track usage of the website for reporting and evaluation purposes. Also explain that Google Analytics uses first-party cookies, which store non-personally identifiable information, to report on user interactions on Google Analytics customers’ websites. Finally, explain that browsers do not share first-party cookies across domains.  See Google’s Privacy Policy: https://policies.google.com/privacy?hl=en'
            }
        ],
        defaultTriggerId: 3111
      },
      {
        id: 32,
        type: MessageType.singleSelect,
        content: 'Does your non-profit use social media, such as Facebook, LinkedIn, Instagram, etc.?',
        options: [
          {
            id: 3201,
            label: 'Yes'
          },
          {
            id: 3200,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 3210,
            expectedResponses: {
              messageId: 32,
              optionIds: [
                3200
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 34
            },
            resultReport: ''
          },
          {
            id: 3211, 
            expectedResponses: {
              messageId: 32,
              optionIds: [
                3201
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 33
              },
            resultReport: ''
          }
        ],
        defaultTriggerId: 3211,
      },
      {
        id: 33,
        type: MessageType.singleSelect,
        content: 'Have you recently reviewed the terms and conditions for your social media channels?',
        options: [
          {
            id: 3301,
            label: 'Yes'
          },
          {
            id: 3300,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 3310,
            expectedResponses: {
              messageId: 33,
              optionIds: [
                3300
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 34
            },
            reply: "Always a good practice to review social media terms and conditions! Remember to be careful about sharing member information on social media.",
            reminder: "Review your social media terms and conditions",
            resultReport: "See https://tosdr.org/ for a social media terms of service cheat-sheet."
          },
          {
            id: 3311, 
            expectedResponses: {
              messageId: 33,
              optionIds: [
                3301
              ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 33
              },
              reply: "Good job!",
              resultReport: "See https://tosdr.org/ for a social media terms of service cheat-sheet."
            }
        ],
        defaultTriggerId: 3311,
        extraInfo: {
            title: "What is this?",
            content: "Terms and conditions are the agreement between a service and the service user. This is the legal text that we agree to before using a service and it can often be accessed by a link on the bottom of a website or within the settings. For a quick overview, check out the website: www.tosdr.org"
        }
      },
      {
        id: 34,
        type: MessageType.singleSelect,
        content: 'How often do you review your antivirus software?',
        options: [
          {
            id: 3400,
            label: '0-6 months '
          },
          {
            id: 3401,
            label: '6-12 months '
          },
          {
            id: 3402,
            label: 'More than a year '
          },
          {
            id: 3403,
            label: 'Never'
          }
        ],
        triggers: [
          {
            id: 3410,
            expectedResponses: {
              messageId: 34,
              optionIds: [
                3400
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 35
            },
            reply: 'Great!',
            resultReport: 'It’s a good idea to review your antivirus software every six months.'
          },
          {
            id: 3411,
            expectedResponses: {
              messageId: 34,
              optionIds: [
                3403
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 35
            },
            reply: 'It’s a good idea to review your antivirus software every 6 months.',
            reminder: 'Review anti-virus software every six months',
            resultReport: 'It’s a good idea to review your antivirus software every six months.'
          },
          {
            id: 3412,
            expectedResponses: {
                messageId: 34,
                optionIds: [
                  3401,
                  3302
                ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 35
            },
            reply: 'Not bad, try to review once every 6 months!',
            resultReport: 'It’s a good idea to review your antivirus software every six months.'
          }
        ],
        defaultTriggerId: 3412
      },
      {
        id: 35,
        type: MessageType.singleSelect,
        content: 'Do you have personal information that is no longer necessary for legal or business purposes?',
        options: [
          {
            id: 3501,
            label: 'Yes'
          },
          {
            id: 3500,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 3510,
            expectedResponses: {
              messageId: 35,
              optionIds: [
                3500
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 38
            },
            resultReport: ''
          },
          {
            id: 3511,
            expectedResponses: {
              messageId: 35,
              optionIds: [
                3501
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 36
            },
            resultReport: ''
          }
        ],
        defaultTriggerId: 35
      },
      {
        id: 36,
        type: MessageType.singleSelect,
        content: 'How long are you keeping this information?',
        options: [
          {
            id: 3600,
            label: 'Less than one year '
          },
          {
            id: 3601,
            label: 'More than one year '
          },
          {
            id: 3602,
            label: 'Permanently'
          }
        ],
        triggers: [
          {
            id: 3610,
            expectedResponses: {
              messageId: 36,
              optionIds: [
                3602
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 37
            },
            reply: 'Not a good idea, let’s keep going to see what we should do with this information.',
            resultReport: ''
          },
          {
            id: 3611,
            expectedResponses: {
                messageId: 36,
                optionIds: [
                  3600,
                  3601
                ]
            },
            action: {
                type: 'nextQuestion',
                nextQuestionId: 37
            },
            resultReport: ''
          }
        ],
        defaultTriggerId: 3611
      },
      {
        id: 37,
        type: MessageType.singleSelect,
        content: 'Is the personal information you still have being used to make a decision that would affect this individual?',
        options: [
          {
            id: 3701,
            label: 'Yes'
          },
          {
            id: 3700,
            label: 'No'
          }
        ],
        triggers: [
          {
            id: 3710,
            expectedResponses: {
              messageId: 37,
              optionIds: [
                3700
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 38
            },
            reply: 'Only keep personal information as long as it is relevant to the work of your non-profit and reasonable to do so.',
            todo: 'Only keep personal information as long as it is reasonable and relevant to your work',
            resultReport: 'PIPA requires that personal information be kept for as long as it is reasonable to do so. If it is still relevant and part of your non-profits work, this information should be kept. Dispose of personal information that is no longer relevant or reasonable.'
          },
          {
            id: 3711,
            expectedResponses: {
              messageId: 37,
              optionIds: [
                3701
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 38
            },
            reply: 'Okay, keep the information for one year after making the decision.',
            todo: 'Only keep personal information as long as it is reasonable and relevant to your work',
            resultReport: 'PIPA requires that personal information be kept for as long as it is reasonable to do so. If it is still relevant and part of your non-profits work, this information should be kept. Dispose of personal information that is no longer relevant or reasonable.'
          }
        ],
        defaultTriggerId: 3711
      },
      {
        id: 38,
        type: MessageType.singleSelect,
        content: 'How long do you keep your financial information?',
        options: [
          {
            id: 3800,
            label: 'Less than 7 years '
          },
          {
            id: 3801,
            label: '7 years '
          },
          {
            id: 3802,
            label: 'More than 7 years '
          }
        ],
        triggers: [
          {
            id: 3810,
            expectedResponses: {
              messageId: 38,
              optionIds: [
                3800
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 39
            },
            reply: 'Keep financial information for 7 years.',
            todo: 'Keep financial information for 7 years before shredding these records',
            resultReport: 'Keep financial information for 7 years before shedding it.'
          },
          {
            id: 3811,
            expectedResponses: {
              messageId: 38,
              optionIds: [
                3801
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 39
            },
            reply: 'Perfect!',
            resultReport: 'Keep financial information for 7 years before shedding it.'
          },
          {
            id: 3812,
            expectedResponses: {
              messageId: 38,
              optionIds: [
                3802
              ]
            },
            action: {
              type: 'nextQuestion',
              nextQuestionId: 39
            },
            reply: 'You can shred financial information after 7 years.',
            resultReport: 'Keep financial information for 7 years before shedding it.'
          }
        ],
        defaultTriggerId: 3812
      },
      {
        id: 39,
        type: MessageType.singleSelect,
        content: 'How long does your non-profit have to keep Official Records under the Societies Act? ',
        options: [
          {
            id: 3900,
            label: 'Less than 10 years '
          },
          {
            id: 3901,
            label: '10 years'
          },
          {
            id: 3902,
            label: '10 years, longer if relevant'
          }
        ],
        triggers: [
          {
            id: 3910,
            expectedResponses: {
              messageId: 39,
              optionIds: [
                3900
              ]
            },
            action: {
              type: 'nextModule',
              nextModuleId: 6,
              nextQuestionId: 40,

            },
            reply: 'Keep all OFFICIAL records for at least 10 years! ',
            todo: 'Keep Official Records for 10 years, or as long as relevant ',
            resultReport: 'Non-profits need to keep all official records for at least 10 years, and longer if they are still relevant. Official records can be found here:https://wiki.clicklaw.bc.ca/index.php?title=Record-Keeping_(Societies_Act_FAQs)#What_are_the_official_records_of_a_society.3F',
          },
          {
            id: 3911,
            expectedResponses: {
              messageId: 39,
              optionIds: [
                3901
              ]
            },
            action: {
                type: 'nextModule',
                nextModuleId: 6,
                nextQuestionId: 40,
  
              },
            reply: 'Good start - be sure to keep relevant records as long as they are relevant.',
            resultReport: 'Non-profits need to keep all official records for at least 10 years, and longer if they are still relevant. Official records can be found here:https://wiki.clicklaw.bc.ca/index.php?title=Record-Keeping_(Societies_Act_FAQs)#What_are_the_official_records_of_a_society.3F',

          },
          {
            id: 3912,
            expectedResponses: {
              messageId: 39,
              optionIds: [
                3902
              ]
            },
            action: {
                type: 'nextModule',
                nextModuleId: 6,
                nextQuestionId: 40,
  
              },
            reply: 'Great!',
            resultReport: 'Non-profits need to keep all official records for at least 10 years, and longer if they are still relevant. Official records can be found here:https://wiki.clicklaw.bc.ca/index.php?title=Record-Keeping_(Societies_Act_FAQs)#What_are_the_official_records_of_a_society.3F',
          }
        ],
        extraInfo: {
          title: 'What are official records? ',
          content: 'These are the 14 records set out in Section 20(1) and (2) of the Societies Act. This includes the Register of Directors, Register of Members, meeting minutes, bylaws, financial statements, and others. Relevance will depend on the non profits activities.'
        },
        defaultTriggerId: 3912
      }
]