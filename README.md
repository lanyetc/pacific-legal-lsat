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

That said, alongside the tutorial, it would be useful to have a basic idea of the general architecture, the domain model, and the React component structure. 

# common questions and examples

### How is 'the next question' chosen after the user submits an answer?
Let trigger1 and trigger2 belong to the same question.

```
trigger1 = {
    expectedResponses: [
        {questionId: 1, optionIds: [1,4,2] },
    ],
    todo: "make a privacy policy",
    reply: "not good"
    resultReport: "some paragraph about privacy policies" 
    action: { type: 'next', nextQuestionId: 10 }

}

trigger2 = {
    expectedResponses: [
        {questionId: 1, optionIds: [8,2] },
    ],
    reply: "great"
    action: { type: 'next', nextQuestionId: 5 }
}
```
Suppose the question is a *multi-select* question and the user selects optionIds 1, 4, and 2. 
How does the survey figure out what the next question is? What does it do afterward? Here are the steps it takes:

1. look through each trigger's expectedResponses
2. check that all of optionIds 1, 4, and 2 exist
3. If they all exist: 
* add the reply to the chat. 
* add the result report to the context
* use the action to determine which question to go to, which submodule/module to continue to, or whether to exit the survey.

Following these steps, the trigger that would run is trigger1.

Now suppose the question is a *single-select* question and the user selects option 4. What changes?
For single-select, only step 2 changes. The survey only checks that *one* of the selected options exist in the user's answer.

Following these steps, trigger1 would still run.

Notice that the multi-select question assumes an AND between each optionId - "This trigger will run if the user chooses "option1 AND option4, AND option2". 
In contrast, notice that the single-select question assumes an OR between each optionId - "This trigger will run if the user chooses "option1 OR option4, OR option2"

### What happens when none of the triggers match the user's selected response?
Each question has a default trigger that runs in such a case.

### How does the application know when the survey is over? 
Major control flow is determined by the action object inside the trigger. There are three possibilities: "exit", "start a new module", and "next question"

### How are the modules structured? 
Modules contain submodules, which contain questions. Refer to these classes for more information. 


### How does the application keep track of a user's progress through a survey?
We keep a global object, called Context, using reacts context API to store the user's progress through the survey. Every time the user answers a question, the application adds the following Result to the context:
1.  questionId - which question was answered?
2.  optionIds - which options were selected to answer this question?
3.  resultReport - what result was associated with this answer?
4.  triggerId: - which of the triggers did the user's answer selection activate?

Each Result is added to a ModuleResult in the context to associate the user's path through a module to the module itself. Since the user's exact path through the survey is captured, it's possible to implement a feature allowing the user to go back and change their answer to a question (provided that the following answers are erased if need be). 

```
fig5
Context: {
    ModuleResults:[
        moduleName:
        Results: [

        ]
    ]
}
```

The context is used to provide access to data that needs to be shared across the application. The ChatBotPage component, adds to the context as questions are answered, and the ResultsPage component reads from it to layout the user's results. 

click here to find out why we only keep ids in the context. 

# General Architecture 

![Figure 5](/diagrams/figure5.png)

## Presentational Components
These components have very little logic or state in them, they're almost strictly for formatting parts of the view. 

## View Model
The view Model queries the Domain model to figure out how to manipulate what the user sees and the state of the view; it's the brains of the view. These are typically container components in react. See this[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0] article on the differences between container components vs presentational components.   

The main container components in our application are: 

* `ChatbotPage.tsx`
* `ResultPage.tsx`

## Domain Model and Business Logic
This is where the 'brain of the survey' lives, the "machinery", so to speak. It's how a survey operates "under the hood", so it's completely independent of the view. The user interface could be anything and this domain model its business logic would remain roughly the same so long as the application is still meant to be a conversational Survey. For example, we decided to represent this survey as a chatbot, but it could have a voice assistant just as easily. It's not hard to imagine that both chatbot and voice assistant need to accept an answer and somehow figure out what the next question/message should be - this is common logic to both applications. 

So instead of being entangled with the user interface, this layer simply exposes a set of functionality for the user interface to use. For example, when the user selects an answer, the view can ask the model for the correct trigger to run `question.findTrigger(questionPath)`, so that it get results to save, and figure out where to go next.  

