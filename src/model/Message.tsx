import {Option, Trigger, ResponseMatcher} from './index'
import {TriggerData} from './Trigger'
import { ResponsePath } from './ResponsePath';

export enum MessageType {
    singleSelect = 1,
    multiSelect = 2,
    autoPlayMessage = 3
}

export interface MessageData {
    type: MessageType
    id: number
    content: string
    options: any[] // TODO CHANGE THIS BACK to OptionsData[]
    triggers: TriggerData[],
    defaultTriggerId: number,
    extraInfo?: any
}

// TODO: we need to figure out which ones are optional 
export class Message {
    constructor(
        public responseMatcher: ResponseMatcher,
        private _id: number,
        private _content: string, 
        private _options: Option[], 
        private _triggers: Trigger[], 
        private _defaultTriggerId: number,
        private _extraInfo?: any){
    }

    // getters/setters
    get id() {
        return this._id;
    }
    get content() {
        return this._content;
    }
    get options() {
        return this._options;
    }
    get extraInfo() {
        return this._extraInfo;
    }
    get triggers() {
        return this._triggers;
    }
    get defaultTriggerId() {
        return this._defaultTriggerId;
    }

    getDefaultTrigger() {
        for(let i in this._triggers){
            if(this._triggers[i].id === this._defaultTriggerId){
               return this._triggers[i];
            }
        }
    }
    

    public findTrigger(responsePath: ResponsePath): Trigger|never {
        for (let trigger of this.triggers) {
            let triggerExpectedResponses = trigger.expectedResponses;
            let isMatch: boolean = this.responseMatcher.matchOptions(triggerExpectedResponses, responsePath);
            if(isMatch){
                return trigger // this is a matching trigger.
            }
        } 
        let defaultTrigger = this.getDefaultTrigger();
        if(defaultTrigger) {
            return defaultTrigger;
        }
        throw new Error();
    }
}