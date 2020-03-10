import {Option, Trigger, Node, OptionMatcher} from './index'

export class SingleSelectQuestion extends Node{
    constructor(
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[],
        optionMatcher: OptionMatcher){
            super(content, options, triggers, extraInfo, optionMatcher)
    }
}