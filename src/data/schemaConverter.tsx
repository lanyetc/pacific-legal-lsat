
import { Item, Result } from './context';

export function schemaConverter(moduleData: any){
    console.log("generating data")
    let triggerIdCounter = 110;

    moduleData.forEach((question: any) => {
        question.defaultTriggerId = -1
    
        question.triggers.forEach((trigger: any )=> {
            // add id to all triggers
            trigger.id = triggerIdCounter++;
    
            // add a trigger action and remove excess fields (nextquestion or nextModule, and trigger.type)
            trigger.action = {}
            if (trigger.type == "next") {// to next question
                trigger.action.type = "next"
                trigger.action.nextQuestionId = trigger.nextQuestionId;
                delete trigger.nextQuestionId;
            }
            else if (trigger.type == "skip") { // to next module{
                trigger.action.type = "nextModule"
                trigger.action.nextQuestionId = trigger.nextQuestionId;
                trigger.action.nextModuleId = trigger.nextModuleId;
                delete trigger.nextQuestionId;
                delete trigger.nextModuleId;
            }
            else if (trigger.type == "default") // always goes to next question
            {
                trigger.action.type = "next"
                trigger.action.nextQuestionId = trigger.nextQuestionId;
                delete trigger.nextQuestionId;
                question.defaultTriggerId = trigger.id;
            }
            else{
                console.log("there's a problem with the trigger type")
            }
            delete trigger.type
    
    
            // change expected responses.
            let optionIds:any[] = []
            let messageId;
            trigger.expectedResponses.forEach((expectedResponse: any) => {
                messageId = expectedResponse.questionId;
                optionIds.push(expectedResponse.optionId);
            })
            trigger.expectedResponses = {messageId: messageId, optionIds: optionIds}
    
    
            // change result into a string and delete trigger.result
            if(trigger.result){
                trigger.resultReport = trigger.result.repo;
                delete trigger.result;
            }else {
                console.log("question: " + question.id + ": trigger doesn't have a result");
            }
            
    
            // change response to reply
            if(trigger.response){
                if(trigger.response.length > 1){
                    console.log("Issue: multi message reply in trigger.. keeping first one.")
                }
                trigger.reply = trigger.response[0]
                delete trigger.response
            }
            
            // todos and reminders to todo and reminder
            if(trigger.todos){
                trigger.todo = trigger.todos[0].title
                delete trigger.todos
            }
            if(trigger.reminders){
                trigger.reminder = trigger.reminders[0].title
                delete trigger.reminders;
            }
    
        })
    
        // add defaultTriggerId to Question
        if(question.defaultTriggerId < 0){ 
           let lastTriggerIndex = question.triggers.length - 1
           question.defaultTriggerId = question.triggers[lastTriggerIndex].id;
        }
    
    });

    return moduleData
}