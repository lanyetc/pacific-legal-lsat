import {Option, Trigger, Node} from '.'

export class AutoPlayMessage extends Node{
    constructor(
        id: number,
        content: string, 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: any){
            super(id, content, options, triggers, extraInfo)
    }
}