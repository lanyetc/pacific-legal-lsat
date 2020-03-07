
import {Option, SingleSelectQuestion, MultiSelectQuestion, AutoPlayMessage, NodeType, Node, Trigger} from './index'
import {NodeData} from './Node'
import {TriggerFactory} from './Trigger'
import {OptionFactory} from './Option'

export class NodeFactory {
    static ok(){
        console.log("ok");
    }
    static createNodeFromData(data: NodeData): Node|never {
        let { id, type, content, extraInfo } = data 
        const triggers: Trigger[] = TriggerFactory.creatTriggersFromData(data.triggers);
        const options: Option[] = OptionFactory.createOptionsFromData(data.options)
        if (type == NodeType.singleSelect){
            return new SingleSelectQuestion(
                id, content, options, triggers, extraInfo
            )
        }
        else if (type == NodeType.multiSelect){
            return new MultiSelectQuestion(
                id, content, options, triggers, extraInfo
            )
        } else if (type == NodeType.autoPlayMessage){
            return new AutoPlayMessage(
                id, content, options, triggers, extraInfo
            )
        }
        throw new Error();       
    }
}
