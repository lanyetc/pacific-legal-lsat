

// Requests for Information
export const requestsForInformationModule: any = [
    {
      id: 43,
      type: 3,
      content: "Sometimes a non-profit will get requests for information. If the non-profit provides community or social services, the request could be from clients. If it is an arts organization, requests might include donation related information. If the request is coming from a member of the non-profit society, this is discussed in detail on the lawfornonprofits.ca website and FAQ's.",
      options: [],
      triggers: [
        {
          id: 4310,
          expectedResponses: {
            messageId: 43,
            optionIds: []
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 44
          },
          resultReport: ''
        }
      ],
      defaultTriggerId: 4310
    },
    {
      id: 44,
      type: 1,
      content: 'Does your privacy policy explain how someone could access the information you collect?',
      options: [
        {
          id: 4401,
          label: 'Yes'
        },
        {
          id: 4400,
          label: 'No'
        },
        {
          id: 4402,
          label: 'No Privacy Policy yet'
        }
      ],
      triggers: [
        {
          id: 4410,
          expectedResponses: {
            messageId: 44,
            optionIds: [
              4400
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 45
          },
          reminder: 'Describe how to request information in privacy policy',
          resultReport: 'Include this information in your privacy policy with the privacy officer’s contact information.',
          reply: 'Check out the suggested wording in your results at the end of the module to add this to your privacy policy! '
        },
        {
          id: 4411,
          expectedResponses: {
            messageId: 44,
            optionIds: [
              4402
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 45
          },
          reminder: 'Describe how to request information in privacy policy',
          resultReport: 'Include this information in your privacy policy with the privacy officer’s contact information.',
          reply: 'Be sure to add this to your privacy policy once you create it'
        },
        {
          id: 4412,
          expectedResponses: {
            messageId: 44,
            optionIds: [
              4401
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 45
          },
          resultReport: 'Include this information in your privacy policy with the privacy officer’s contact information.'
        }
      ],
      defaultTriggerId: 4412
    },
    {
      id: 45,
      type: 1,
      content: 'Have you received or expect to receive requests for information?',
      options: [
        {
          id: 4501,
          label: 'Yes'
        },
        {
          id: 4500,
          label: 'No'
        }
      ],
      triggers: [
        {
          id: 4510,
          expectedResponses: {
            messageId: 45,
            optionIds: [
              4500
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 8,
            nextQuestionId: 50
          },
          resultReport: ''
        },
        {
          id: 4511,
          expectedResponses: {
            messageId: 45,
            optionIds: [
              4501
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 46
          },
          resultReport: ''
        }
      ],
      defaultTriggerId: 4511
    },
    {
      id: 46,
      type: 1,
      content: 'Who is asking?',
      options: [
        {
          id: 4600,
          label: 'Someone looking for their information'
        },
        {
          id: 4601,
          label: 'Someone looking for information about others'
        }
      ],
      triggers: [
        {
          id: 4610,
          expectedResponses: {
            messageId: 46,
            optionIds: [
              4600
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 47
          },
          resultReport: ''
        },
        {
          id: 4611,
          expectedResponses: {
            messageId: 46,
            optionIds: [
              4601
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 48
          },
          resultReport: ''
        }
      ],
      defaultTriggerId: 4611
    },
    {
      id: 47,
      type: 1,
      content: 'Are they requesting .. ',
      options: [
        {
          id: 4700,
          label: 'Their personal information'
        },
        {
          id: 4701,
          label: 'How their personal information is being used'
        },
        {
          id: 4702,
          label: 'Who has access to their personal information'
        },
        {
          id: 4703,
          label: 'Other information'
        }
      ],
      triggers: [
        {
          id: 4710,
          expectedResponses: {
            messageId: 47,
            optionIds: [
              4703
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 48
          },
          resultReport: ''
        },
        {
          id: 4711,
          expectedResponses: {
            messageId: 47,
            optionIds: [
              4700,
              4701,
              4702
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 8,
            nextQuestionId: 50
          },
          reply: 'Great, they can have this information!',
          resultReport: ''
        }
      ],
      defaultTriggerId: 4711
    },
    {
      id: 48,
      type: 1,
      content: 'Is the information .. ',
      options: [
        {
          id: 4800,
          label: 'Protected by solicitor-client privilege'
        },
        {
          id: 4801,
          label: 'Part of an incomplete investigation/appeal'
        },
        {
          id: 4802,
          label: 'Part of a mediation/arbitration'
        },
        {
          id: 4803,
          label: 'None of the above'
        }
      ],
      triggers: [
        {
          id: 4810,
          expectedResponses: {
            messageId: 48,
            optionIds: [
              4803
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 49
          },
          resultReport: 'If the information requested is: protected by solicitor-client privilege, part of an incomplete investigation/appeal, or part of a mediation/arbitration, don’t give out this information. If you plan to deny a request for information, consult a lawyer.'
        },
        {
          id: 4811,
          expectedResponses: {
            messageId: 48,
            optionIds: [
              4800,
              4801,
              4802
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 8,
            nextQuestionId: 50
          },
          todo: 'Don’t disclose sensitive information. Consult a lawyer before denying a request',
          reply: 'Don’t give out this information. If you plan to deny a request for information, consult a lawyer. ',
          resultReport: 'If the information requested is: protected by solicitor-client privilege, part of an incomplete investigation/appeal, or part of a mediation/arbitration, don’t give out this information. If you plan to deny a request for information, consult a lawyer.'
        }
      ],
      defaultTriggerId: 4811
    },
    {
      id: 49,
      type: 1,
      content: 'Would disclosing this information.. ',
      options: [
        {
          id: 4900,
          label: 'Reveal personal information about another person'
        },
        {
          id: 4901,
          label: 'Threaten the safety/harm of another person?'
        },
        {
          id: 4902,
          label: 'Cause grave harm to the requester?'
        },
        {
          id: 4903,
          label: 'None of the above '
        }
      ],
      triggers: [
        {
          id: 4910,
          expectedResponses: {
            messageId: 49,
            optionIds: [
              4903
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 8,
            nextQuestionId: 50
          },
          reply: 'Proceed with caution. If you plan to deny a request for information, consult a lawyer.',
          resultReport: 'If the information requested is: protected by solicitor-client privilege, part of an incomplete investigation/appeal, or part of a mediation/arbitration, don’t give out this information. If you plan to deny a request for information, consult a lawyer.'
        },
        {
          id: 4911,
          expectedResponses: {
            messageId: 49,
            optionIds: [
              4900,
              4901,
              4902
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 8,
            nextQuestionId: 50
          },
          todo: 'Don’t disclose sensitive information. Consult a lawyer before denying a request',
          reply: 'Don’t give out this information. If you plan to deny a request for information, consult a lawyer. ',
          resultReport: 'If the information requested would: reveal personal information about another person, threaten the safety/harm of another person, or cause grave harm to the requester, don’t give out this information.'
        }
      ],
      defaultTriggerId: 4911
    }
  ]