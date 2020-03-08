import { ResponseItem } from "../ResponseItem";
import { ResponsePath } from "../ResponsePath";
import { ResponseMatcher, MatchPartialResponse, MatchFullResponse } from "../ResponseMatcher";

test('Match Partial Response', () => {
    const newResponseItem = new ResponseItem(1, [100]);
    const responsePath = new ResponsePath();
    responsePath.addResponseItem(newResponseItem);
    const expectedTrueResponseItem = new ResponseItem(1, [100]);
    const expectedFalseResponseItem = new ResponseItem(1, [101]);
    const matcher: ResponseMatcher = new MatchPartialResponse();
    expect(matcher.matchOptions(expectedTrueResponseItem, responsePath)).toBe(true);
    expect(matcher.matchOptions(expectedFalseResponseItem, responsePath)).toBe(false);
})

test('Match Full Response', () => {
    const responsePath = new ResponsePath();
    responsePath.addResponseItem(new ResponseItem(1, [100, 101]));
    const expectedFullResponseItem = new ResponseItem(1, [100, 101]);
    const expectedPartResponseItem = new ResponseItem(1, [101]);
    const expectedMoreResponseItem = new ResponseItem(1, [101, 100, 102]);
    const matcher: ResponseMatcher = new MatchFullResponse();
    expect(matcher.matchOptions(expectedFullResponseItem, responsePath)).toBe(true);
    expect(matcher.matchOptions(expectedPartResponseItem, responsePath)).toBe(false);
    expect(matcher.matchOptions(expectedMoreResponseItem, responsePath)).toBe(false);
})