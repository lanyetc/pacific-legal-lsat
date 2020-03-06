import {ConditionMatcher, MatchAllConditionOptions, MatchSomeConditionOptions} from '.'

export enum ConditionMatchType {
    all,
    some
}

export interface ConditionData {
    type: ConditionMatchType
    options: any // TODO change this to the right type!!!
}

export class Condition{
    constructor(public conditionMatcher: ConditionMatcher, 
                private _options: any){ // Change this to the right type too
                }
}


export class ConditionFactory {
    static createConditionFromData(conditionData: ConditionData){
        if(conditionData.type == ConditionMatchType.all){
            const matcher: ConditionMatcher = new MatchAllConditionOptions()
            return new Condition(matcher, conditionData.options)
        } 
        else if(conditionData.type == ConditionMatchType.some){
            const matcher: ConditionMatcher = new MatchSomeConditionOptions()
            return new Condition(matcher, conditionData.options)
        }
    }
}