export class Option {
    constructor(private _id: number,
        private _label: string) {
    }

    get id(){
        return this._id
    }

    get label(){
        return this._label
    }
}

export interface OptionData {
    id: number
    label: string;
}

export class OptionFactory {
    static createOptionsFromData (optionDatas: OptionData[]) {
        let options: Option[] = [];
        optionDatas.forEach(data => {
            let { id, label} = data;
            options.push(new Option(id, label));
        });
        return options;
    }
}