Finally, we went with a rich domain model as opposed to an anemic one along side a slew of services because the objects in our domain model are highly composite. 

## Data Translation 
Since we don't have a database, and the JSON is being input manually, the data needs to be processed before it can be operated over as a domain model object. This layer is here mainly for the convenience of making manual data entry a little bit less tedious. 

Most of the Domain Model objects (Option, Message, etc) have associated data transfer obejcts. These are the objects that the JSON is written for, which are translated into domain model objects using a coresponding object factory. 

For example, the Message class has a MessageData interface sibling (the data transfer object). MessageData can fully be expressed as JSON without first needing to call new on the intermediate objects that make up a Message. 

We can see that MessageData and Message have a few differences; one key difference is that MessageData has a type field - this is where factories come in. The MessageFactory takes a MessageData JSON object, looks at the type field, say the type is AutoPlayMessage" and creates a new `AutoPlayMessage()` which extends from `Message`. You can find this example in the pacific-legal-lsat/src/model/test.  

We considered adding validation to this layer, but we didn't have enough resources at the time. 

Note: This is somewhat of a controversial layer, since it's a little bit painful to maintain when the schema changes, and it doesn't bring the benefits that a layered architecture typically brings, but we found it helpful given how much time we spent writing JSON. 

## Data
The JSON files stored in the `pacific-legal-lsat/src/data` directory. This is the structured survey content. 

# Technical Reasoning
## Why did we use a layered architecture?

Here are a few benefits of a layered approach, in which each layer maintains a single general responsibility and only knows about and communicates with the layer immediately below it: 

1. The application is generally easier to reason about since there is less to consider at any given time. If a change is made to a presentational component, the implementation of the domain model can safely be ignored when figuring out how to change the presentational component.

2. The blast radius of change is reduced. For example, let's suppose a new feild is added to the Message object. 

3. Layer implemenations can be swapped out without disrupting other Layers. Since each layer communicates with the layer below using an agreed upon contract (a set of methods), the exact implementation of any layer can be swapped out without disruption to the other layers (so long as the contract remains unbroken). More concretely, let's suppose a server needs to be added. In this case, the domain logic, model, would be moved to a server, and the data would move to a database. The fundamental functionality that the domain layer provides for the view model would remain the same, but the implementation would be moved out of the front end. Now the view needs to call the server api to get its data instead of the methods it used to use. We can save a lot of time and anguish by cleverly replacing the implementation of each method that used to exist with calls to the backend and the layers above would be none the wiser. 

## Why didn't we add a server?
We could have decided to add a server to this project, but given the time line and the limited requirements we had to work with, a server wasn't justified since everything could easily be handled statically. 

It's only after a certain point of necessary complexity, that servers can be used to actually manage complexity and increase maintainability. Until that point, it's a lot like using a slicing ham with a chain saw. 

Additionally, we didn't want to sink resources into a more complex architecture at a time because it was unclear whether we were building the right thing. We decided that experimenting with the core functionality, getting user feedback, and figuring out the overall product direction was more valuable than building and maintaing a server, which would slow down the rate of feature output. 


## why did we use TypeScript?
Our choice to use TypeScript is possibly the best technical decision we made throughout the development of this project and the reasoning is two fold: 

1. Schema Validation - We needed some sort of mechanism for schema validation. Inputting the survey content manually is quite an error prone process; it's easy to forget an object here, or use a string instead of an array there. Using Typescript, we know right away that an object is invalid and we know why. From there, it's easy to fix the error, and continue developing without being slowed down. 

2. Debugging - TypeScript makes debugging infinitely easier. There are few things more frustrating than trying to trace a null pointer exception in a non trivial project without strong types and it's something that is less of an issue when using TypeScript. It's especially useful when different areas of the application need to communicate with eachother because the types provide extra contextual information around what _should_ be happening and prevent errors from propogating too far from the source until they are reported. 

# Grievances
Since most of the technical discussion so far focuses on positive aspects of the implemenation, this section is devoted to the mistakes made along the way, and aspects that still need to be dealt with.

