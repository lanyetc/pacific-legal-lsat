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
    creatTriggerFromData(tigger: TriggerData){
        let { condition, action, todo, reminder } = tigger
        return new Trigger(condition, action, todo, reminder);
    }
}
