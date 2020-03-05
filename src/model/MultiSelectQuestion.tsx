import {Option, Trigger, Node} from './index'

export class MultiSelectQuestion extends Node {
    constructor(
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[]){
            super(content, options, triggers, extraInfo)
    }
}