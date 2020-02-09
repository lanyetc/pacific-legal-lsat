import React from "react";
import TabNav from "../../../../components/TabNav/TabNav";
import Overview from "./Overview";
import QuestionRepo from "./QuestionRepo";
import {getContext} from "../../../../data/context";
export default function ResultDetail() {
    let subModule = [
        {name: "OUTCOME"},
        {name: "Privacy Policy"},
        {name: "Personal Info"},
        {name: "Confidentiality"},
        {name: "Privacy Officer"},
        {name: "Requests"},
        {name: "Antispam"}
    ] 
    const context = getContext();
    return (
        <div className="result-detail-container">
            <TabNav 
            tabList = {[
                {title: subModule[0].name, tabContent: <Overview context={context}/>},
                {title: subModule[1].name, tabContent: <QuestionRepo resultList={context.results}/>},
                {title: subModule[2].name, tabContent: <QuestionRepo resultList={context.results}/>},
                {title: subModule[3].name, tabContent: <QuestionRepo resultList={context.results}/>},
                {title: subModule[4].name, tabContent: <QuestionRepo resultList={context.results}/>},
                {title: subModule[5].name, tabContent: <QuestionRepo resultList={context.results}/>},
                {title: subModule[6].name, tabContent: <QuestionRepo resultList={context.results}/>}
            ]}
            ></TabNav>
      </div>
    );
}
