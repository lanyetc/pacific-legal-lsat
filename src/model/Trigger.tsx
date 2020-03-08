import { ResponseItem, ResponseItemData, ResponseItemFactory } from "./ResponseItem";

export class Trigger{ 
    constructor(
        private _id: number,
        private _expectedResponses: ResponseItem, // NOTE: to extend question group, may need change this to an array
        private _action: any,
        private _resultReport: string,
        private _todo?: any[],
        private _reminder?: any[],
        private _reply?: string){
        }

    // getters/setters
    get id() {
        return this._id;
    }
    get expectedResponses() {
        return this._expectedResponses;
    }

    get reply() {
        return this._reply;
    }

    get action() {
        return this._action;
    }

    get resultReport() {
        return this._resultReport;
    }

    get todo() {
        return this._todo;
    }

    get reminder() {
        return this._reminder;
    }
}

export interface TriggerData {
    id: number,
    expectedResponses: ResponseItemData,
    action: any,
    resultReport: string,
    todo?: any,
    reminder?: any,
    reply?: string
}

export class TriggerFactory{
    // create an array of triggers
    static createTriggersFromData(triggerDatas: TriggerData[]){
        let triggers: Trigger[] = [];
        triggerDatas.forEach(data => {
            let {id, action, resultReport, todo, reminder, reply } = data;
            let expectedResponses:ResponseItem = ResponseItemFactory.createResponseItemFromData(data.expectedResponses);
            triggers.push(new Trigger(id, expectedResponses, action, resultReport, todo, reminder, reply));
        });
        return triggers;
    }
    // create a single default trigger
    static createTriggerFromData(triggerData: TriggerData) {
        let { id, action, resultReport, todo, reminder, reply } = triggerData;
        let expectedResponses:ResponseItem = ResponseItemFactory.createResponseItemFromData(triggerData.expectedResponses);
        return new Trigger(id, expectedResponses, action, resultReport, todo, reminder, reply);
    }
}
