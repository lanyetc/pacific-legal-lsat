import { Interface } from "readline";

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

    public addResponseItem(item: any){

    }
}

export interface ResponseItemData {
    messageId: number;
    optionIds: number[]
}

export class ResponseItemFactory {
    static createResponseItemFromData (responseItemData: ResponseItemData) {
        let {messageId, optionIds} = responseItemData;
        return new ResponseItem(messageId, optionIds);
    }
}