import {Option, Trigger, Node} from './index'

export class MultiSelectQuestion extends Node {
    constructor(
        id: number,
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[]){
            super(id,content, options, triggers, extraInfo)
    }
}