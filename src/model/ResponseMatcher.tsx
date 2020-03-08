import { ResponsePath } from "./ResponsePath";
import { ResponseItem } from "./ResponseItem";

export interface ResponseMatcher {
    /*
        matches the condition with the selectedOptions 
        trigger if one exists
        * what do we do when one doesnt exist?
    */
    matchOptions(expectedResponse: ResponseItem, responsePath: ResponsePath): boolean;
}

export class MatchFullResponse implements ResponseMatcher {
    matchOptions(expectedResponse: ResponseItem, responsePath: ResponsePath): boolean {
        const messageId = expectedResponse.messageId;
        for (let optionId of expectedResponse.optionIds) {
            let ifFoundResponse:boolean = responsePath.findMessageResponse(messageId, optionId);
            if (!ifFoundResponse) { // return false if one response can't be found
                return false;
            }
         }
         // also loop through options in responsePath to make sure exact match
         for (let optionId of responsePath.getMessageOptions(messageId)) {
            let ifFoundResponse:boolean = expectedResponse.findResponseOption(optionId);
            if (!ifFoundResponse) {
                return false;
            }
         }
        return true;
    }
}

export class MatchPartialResponse implements ResponseMatcher {
    matchOptions(expectedResponse: ResponseItem, responsePath: ResponsePath): boolean{
         const messageId = expectedResponse.messageId;
         for (let optionId of expectedResponse.optionIds) {
            let ifFoundResponse:boolean = responsePath.findMessageResponse(messageId, optionId);
            if (ifFoundResponse) { // find at leat one expected response
                return true;
            }
         }
         return false; // failed to find any expected response
    }
}