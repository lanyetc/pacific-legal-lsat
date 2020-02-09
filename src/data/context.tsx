import {Answer} from './data'
export interface Item {
    title: string
}
export interface Result {
    questionId: number,
    optionId: number,
    repo: string
}
// Context: record all infomation would be used for result page
// results: the repo for each answered question. 
//          Since every result item related to a specific option of a question,
//          it should record both questionId and optionId that can be refered to.
// path: should record both questionId and optionID of passed node. So make it a Answer array.
//       may be can only keep the "results" feild?
// Consider: how to split results of different sub-modules?
export interface Context {
    path: Array<Answer>,
    todos: Array<Item>,
    reminders: Array<Item>,
    results: Array<Result>
}

// Context data generating functions. Only for testing
function getPath() {
    let pathList: Array<Answer> = [];
    pathList.push({questionId: 1, optionId: 100});
    pathList.push({questionId: 3, optionId: 300});
    pathList.push({questionId: 4, optionId: 401});
    return pathList;
}

function getTodoList() {
    let todoList: Array<Item> = [];
    todoList.push({title: "Create a privacy policy"});
    todoList.push({title: "Review social media terms of service"});
    todoList.push({title: "Outline personal info access "});
    todoList.push({title: "Train employees on privacy policies"});
    return todoList;
}

function getReminders() {
    let reminderList: Array<Item> = [];
    reminderList.push({title: "Only use mass messages for fundraising"});
    reminderList.push({title: "Get consent before sending mass messages"});
    reminderList.push({title: "Lorem ipsum dolor sit amet"});
    return reminderList; 
}

function getResultList() {
    let resultList: Array<Result> = [];
    resultList.push({questionId: 1, optionId: 100, repo: "result repo no 1"});
    resultList.push({questionId: 3, optionId: 300, repo: "result repo no 3"});
    resultList.push({questionId: 4, optionId: 401, repo: "result repo no 4"});
    return resultList;
}

export function getContext() {
    let path = getPath();
    let todos = getTodoList();
    let reminders = getReminders();
    let results = getResultList();
    let context:Context = {path: path, todos: todos, reminders: reminders, results: results};
    return context; 
}