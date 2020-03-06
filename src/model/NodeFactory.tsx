
import {SingleSelectQuestion, MultiSelectQuestion, AutoPlayMessage, NodeType, Node, Trigger} from './index'
import {NodeData} from './Node'
import {TriggerFactory} from './Trigger'

export class NodeFactory {
    static createNodeFromData(data: NodeData): Node|never {
        let { type, content, optionData, triggerData, extraInfo } = data 
        const triggers: Trigger[] = TriggerFactory.creatTriggersFromData(triggerData);
        // const options: Option[] = OptionFactory.createOptionsFromData(optionData)
        if (type == NodeType.singleSelect){
            // return new SingleSelectQuestion(
            //     content, options, triggers, extraInfo
            // )
        }
        else if (type == NodeType.multiSelect){
            // return new MultiSelectQuestion(
            //     content, options, triggers, extraInfo
            // )
        } else if (type == NodeType.autoPlayMessage){
            // return new AutoPlayMessage(
            //     content, options, triggers, extraInfo
            // )
        }
        throw new Error();       
    }
}
