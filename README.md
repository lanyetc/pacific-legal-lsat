# LSALT 2.0 | Legal compliance simplified
A platform for creating complex, but user friendly conversational surveys.

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and TypeScript. It's a static single page application that is hosted using github pages. We use TravisCI for continuous integration and continuous deployment. 

Check it out! https://pacific-legal-portal.github.io/pacific-legal-lsat/#/

## Getting Started 
We recommend first playing around with the application to get a better understanding of what this project is about. 

1. [Install](https://github.com/pacific-legal-portal/pacific-legal-lsat/wiki/Technical-Overview#installation)
2. [Conceptual Overview](#Overview)
3. [Adding a simple survey](https://github.com/pacific-legal-portal/pacific-legal-lsat#adding-a-simple-survey)
4. [Whats next?](https://github.com/pacific-legal-portal/pacific-legal-lsat#whats-next)

## Overview

At this time, the LSALT is built to accomplish two things for the users:
1. Provide non-profits with user friendly self assessment surveys using a conversational format as well as immediate survey feedback.
2. Provide content creators the flexibility to write surveys with complex decision making functionality.

In general, these goals are accomplished by following the process outlined here: 

First, the survey content is written and a script is prepared. 
The content follows a well defined schema with a graph-like structure.

Once it is written, the survey is handed down to the developers who translate it into a structured JSON format. Since there is currently no integrated survey editor, the translation from script to JSON is manual. 

Next, the JSON file is included in the data directory within the project and is added to the list of existing active survey modules.
 
When the page is loaded, the JSON files are assembled into linked typescript objects, representing questions or messages. Since this is a _conversational_ survey that will be presented as a chatbot, both questions and messages are represented. These objects establish all possible survey paths and outcomes, and the actual outcome depends on how the user procedes through the survey.

As the user selects answers to each question, the program adds to a running list of results, and then decides where to go next by looking up an action associated to the selected answer.

## Adding a Simple Survey 
We'll begin by introducing Messages and Triggers as the fundamental elements of a survey and their relationship to one another. It's useful to imagine a survey as a directed, acyclic graph - a collection of nodes, the Messages, linked together by edges, the Triggers. 

![Figure 1](/diagrams/figure1.png)

This figure reveals the underlying structure of the survey content.

Here's a link to some documentation given to content creators about writing the script content itself. 

### Message
A Message is any prompt made by the chatbot. It could be a question for the user, either a MultiSelectQuestion or a SingleSelectQuestion. It could also be a simple statement, an AutoPlayMessage, requiring no response. 

![Figure 2](/diagrams/figure2.png)


### Trigger
Triggers are the arrows in the graph because they describe where to go and what to do every time a user selects an answer. For example, "If option A is selected, go to question 2, otherwise if option B is selected, go to question 3". In general, a trigger contains 3 main pieces of information:
1. expectedResponses - one or more options that the user chooses to answer a question.
2. results - given this response, we may want to provide some feedback. It can be a reply in the chat, a more detailed result that will be revealed on the results page, or a todo item.
3. action - given this response to this question, what should be shown to the user next? Either the another question, or the results page. 

Note: A single trigger "points" to a single next message, but naturally, a question might have many possible next messages, depending on the answer. It follows that questions can have one or more triggers. 

![Figure 3](/diagrams/figure3.png)


### Putting it all together
These are the roughly the same three questions from above formatted into a JSON object.

```
    {
        id: 1,
        type: MessageType.singleSelect,
        content: 'Do you have a privacy policy',
        options: [ { id: 501, label: 'Yes' },
                    { id: 500, label: 'No'} ],
        triggers: [
         {
            id: 510,
            expectedResponses: { messageId: 1, optionIds: [501]},
            action: { type: 'nextQuestion', nextQuestionId: 3 },
            resultReport: ''
          },
          {
            id: 511,
            expectedResponses: { messageId: 1, optionIds: [500]},
            action: { type: 'nextQuestion', nextQuestionId: 6 },
            reply: "",
            resultReport: ""
          }
        ],
        defaultTriggerId: 410
    },
        {
        id: 2,
        type: MessageType.singleSelect,
        content: 'Do you have a privacy officer?',
        options: [ { id: 566, label: 'Yes' },
          { id: 567, label: 'No'} ],
        triggers: [
         {
            id: 566,
            expectedResponses: { messageId: 2, optionIds: [566]},
            action: { type: 'nextQuestion', nextQuestionId: 9 },
            resultReport: ''
          },
          {
            id: 567,
            expectedResponses: { messageId: 2, optionIds: [567]},
            action: { type: 'nextQuestion', nextQuestionId: 10 },
            reply: "",
            resultReport: ""
          }
        ],
        defaultTriggerId: 410
    },
        {
        id: 3,
        type: MessageType.autoPlayMessage,
        content: 'That's the end of the survey',
        triggers: [
          {
            id: 517,
            action: { type: 'exit'},
          }
        ],
        defaultTriggerId: 517
    },

```


This can be added to the following directory as a typescript type any object `pacific-legal-lsat/src/data/` 

The survey module can then be imported in the `data.tsx` file and added to the application's list of survey modules. 

Note that these messages won't be displayed in the app unless (1) the starting message id, or (2) a message trigger in the survey is changed to point to a message id in this sample file. 

From here, the data is loaded from the JSON files and passed as a prop to the landing page. 

# What's next?
It's rare that a nontrivial codebase is handed off to a new set of developers who then simply continue development without any guidance. When it happens, there's understandably a significant amount of time that must be put toward, toil, code archaeology, and just wondering why certain things are the way they are. If this project is to be extended, we've layed out the rest of this documentation in such a way that it can be referred to on an as needed basis to hopefully answer those questions as they are asked.

That said, alongside the tutorial, it would be useful to have a basic idea of the [general architecture](https://github.com/pacific-legal-portal/pacific-legal-lsat/wiki/General-Architecture), the [domain model](https://github.com/pacific-legal-portal/pacific-legal-lsat/wiki/Domain-model), and the [React component structure](https://github.com/pacific-legal-portal/pacific-legal-lsat/wiki/Component_structure). 

See the [wiki](https://github.com/pacific-legal-portal/pacific-legal-lsat/wiki) for more details