It's important to keep in mind that this project, as far as it's come, is an experiment. It's about exploring possibilities and validating a hypothesis and in order to accomplish that, we built rather hastily at times, sacrificing longer term maintainability, for an increase in feature output. Here are some of the biggest issues that still exist:

## Leaky Abstractions
Since we didn't have time to refactor as much as we should have, the context, which keeps track of the users progress through the survey, doesn't encapsulate it's members or it's functionality. There's a lot of functionality that should belong in the context, that can be found in the code associated with the results page. Changes to the context schema are quite disruptive to the results page code, since the results page code knows about (and in some cases, controls) how the context functionality is implemented.

## Data Model 
fig 6

## The CSS
The CSS is quite brittle. Making small changes often leads to completely unexpected results. We should have followed flexbox recommendations more closely. 

## File Organization
We made two folders for react containers and components, but there are components inside the folder for containers. Really, both folders shouuld either be merged together or reorganized. 

## Lack of Tests
We needed to sacrifice how much time we put toward writing tests to keep up with the feature requests. There are arguments for and against doing so, but it will certainly make changing the code more difficult. 

## The link between the object data and the components
Currently, the data is loaded from several components right out of a file called `data.tsx`. The data should either be loaded once from the context, or loaded once from the parent react component and then passed into the other components as props. 

As it is now, it's awkward to add code for a user to choose a module from the landing page now because the logic that determines what module to run is in the chatbot page itself.

`data.tsx` also technically loads it twice every time the `getSurvey()` function is invoked. 

# Limitations
The following limitations resulted from our efforts to contain complexity: 

## Question Groups
We've discussed triggers that point from one question to another given a certain answer, but it's worth mentioning that a single trigger can, in theory, point from many questions to another question. It's reasonable to imagine that sometimes we need the answers to multiple questions in order to figure out what to do next. This is functionality that we decided not to implement since the modules we were provided did not include such dependencies between questions and so it wasn't worth the complexity at the time. 

## Question Types
We only added a few question types, namely, autoplay messages, single select questions, and multi select questions. There are many more question types that can be added, but it wasn't something we needed to prioritize.

## The link sharing feature
After a user completes the survey, they're taken to the results page and have the option to copy a link that they can then share with their peers. This feature, was originally not supposed to be included since it required a server, but by itself did not justify building a server. We decided to build it anyway and so a creative solution had to be implemented. We stored all of the object IDs from a user's survey session in the URL of the results page. The results page decodes the object IDs from the URL, looks up the objects in the survey data structure, and then uses it to populate the results. This will unfortunately fail once the url becomes too long to hold all the necessary IDs. 

## choosing the next question based on more complex logic
Figuring out what the next question is, involves looking through each possible answer the user could have given (a question's list of triggers) and matching one of the triggers to the answer that was actually selected. 

Let the following be a trigger for question 1, which is a multi-select question:

```
trigger1 = {
    expectedResponses: [
        {questionId: 1, optionIds: [1,4,2] },
    ],
    action: {
        type: 'next',
        nextQuestionId: 10
    }

}
```

Suppose the user answers the question with optionIds 1, 4, and 2. It makes sense that this trigger would be chosen. 

Now suppose the user answers the question with just optionId 1. Should this trigger run now?

It depends on whether the logic between the options is "option1 AND option4 AND option2", or if it's "option1 OR option4 OR option2". But it could also be "option 1 AND option 4 OR option 2".

Why stop there? This could get infinitely complex; the logic could be: 

```
AND: [
    OR: [
        AND: [
            4,
            2
        ],
        9
    ],
    OR: [
        4,
        1
    ],
    NOT: 3
]

```

This structure is intentionally complex, but it's not inconceivable that nested logic could be useful, or even just a mixture of ANDs and ORs. The module we've implemented thus far doesn't justify such complexity, but it certainly still counts as a limitation.

# Extensions
The following are a few of the features we didn't get to:

1. The ability to retake a question. It's not uncommon for users to go back and change their answers to certain questions. As it is, They have to retake the whole survey. 

2. Analytics

3. no dynamic links/tooltips in the content. The survey messages can only contain plain text - functionality for rendering links, pictures, etc hasn't been implemented. 
