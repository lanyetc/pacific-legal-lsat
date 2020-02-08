import {Answer} from './data'
export interface Item {
    title: string
}
export interface Result {
    questionId: number,
    optionId: number,
    repo: string
}
export interface Context {
    path: Array<Answer>,
    todos: Array<Item>,
    reminders: Array<Item>,
    results: Array<Result>
}

export function getTodoList() {
    let todoList: Array<Item> = [];
    todoList.push({title: "Create a privacy policy"});
    todoList.push({title: "Review social media terms of service"});
    todoList.push({title: "Outline personal info access "});
    todoList.push({title: "Train employees on privacy policies"});
    return todoList;
}