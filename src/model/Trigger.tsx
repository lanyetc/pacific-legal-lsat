export class Trigger{ 
    constructor(
        private _expectedResponses: number[], // an array of expected options id.
        private _action: any,
        private _resultReport: string,
        private _todo?: any,
        private _reminder?: any,
        private _reply?: string){
        }

    // getters/setters
    get expectedResponses() {
        return this._expectedResponses;
    }
}

export interface TriggerData {
    expectedResponses: number[],
    action: any,
    resultReport: string,
    todo?: any,
    reminder?: any,
    reply?: string
}

export class TriggerFactory{
    // create an array of triggers
    static creatTriggersFromData(triggerDatas: TriggerData[]){
        let triggers: Trigger[] = [];
        triggerDatas.forEach(data => {
            let { expectedResponses, action, resultReport, todo, reminder, reply } = data;
            triggers.push(new Trigger(expectedResponses, action, resultReport, todo, reminder, reply));
        });
        return triggers;
    }
    // create a single default trigger
    static creatTriggerFromData(triggerData: TriggerData) {
        let { expectedResponses, action, resultReport, todo, reminder, reply } = triggerData;
        return new Trigger(expectedResponses, action, resultReport, todo, reminder, reply);
    }
}
