import {Option, Trigger, SingleSelectQuestion, MultiSelectQuestion, AutoplayMessage, OptionMatcher} from './index'
import { v4 as uuidv4 } from 'uuid';

export enum NodeType {
    singleSelect,
    multiSelect,
    autoPlayMessage
}

export interface NodeData {
    type: NodeType
    content: string[]
    options: Option[]
    triggers: Trigger[] 
    extraInfo: string[]
    optionMatcher: OptionMatcher
}



export class NodeFactory {

    static createNodeFromData(data: NodeData): Node|never {
        let { type, content, options, triggers, extraInfo, optionMatcher } = data 
        if (type == NodeType.singleSelect){
            return new SingleSelectQuestion(
                content, options, triggers, extraInfo, optionMatcher
            )
        }
        else if (type == NodeType.multiSelect){
            return new MultiSelectQuestion(
                content, options, triggers, extraInfo, optionMatcher
            )
        } else if (type == NodeType.autoPlayMessage){
            return new AutoplayMessage(
                content, options, triggers, extraInfo, optionMatcher
            )
        }
        throw new Error();       
    }
}

// TODO: we need to figure out which ones are optional 
export class Node {
    private _id: string

    constructor(
        private _content: string[], 
        private _options: Option[], 
        private _triggers: Trigger[], 
        private _extraInfo: string[],
        public optionMatcher: OptionMatcher){
        this._id = uuidv4();
    }


}