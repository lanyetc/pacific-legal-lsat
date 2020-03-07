// ResponseItem: single item in responsePath
export class ResponseItem {
    constructor(private _messageId: number, 
                private _optionIds: number[]){ // store all selected option ids of a message
                }
}

// Question: do we need ResponseFactory?
// ResponseItem is now only generated in chatbot page
// Can just use like this:
// responseItem = new ResponseItem();