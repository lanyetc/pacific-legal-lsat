import {ResponseItem} from '../model/index'
import React from 'react';

export interface Item {
    title: string
}
export interface Result {
    questionId: number,
    optionId: number,
    repo: string
}
export interface ModuleResult {
    name: string,
    todos: Array<Item>,
    reminders: Array<Item>,
    results: Array<Result>,
    path: Array<ResponseItem>
}
// Context: record all infomation would be used for result page
// results: the repo for each answered question. 
//          Since every result item related to a specific option of a question,
//          it should record both questionId and optionId that can be refered to.
// path: should record both questionId and optionID of passed node. So make it a Answer array.
//       may be can only keep the "results" feild?
// Consider: how to split results of different sub-modules?
export interface Context {
    moduleResults: { [key: number]: ModuleResult };
    todos: Array<Item>;
    reminders: Array<Item>;
}

// Context data generating functions. Only for testing
function getPath() {
    let pathList: Array<ResponseItem> = [];
    // pathList.push({ _messageId: 1, optionIds: [100] });
    // pathList.push({ _messageId: 3, optionIds: [300] });
    // pathList.push({ _messageId: 4, optionIds: [401] });
    return pathList;
}

function getTodoList() {
    let todoList: Array<Item> = [];
    todoList.push({ title: "Create a privacy policy" });
    todoList.push({ title: "Review social media terms of service" });
    todoList.push({ title: "Outline personal info access " });
    todoList.push({ title: "Train employees on privacy policies" });
    return todoList;
}

function getReminders() {
    let reminderList: Array<Item> = [];
    reminderList.push({ title: "Only use mass messages for fundraising" });
    reminderList.push({ title: "Get consent before sending mass messages" });
    reminderList.push({ title: "Lorem ipsum dolor sit amet" });
    return reminderList;
}

function getResultList() {
    let resultList: Array<Result> = [];
    resultList.push({ questionId: 1, optionId: 100, repo: "result repo no 1" });
    resultList.push({ questionId: 3, optionId: 300, repo: "result repo no 3" });
    resultList.push({ questionId: 4, optionId: 401, repo: "result repo no 4" });
    return resultList;
}

export function getContext() {
    let path = getPath();
    let todos = getTodoList();
    let reminders = getReminders();
    let results = getResultList();
    let module = { name: "Privacy Policy", path: path, todos: todos, reminders: reminders, results: results };
    let context: Context = {
        moduleResults: { 1: module },
        todos: [],
        reminders: []
    };
    return context;
}

// default context
const context: Context = {
    moduleResults: {},
    todos: [],
    reminders: []
};

export const ResultContext = React.createContext({
    context: context,
    updateContext: (id: number, contextItm: any) => { }
})

export class ResultContextProvider extends React.Component {


    updateContext = (id: number, contextItem: any) => {
        let context = this.state.context;
        if (context.moduleResults[id]) { // if current module already exist in result context
            context.moduleResults[id].todos = context.moduleResults[id].todos.concat(contextItem.todos);
            context.moduleResults[id].reminders = context.moduleResults[id].reminders.concat(contextItem.reminders);
            context.moduleResults[id].results.push(contextItem.result);
            context.moduleResults[id].path.push(contextItem.path);
        } else {
            context.moduleResults[id] = {
                name: contextItem.name,
                todos: contextItem.todos,
                reminders: contextItem.reminders,
                results: [contextItem.result],
                path: [contextItem.path]
            }; // if module does not exist
        }
        context.todos = context.todos.concat(contextItem.todos);
        context.reminders = context.reminders.concat(contextItem.reminders);
        this.setState({ context: context })
    }
    state = {
        context: context,
        updateContext: this.updateContext
    }

    render() {
        return (
            <ResultContext.Provider value={this.state}>
                {this.props.children}
            </ResultContext.Provider>
        )
    }
}

export const ResultContextConsumer = ResultContext.Consumer

// export const ResultContext = React.createContext(
//     context,
//     updateContext: (id: number, contextItm: any) => {}
// )