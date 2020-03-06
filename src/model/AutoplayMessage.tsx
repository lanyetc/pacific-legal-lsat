import {Option, Node, Trigger} from './index'

export class AutoPlayMessage extends Node {
    constructor(
        id: number,
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[]){
            super(id, content, options, triggers, extraInfo)
    }
}