import { ResponseItem } from "./ResponseItem";

export class ResponsePath {
    private _responseList: ResponseItem[]
    private _responseMap: { [key: number]: ResponseItem } // key is messageId

    constructor() {
        this._responseList = []
        this._responseMap = {}
    }

    // getters/setters
    get responseList() {
        return this._responseList;
    }
    get responseMap() {
        return this._responseMap;
    }

    public findMessageResponse(messageId: number, optionId: number) {
        // TODO: implement this
        let isFind:boolean = this.responseMap[messageId] && this.responseMap[messageId].findResponseOption(optionId) ? true : false;
        return isFind;
    }

    public addResponseItem(responseItem: ResponseItem) {
        this.responseList.push(responseItem);
        this.responseMap[responseItem.messageId] = responseItem;
    }
}