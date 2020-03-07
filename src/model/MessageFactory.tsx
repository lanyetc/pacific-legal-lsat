
import {Option, SingleSelectQuestion, MultiSelectQuestion, AutoPlayMessage, MessageType, Message, Trigger, MatchFullResponse, MatchPartialResponse} from './index'
import {MessageData} from './Message'
import {TriggerFactory} from './Trigger'
import {OptionFactory} from './Option'
import { ResponseMatcher } from './ResponseMatcher';

export class MessageFactory {
    static ok(){
        console.log("ok");
    }
    static createMessageFromData(data: MessageData): Message|never {
        let { id, type, content, extraInfo } = data 
        const triggers: Trigger[] = TriggerFactory.createTriggersFromData(data.triggers);
        const defaultTrigger:Trigger = TriggerFactory.createTriggerFromData(data.defaultTrigger);
        const options: Option[] = OptionFactory.createOptionsFromData(data.options)
        if (type == MessageType.singleSelect){
            const matcher: ResponseMatcher = new MatchPartialResponse();
            return new SingleSelectQuestion(
                matcher, id, content, options, triggers, defaultTrigger, extraInfo
            )
        }
        else if (type == MessageType.multiSelect){
            const matcher: ResponseMatcher = new MatchFullResponse();
            return new MultiSelectQuestion(
                matcher, id, content, options, triggers, defaultTrigger, extraInfo
            )
        } else if (type == MessageType.autoPlayMessage){
            // Question: do we need new matcher type for auto-play message?
            // since its triggers should be empty can directly return the defaultTrigger
            // THINK: how to automatically display next message of an auto-display message?
            const matcher: ResponseMatcher = new MatchPartialResponse();
            return new AutoPlayMessage(
                matcher, id, content, options, triggers, defaultTrigger, extraInfo
            )
        }
        throw new Error();       
    }
}
