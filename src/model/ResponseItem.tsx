// ResponseItem: single item in responsePath
export class ResponseItem {
    constructor(private _messageId: number, 
                private _optionIds: number[]){ // store all selected option ids of a message
                }
    // getters/setters
    get messageId() {
        return this._messageId;
    }
    get optionIds() {
        return this._optionIds;
    }
    public findResponseOption(optionId: number):boolean {
        if (this.optionIds.indexOf(optionId) >= 0) {
            return true; // find matched optionid
        }
        return false;
    }
}


// Question: do we need ResponseFactory?
// ResponseItem is now only generated in chatbot page
// Can just use like this:
// responseItem = new ResponseItem();