import {ResponseItem} from '../model/index'
import React from 'react';

export interface Item {
    title: string
}
export interface Result {
    questionId: number,
    optionIds: number[],
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

// default context
const defaultContext: Context = {
    moduleResults: {},
    todos: [],
    reminders: []
};

export const ResultContext = React.createContext({
    context: defaultContext,
    updateContext: (id: number, contextItm: any) => { }
})

export class ResultContextProvider extends React.Component {


    updateContext = (id: number, contextItem: any) => {
        let context = this.state.context;

        const resultItem: Result = {questionId: contextItem.path.messageId, optionIds: contextItem.path.optionIds, repo: contextItem.resultReport}
        if (context.moduleResults[id]) { // if current module already exist in result context
            if(contextItem.todo)
                context.moduleResults[id].todos.push(contextItem.todo)
            if(contextItem.reminder)
                context.moduleResults[id].reminders.push(contextItem.reminder)
            if(contextItem.resultReport)
                context.moduleResults[id].results.push(resultItem);
            context.moduleResults[id].path.push(contextItem.path);
        } else {
            context.moduleResults[id] = {
                name: contextItem.name,
                todos: [contextItem.todo],
                reminders: [contextItem.reminder],
                results: [resultItem],
                path: [contextItem.path]
            }; // if module does not exist
        }
        if(contextItem.todo)
            context.todos.push(contextItem.todo);
        if(contextItem.reminder)
            context.reminders.push(contextItem.reminder);
        this.setState({ context: context })
    }
    state = {
        context: defaultContext,
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