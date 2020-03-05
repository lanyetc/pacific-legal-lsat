import {Option, Node, Trigger, OptionMatcher} from './index'

export class AutoplayMessage extends Node {
    constructor(
        content: string[], 
        options: Option[], 
        triggers: Trigger[], 
        extraInfo: string[],
        matchOptions: OptionMatcher){
            super(content, options, triggers, extraInfo, matchOptions)
    }
}