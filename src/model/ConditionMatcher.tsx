import {Option, Trigger} from './index'

export interface ConditionMatcher {
    /*
        matches the condition with the selectedOptions 
        trigger if one exists
        * what do we do when one doesnt exist?
    */
    matchOptions(triggers: Trigger[], selectedOptions: Option[]): void; // TODO change this to return Trigger[]
}

export class MatchAllConditionOptions implements ConditionMatcher {
    matchOptions(triggers: Trigger[], selectedOptions: Option[]): void {
        // TODO not implemented
    }
}

export class MatchSomeConditionOptions implements ConditionMatcher {
    matchOptions(triggers: Trigger[], selectedOptions: Option[]): void{
         // TODO not implemented
    }
}