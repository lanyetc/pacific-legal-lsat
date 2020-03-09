
// privacy policy
export const privacyPolicyModule: any =  [
    {
      id: 1,
      type: 1,
      content: 'Let’s get started! Do you have a privacy policy?',
      options: [
        {
          id: 101,
          label: 'Yes'
        },
        {
          id: 100,
          label: 'No'
        }
      ],
      triggers: [
        {
          id: 110,
          expectedResponses: {
            messageId: 1,
            optionIds: [
              100
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 2,
            nextQuestionId: 4
          },
          resultReport: 'The Personal Information Protection Act (“PIPA”) requires societies to develop a privacy policy. A privacy policy is a document that describes the personal information we are collecting: why we are collecting it, what we use it for, how we keep it secure and when we have to disclose it. It will also include how a person can review what we are doing with it.',
          todo: 'Create a Privacy Policy',
          reply: 'Got it - I’m adding this to your to-do list.'
        },
        {
          id: 111,
          expectedResponses: {
            messageId: 1,
            optionIds: [
              101
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 2
          },
          resultReport: 'The Personal Information Protection Act (“PIPA”) requires societies to develop a privacy policy. A privacy policy is a document that describes the personal information we are collecting: why we are collecting it, what we use it for, how we keep it secure and when we have to disclose it. It will also include how a person can review what we are doing with it.',
          reply: 'Great! Let’s talk about your privacy policy.'
        }
      ],
      defaultTriggerId: 111,
      extraInfo: {
        title: 'What is a privacy policy?',
        content: 'A privacy policy is a document which describes whose personal information we are collecting: why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing.'
      }
    },
    {
      id: 2,
      type: 2,
      content: 'Who is covered by your privacy policy?',
      options: [
        {
          id: 200,
          label: 'Directors (aka board members)'
        },
        {
          id: 201,
          label: 'Workers (employees or contractors)'
        },
        {
          id: 202,
          label: 'Volunteers'
        },
        {
          id: 203,
          label: 'The people you serve'
        }
      ],
      triggers: [
        {
          id: 210,
          expectedResponses: {
            messageId: 2,
            optionIds: [
              200,
              201,
              202,
              203
            ]
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 3
          },
          resultReport: 'The Personal Information Protection Act (“PIPA”) requires societies to develop a privacy policy. A privacy policy is a document that describes the personal information we are collecting: why we are collecting it, what we use it for, how we keep it secure and when we have to disclose it. It will also include how a person can review what we are doing with it.',
          reply: 'Good job'
        },
        {
          id: 211,
          expectedResponses: {
            messageId: 2,
            optionIds: []
          },
          action: {
            type: 'nextQuestion',
            nextQuestionId: 3
          },
          resultReport: 'The Personal Information Protection Act (“PIPA”) requires societies to develop a privacy policy. A privacy policy is a document that describes the personal information we are collecting: why we are collecting it, what we use it for, how we keep it secure and when we have to disclose it. It will also include how a person can review what we are doing with it.',
          reminder: 'Include all relevant individuals in your privacy policy',
          reply: 'Hmm, you might be missing a few people who should be covered.'
        }
      ],
      defaultTriggerId: 211
    },
    {
      id: 3,
      type: 1,
      content: 'Are your staff, directors and other volunteers trained on privacy policies',
      options: [
        {
          id: 301,
          label: 'Yes'
        },
        {
          id: 300,
          label: 'No'
        }
      ],
      triggers: [
        {
          id: 310,
          expectedResponses: {
            messageId: 3,
            optionIds: [
              300
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 2,
            nextQuestionId: 4
          },
          reminder: 'Train your team members on privacy policies',
          resultReport: 'Share your learnings with your team members to ensure policies are being followed across your non-profit.',
          reply: 'Added to your list!'
        },
        {
          id: 311,
          expectedResponses: {
            messageId: 3,
            optionIds: [
              301
            ]
          },
          action: {
            type: 'nextModule',
            nextModuleId: 2,
            nextQuestionId: 4
          },
          resultReport: 'Share your learnings with your team members to ensure policies are being followed across your non-profit.',
          reply: 'Great!'
        }
      ],
      defaultTriggerId: 311
    }
  ]










