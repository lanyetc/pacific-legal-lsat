import {Option, Trigger, Message} from './index'
import { ResponseMatcher } from './ResponseMatcher'

export class SingleSelectQuestion extends Message{
    constructor(
        responseMatcher: ResponseMatcher,
        id: number,
        content: string, 
        options: Option[], 
        triggers: Trigger[], 
        defualtTrigger: Trigger,
        extraInfo: any){
            super(responseMatcher, id, content, options, triggers, defualtTrigger, extraInfo)
    }
}