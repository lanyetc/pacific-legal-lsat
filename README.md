# LSALT 2.0 | Legal compliance simplified
A platform for creating complex, but user friendly conversational surveys.

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and TypeScript. It's a static single page application that is hosted using github pages. We use TravisCI for continuous integration and continuous deployment. 

Check it out! https://pacific-legal-portal.github.io/pacific-legal-lsat/#/

## Getting Started 
We recommend first playing around with the application to get a better understanding of what this project is about. 

1. [Install](https://github.com/pacific-legal-portal/pacific-legal-lsat/wiki/Technical-Overview#installation)
2. Conceptual Overview
3. Adding a simple survey

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

## Tutorial - Adding a Simple Survey 
We'll begin by introducing Messages and Triggers as the fundamental elements of a survey and their relationship to one another. It's useful to imagine a survey as a directed, acyclic graph - a collection of nodes, the Messages, linked together by edges, the Triggers. 

fig1 - simple graph

This figure reveals the underlying structure of the survey content.

Here's a link to some documentation given to content creators about writing the script content itself. 

### Message
A Message is any prompt made by the chatbot. It could be a question for the user, either a MultiSelectQuestion or a SingleSelectQuestion. It could also be a simple statement, an AutoPlayMessage, requiring no response. 

fig2- simple message

### Trigger
Triggers are the arrows in the graph because they describe where to go and what to do every time a user selects an answer. For example, "If option A is selected, go to question 2, otherwise if option B is selected, go to question 3". In general, a trigger contains 3 main pieces of information:
1. expectedResponses - one or more options that the user chooses to answer a question.
2. results - given this response, we may want to provide some feedback. It can be a reply in the chat, a more detailed result that will be revealed on the results page, or a todo item.
3. action - given this response to this question, what should be shown to the user next? Either the another question, or the results page. 

Note: A single trigger "points" to a single next message, but naturally, a question might have many possible next messages, depending on the answer. It follows that questions can have one or more triggers. 

fig3 - simple Trigger

### Putting it all together
These are the same three questions from above formatted into a JSON object.

fig4 - sample json 

This file can be added to the following directory `pacific-legal-lsat/src/data/` 

The survey module can then be imported in the `data.tsx` file and added to the application's list of survey modules. 

Note that these messages won't be displayed in the app unless (1) the starting message id, or (2) a message trigger in the survey is changed to point to a message id in this sample file. 

From here, the data is loaded from the JSON files and passed as a prop to the landing page. 

### How are survey modules organized?
A module is composed of sub-modules and sub-modules contain messages.


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

# extras ====

It's worth mentioning that we've restricted the answers users can give to a predefined list of options in order to simplify the implementation of the mvp. 

These surveys are meant to take on a friendly conversational tone, hence why they're modeled using a chatbot format. 

It's graph-like because every answer to a question, could lead to another question and so the questions end up being linked to each other. 

This page is meant to be a quickstart guide geared toward bringing a potential developer up to speed. 

click here to find out why we only keep ids in the context

## question groups
We've discussed triggers that point from one question to another given a certain answer, but it's worth mentioning that a single trigger, can in theory, point from many questions to another question. It's reasonable to imagine that sometimes we need the answers to multiple questions in order to figure out what to do next. This is functionality that we decided not to implement since the modules we were provided did not include such dependencies between questions and so it wasn't worth the complexity at the timme. 

in case youre wondering why the repo is called pacific-legal-lsat instead of lsalt.. the name changed, but it is lsalt.

answers to questions from different submodules do not depend on eachother. 

is the survey data actually passed into the landing page component? it should be if it isnt. (so long as it's not hard coded.)

# General Architecture 

fig 4


## Presentational Components


## View Model
The view Model queries the Domain model to figure out how to manipulate what the user sees and the state of the view; it's the brains of the view. These are typically called container components in react. See this[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0] article on the differences between container components vs presentational components.   

The main container components in our application are: 

* `ChatbotPage.tsx`
* `ResultPage.tsx`
* `

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

## Why did we use a layered architecture?

Here are a few benefits of a layered approach, in which each layer maintains a single general responsibility and only knows about and communicates with the layer immediately below it: 

1. The application is generally easier to reason about since there is less to consider at any given time. If a change is made to a presentational component, the implementation of the domain model can safely be ignored when figuring out how to change the presentational component.

2. The blast radius of change is reduced. For example, let's suppose a new feild is added to the Message object. 

3. Layer implemenations can be swapped out without disrupting other Layers. Since each layer communicates with the layer below using an agreed upon contract (a set of methods), the exact implementation of any layer can be swapped out without disruption to the other layers (so long as the contract remains unbroken). More concretely, let's suppose a server needs to be added. In this case, the domain logic, model, would be moved to a server, and the data would move to a database. The fundamental functionality that the domain layer provides for the view model would remain the same, but the implementation would be moved out of the front end. Now the view needs to call the server api to get its data instead of the methods it used to use. We can save a lot of time and anguish by cleverly replacing the implementation of each method that used to exist with calls to the backend and the layers above would be none the wiser. 

## React Component Architecture
