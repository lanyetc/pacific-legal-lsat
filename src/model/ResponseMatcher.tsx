
export interface ResponseMatcher {
    /*
        matches the condition with the selectedOptions 
        trigger if one exists
        * what do we do when one doesnt exist?
    */
    matchOptions(expectedResponse: any, responsePath: any): boolean;
}

export class MatchFullResponse implements ResponseMatcher {
    matchOptions(expectedResponse: any, responsePath: any): boolean {
        // TODO not implemented
        return true;
    }
}

export class MatchPartialResponse implements ResponseMatcher {
    matchOptions(expectedResponse: any, responsePath: any): boolean{
         // TODO not implemented
         return true;
    }
}