import React from "react";
import TabNav from "../../../../components/TabNav/TabNav";
import Overview from "./Overview";
import QuestionRepo from "./QuestionRepo";
import {getModules} from "../../../../data/data";
export default function ResultDetail(props: any) {
    console.log(props.context);
    const survey = getModules();
    const { context } = props;

    const tabList = getTabList();
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
        if (context.modules) {
            Object.keys(context.modules).forEach((key:any) => {
                tabList.push({
                    title: context.modules[key].name, tabContent: <QuestionRepo questionList={survey[key].nodes}  resultList={context.modules[key].results}/>
                })
            })
        }
        return tabList;
    }
}
