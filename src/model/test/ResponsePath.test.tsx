import { ResponseItem } from "../ResponseItem";
import { ResponsePath } from "../ResponsePath";



test('Add ResponseItem to ResponsePath', () => {
    const newResponseItem = new ResponseItem(1, [100]);
    expect(newResponseItem).toEqual({_messageId: 1, _optionIds: [100]});
    const newResponsePath = new ResponsePath();
    expect(newResponsePath).toEqual({_responseList: [], _responseMap: {}});
    newResponsePath.addResponseItem(newResponseItem);
    expect(newResponsePath).toEqual(
        {
            _responseList: [{_messageId: 1, _optionIds: [100]}],
            _responseMap: {1: {_messageId: 1, _optionIds: [100]}}
        }
    )
});

test('find response option in responseItem', () => {
    const responseItem = new ResponseItem(1, [100]);
    expect(responseItem.findResponseOption(100)).toBe(true);
    expect(responseItem.findResponseOption(101)).toBe(false);
})

test('find message response in responsePath', () => {
    const newResponseItem = new ResponseItem(1, [100]);
    const newResponsePath = new ResponsePath();
    newResponsePath.addResponseItem(newResponseItem);
    expect(newResponsePath.findMessageResponse(1, 100)).toBe(true);
    expect(newResponsePath.findMessageResponse(1, 101)).toBe(false);
    expect(newResponsePath.findMessageResponse(2, 100)).toBe(false);
})
