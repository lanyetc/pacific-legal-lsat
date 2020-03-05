import {Option, Node, Trigger, OptionMatcher} from '.'

export class AutoPlayMessage extends Node {
    constructor(
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[],
        optionMatcher: OptionMatcher){
            super(content, options, triggers, extraInfo, optionMatcher)
    }
}