import {Option, Trigger, SingleSelectQuestion, MultiSelectQuestion, AutoPlayMessage} from './index'
import { v4 as uuidv4 } from 'uuid';
import {TriggerData} from './Trigger'

export enum NodeType {
    singleSelect,
    multiSelect,
    autoPlayMessage
}

export interface NodeData {
    type: NodeType
    content: string[]
    optionData: any[] // TODO CHANGE THIS BACK to OptionData[]
    triggersData: TriggerData[] 
    extraInfo: string[]
}

// TODO: we need to figure out which ones are optional 
export class Node {
    private _id: string

    constructor(
        private _content: string[], 
        private _options: Option[], 
        private _triggers: Trigger[], 
        private _extraInfo: string[]){
        this._id = uuidv4();
    }


}