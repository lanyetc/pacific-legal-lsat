import {Option, Trigger} from './index'

export interface OptionMatcher {
    /*
        matches the trigger with the selectedOptions 
        trigger if one exists
        * what do we do when one doesnt exist?
    */
    matchOptions(triggers: Trigger[], selectedOptions: Option[]): Trigger;
}

export class MatchAllOptions implements OptionMatcher {
    matchOptions(triggers: Trigger[], selectedOptions: Option[]): Trigger {
        return false; // TODO not implemented
    }
}

export class MatchSomeOptions implements OptionMatcher {
    matchOptions(triggers: Trigger[], selectedOptions: Option[]): Trigger {
        return false; // TODO not implemented
    }
}