
// privacy officer
export const privacyOfficerModule: any = [
    {
      id: 40,
      type: 3,
      content: 'Every non-profit needs to have one person who can answer questions about the collection, use, retention and disclosure of data. This role is called the Privacy Officer.',
      options: [],
      triggers: [
        {
          id: 4010,
          expectedResponses: {
            messageId: 40,
            optionIds: []
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 41
          },
          resultReport: ''
        }
      ],
      defaultTriggerId: 4010
    },
    {
      id: 41,
      type: 1,
      content: 'Does your non-profit have a designated privacy officer?',
      options: [
        {
          id: 4101,
          label: 'Yes'
        },
        {
          id: 4100,
          label: 'No'
        }
      ],
      triggers: [
        {
          id: 4110,
          expectedResponses: {
            messageId: 41,
            optionIds: [
              4100
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 7,
            nextQuestionId: 43
          },
          todo: 'Designate a privacy officer',
          resultReport: 'Every non-profit is required to have one person who can answer questions about the collection, use, retention and disclosure of data. This role is called the Privacy Officer.',
          reply: 'Good job'
        },
        {
          id: 4111,
          expectedResponses: {
            messageId: 41,
            optionIds: [
              4101
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 42
          },
          resultReport: 'Every non-profit is required to have one person who can answer questions about the collection, use, retention and disclosure of data. This role is called the Privacy Officer.'
        }
      ],
      defaultTriggerId: 4111
    },
    {
      id: 42,
      type: 1,
      content: 'Is your privacy officers contact information included in your privacy policy?',
      options: [
        {
          id: 4201,
          label: 'Yes'
        },
        {
          id: 4200,
          label: 'No'
        },
        {
          id: 4202,
          label: 'No Privacy Policy yet'
        }
      ],
      triggers: [
        {
          id: 4210,
          expectedResponses: {
            messageId: 42,
            optionIds: [
              4200
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 7,
            nextQuestionId: 43
          },
          reminder: 'Include the privacy officers contact information in privacy policy',
          resultReport: 'Be sure to include the contact information for your privacy officer in your privacy policy.',
          reply: 'Be sure to add this to your privacy policy!'
        },
        {
          id: 4211,
          expectedResponses: {
            messageId: 42,
            optionIds: [
              4202
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 7,
            nextQuestionId: 43
          },
          reminder: 'Include the privacy officers contact information in privacy policy',
          resultReport: 'Be sure to include the contact information for your privacy officer in your privacy policy.',
          reply: 'Add this to your privacy policy once you create it!'
        },
        {
          id: 4212,
          expectedResponses: {
            messageId: 42,
            optionIds: [
              4201
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 7,
            nextQuestionId: 43
          },
          resultReport: 'Be sure to include the contact information for your privacy officer in your privacy policy.',
          reply: 'Great!'
        }
      ],
      defaultTriggerId: 4212
    }
  ]