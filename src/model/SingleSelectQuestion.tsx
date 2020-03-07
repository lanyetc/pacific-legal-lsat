import {Message} from './Message'
import { ResponseMatcher } from './ResponseMatcher'
import {Option} from './Option'
import {Trigger} from './Trigger'

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