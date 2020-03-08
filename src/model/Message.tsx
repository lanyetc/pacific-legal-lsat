import {Option, Trigger, ResponseMatcher, SingleSelectQuestion, MultiSelectQuestion, AutoPlayMessage} from './index'
import {TriggerData} from './Trigger'
import { ResponsePath } from './ResponsePath';

export enum MessageType {
    singleSelect,
    multiSelect,
    autoPlayMessage
}

export interface MessageData {
    type: MessageType
    id: number
    content: string
    options: any[] // TODO CHANGE THIS BACK to OptionsData[]
    triggers: TriggerData[],
    defaultTrigger: TriggerData,
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
        private _defaultTrigger: Trigger,
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
    get defaultTrigger() {
        return this._defaultTrigger;
    }
    

    public findTrigger(responsePath: ResponsePath): Trigger {
        for (let trigger of this.triggers) {
            let triggerExpectedResponses = trigger.expectedResponses;
            let isMatch: boolean = this.responseMatcher.matchOptions(triggerExpectedResponses, responsePath);
            if(isMatch){
                return trigger // this is a matching trigger.
            }
        } 
        return this.defaultTrigger;
    }
}