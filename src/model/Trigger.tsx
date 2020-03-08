import { ResponseItem, ResponseItemData, ResponseItemFactory } from "./ResponseItem";

export class Trigger{ 
    constructor(
        private _expectedResponses: ResponseItem, // NOTE: to extend question group, may need change this to an array
        private _action: any,
        private _resultReport: string,
        private _todos?: any[],
        private _reminders?: any[],
        private _reply?: string){
        }

    // getters/setters
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

    get todos() {
        return this._todos;
    }

    get reminders() {
        return this._reminders;
    }
}

export interface TriggerData {
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
            let {action, resultReport, todo, reminder, reply } = data;
            let expectedResponses:ResponseItem = ResponseItemFactory.createResponseItemFromData(data.expectedResponses);
            triggers.push(new Trigger(expectedResponses, action, resultReport, todo, reminder, reply));
        });
        return triggers;
    }
    // create a single default trigger
    static createTriggerFromData(triggerData: TriggerData) {
        let { action, resultReport, todo, reminder, reply } = triggerData;
        let expectedResponses:ResponseItem = ResponseItemFactory.createResponseItemFromData(triggerData.expectedResponses);
        return new Trigger(expectedResponses, action, resultReport, todo, reminder, reply);
    }
}
