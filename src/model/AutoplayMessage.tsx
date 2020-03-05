import {Option, Node, Trigger} from './index'

export class AutoPlayMessage extends Node {
    constructor(
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[]){
            super(content, options, triggers, extraInfo)
    }
}