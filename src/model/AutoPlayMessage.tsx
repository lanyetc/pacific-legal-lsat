import {Option} from './Option'
import {Trigger} from './Trigger'
import {Message} from './Message'
import {ResponseMatcher} from './ResponseMatcher'

export class AutoPlayMessage extends Message{
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