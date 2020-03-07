import {Option, Trigger, Message, ResponseMatcher} from '.'

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