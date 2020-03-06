import {Condition} from './index'
export class Trigger{ 
    constructor(
        private _condition: Condition,
        private _action: any,
        private _todo?: any,
        private _reminder?: any){

        }
}

export interface TriggerData {
    condition: Condition,
    action: any,
    todo?: any,
    reminder?: any
}

export class TriggerFactory{
    creatTriggersFromData(triggerDatas: TriggerData[]){
        let triggers: Trigger[];
        triggerDatas.forEach(data => {
            let { condition, action, todo, reminder } = data;
            triggers.push(new Trigger(condition, action, todo, reminder));
        });
        
    }
}
