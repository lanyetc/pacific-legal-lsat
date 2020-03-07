import { ResponseItem } from "./ResponseItem";

export class ResponsePath {
    constructor(private _responseList: ResponseItem[], 
        private _responseMap: {[key: number]: ResponseItem}){ // key is messageId
        }
    public findMessageResponse(messageId: number, optionId: number) {
        // TODO: implement this
    }
}