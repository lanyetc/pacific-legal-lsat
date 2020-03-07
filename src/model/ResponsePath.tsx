import { ResponseItem } from "./ResponseItem";

export class ResponsePath {
    private _responseList: ResponseItem[]
    private _responseMap: { [key: number]: ResponseItem } // key is messageId

    constructor() {
        this._responseList = []
        this._responseMap = {}
    }

    public findMessageResponse(messageId: number, optionId: number) {
        // TODO: implement this
    }
}