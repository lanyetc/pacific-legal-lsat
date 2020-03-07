import {Option, Trigger, Node} from './index'

export class SingleSelectQuestion extends Node{
    constructor(
        id: number,
        content: string, 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: any){
            super(id, content, options, triggers, extraInfo)
    }
}