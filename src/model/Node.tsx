import {Option, Trigger, SingleSelectQuestion, MultiSelectQuestion, AutoPlayMessage} from './index'
import {TriggerData} from './Trigger'

export enum NodeType {
    singleSelect,
    multiSelect,
    autoPlayMessage
}

export interface NodeData {
    type: NodeType
    id: number
    content: string
    options: any[] // TODO CHANGE THIS BACK to OptionsData[]
    triggers: TriggerData[] 
    extraInfo: any
}

// TODO: we need to figure out which ones are optional 
export class Node {
    constructor(
        private _id: number,
        private _content: string, 
        private _options: Option[], 
        private _triggers: Trigger[], 
        private _extraInfo: any){
    }


}