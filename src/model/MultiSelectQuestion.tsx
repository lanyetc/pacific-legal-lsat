import {Option, Trigger, Node, OptionMatcher} from './index'

export class MultiSelectQuestion extends Node {
    constructor(
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[],
        matchOptions: OptionMatcher){
            super(content, options, triggers, extraInfo, matchOptions)
    }
}