import {Condition, ConditionData, ConditionFactory} from './Condition'
export class Trigger{ 
    constructor(
        private _condition: Condition,
        private _action: any,
        private _todo?: any,
        private _reminder?: any,
        private _response?: string){

        }
}

export interface TriggerData {
    conditionData: ConditionData,
    action: any,
    todo?: any,
    reminder?: any,
    response?: string
}

export class TriggerFactory{
    static creatTriggersFromData(triggerDatas: TriggerData[]){
        let triggers: Trigger[] = [];
        triggerDatas.forEach(data => {
            let { conditionData, action, todo, reminder, response } = data;
            const condition: Condition = ConditionFactory.createConditionFromData(conditionData);
            triggers.push(new Trigger(condition, action, todo, reminder, response));
        });
        return triggers;
    }
}
