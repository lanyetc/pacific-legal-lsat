import React from "react";
import TabNav from "../../../../components/TabNav/TabNav";
import Overview from "./Overview";
import QuestionRepo from "./QuestionRepo";
import { getModules, getTopModules, getSurvey } from "../../../../data/data";
import { Trigger, Message } from "../../../../model";
import { Result } from "../../../../data/context";

export default function ResultDetail(props: any) {
    const { moduleResults } = props;
    const survey = getSurvey();
    const modules = getModules();
    const todos = getTodos()
    const reminders = getReminders()

    const tabList = getTabList();



    return (
        <div className="result-detail-container">
            <TabNav
                tabList={tabList}
            ></TabNav>
        </div>
    );

    function getTabList() { // dont include a tab that doesn't have any results
        let tabList: any = [];
        tabList.push({
            title: "OUTCOME", tabContent: <Overview todos={todos} reminders={reminders} />
        })
        if (moduleResults) {
            Object.keys(moduleResults).forEach((key: any) => {
                const resultList = getResultsByModuleId(key);
                if(resultList.length > 0) {
                    tabList.push({
                        title: moduleResults[key].name, tabContent: <QuestionRepo questionList={modules[key].nodes} resultList={getResultsByModuleId(key)} />
                    })
                }
            })
        }
        return tabList;
    }

    function getTodos() { // TODO move this into the context.. also we duplicate this code everywhere.. should simplify it.
        return getResultByKey('todo')
    }

    function getReminders() {
        return getResultByKey('reminder')
    }

    function getResultByKey(key: string) {
        const mrIndices = Object.keys(moduleResults)
        console.log("module indices: " + mrIndices)
        let allResults: Array<Result> = []
        for (let index in mrIndices) {
            const moduleResult = moduleResults[mrIndices[index]]
            moduleResult.results
                .forEach((result: Result) => { // TODO fix naming.. question/message, question
                    const question: Message = survey[result.questionId]
                    let trigger: any = question.findTriggerById(result.triggerId); // TODO supposed to be a trigger type, but findTriggerById might return undefined.
                    if (trigger && trigger[key]) {
                        allResults.push(trigger[key])
                    }
                })
        }
        return allResults;
    }



    function getResultsByModuleId(moduleId: number) {
        const moduleResult = moduleResults[moduleId]  // TODO fix naming.. question/message, questionId
        return moduleResult.results.map((result: Result) => {
            const question: Message = survey[result.questionId]
            let trigger: any = question.findTriggerById(result.triggerId);
            if (trigger && trigger.resultReport) {
                result.repo = trigger.resultReport
                return result
            }
        }).filter(Boolean)
    }
}
