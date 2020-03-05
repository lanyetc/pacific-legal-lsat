import {Option, Trigger, Node, ConditionMatcher} from './index'

export class SingleSelectQuestion extends Node{
    constructor(
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[]){
            super(content, options, triggers, extraInfo)
    }
}