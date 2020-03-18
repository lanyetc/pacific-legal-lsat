import React from "react";
import TabNav from "../../../../components/TabNav/TabNav";
import Overview from "./Overview";
import QuestionRepo from "./QuestionRepo";
import {getModules} from "../../../../data/data";

export default function ResultDetail(props: any) {
    const survey = getModules();
    const tabList = getTabList();
    const { context } = props;

    return (
        <div className="result-detail-container">
            <TabNav 
            tabList = {tabList}
            ></TabNav>
        </div>
    );

    function getTabList() {
        let tabList: any = [];
        tabList.push({
            title: "OUTCOME", tabContent: <Overview context={context}/>
        })
        if (context.moduleResults) {
            Object.keys(context.moduleResults).forEach((key:any) => {
                tabList.push({
                    title: context.moduleResults[key].name, tabContent: <QuestionRepo questionList={survey[key].nodes}  resultList={context.moduleResults[key].results}/>
                })
            })
        }
        return tabList;
    }
}
