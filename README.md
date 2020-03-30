# LSALT 2.0 | Legal compliance simplified
A platform for creating complex legal surveys. 

Check it out! https://pacific-legal-portal.github.io/pacific-legal-lsat/#/




## Technical Overview
This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and TypeScript. It's a static single page application that is hosted using github pages. We use TravisCI for continuous integration and continuous deployment. 

## Getting Started 
We recommend first playing around with the application to get a better understanding of what this project is about. 

1. [Install](https://github.com/pacific-legal-portal/pacific-legal-lsat/wiki/Technical-Overview#installation)
2. Conceptual Overview


## Overview

At this time, the LSALT is built to accomplish two things for the users:
1. Provide non-profits with user friendly self assessment surveys using a conversational format as well as immdediate survey feedback.
2. Provide content creators the flexibility to write surveys with complex decision making functionality.

### Life Cycle of a Survey Module

First, the survey content is written and a script is prepared. 
The content follows a well defined schema with a graph-like structure.

Once it is written, the survey is handed down to the developers who translate it into a structured JSON format. Since there is currently no integrated survey editor, the translation from script to JSON is manual. 

Next, the JSON file is included in the data directory within the project and is added to the list of existing active survey modules.
 
When the page is loaded, the JSON files are assembled into linked typescript objects, representing questions or messages. Since this is a _conversational_ survey, both questions and messages are represented. These objects establish all possible survey paths and outcomes, and the actual outcome depends on how the user procedes through the survey.

As the user selects answers to each question, the program adds to a running list of results, and then decides where to go next by looking up an action associated to the selected answer.

### Adding a Survey
We'll begin by introducing Messages and Triggers as the fundamental elements of a survey and their relationship to one another. It's useful to imagine a survey as a directed, acyclic graph - a collection of nodes, the Messages, linked together by edges, the Triggers. 

fig1 - simple graph

*Message*
A Message is any prompt made by the chatbot. It could be a question for the user, either a MultiSelectQuestion or a SingleSelectQuestion. or it could be a simple statement, an AutoPlayMessage, requiring no response. 

fig2- simple message

*Triggers* 
Triggers are the arrows in the graph because they describe where to go and what to do every time a user selects an answer. For example, "If option A is selected, go to question 2, otherwise if option B is selected, go to question 3". In general, a trigger contains 3 main pieces of information:
1. expectedResponses - one or more options that the user chooses to answer a question.
2. results - given this response, we may want to provide some feedback. It can be a reply in the chat, a more detailed result that will be revealed on the results page, or a todo item.
3. action - given this response to this question, what should be shown to the user next? Either the another question, or the results page. 


Note: A single trigger "point" to a single next message, but depending on the answer, a question might have many possible next messages. So it follows that questions can have one or more triggers. 


fig3 - simple Trigger


# extras ====

It's worth mentioning that we've restricted the answers users can give to a predefined list of options in order to simplify the implementation of the mvp. 

These surveys are meant to take on a friendly conversational tone, hence why they're modeled using a chatbot format. 


## Modeling The Survey Structure
The underlying survey structure is graph-like. Imagine we have a three questions, 



It's graph-like because every answer to a question, could lead to another question and so the questions end up being linked to each other. 

This page is meant to be a quickstart guide geared toward bringing a potential developer up to speed.

## question groups
We've discussed triggers that point from one question to another given a certain answer, but it's worth mentioning that a single trigger, can in theory, point from many questions to another question. It's reasonable to imagine that sometimes we need the answers to multiple questions in order to figure out what to do next. This is functionality that we decided not to implement since the modules we were provided did not include such dependencies between questions and so it wasn't worth the complexity at the timme. 