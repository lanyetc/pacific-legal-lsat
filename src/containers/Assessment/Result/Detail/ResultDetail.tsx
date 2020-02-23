import React from "react";
import TabNav from "../../../../components/TabNav/TabNav";
import Overview from "./Overview";
import QuestionRepo from "./QuestionRepo";
import {getContext} from "../../../../data/context";
import {getModules} from "../../../../data/data";
export default function ResultDetail(props: any) {
    let subModule = [
        {name: "OUTCOME"},
        {name: "Privacy Policy"},
        {name: "Personal Info"},
        {name: "Confidentiality"},
        {name: "Privacy Officer"},
        {name: "Requests"},
        {name: "Antispam"}
    ]
    let survey = getModules();
    console.log(props.context);
    // const context = getContext();
    const {context} = props;
    console.log(context.modules[1]);
    return (
        <div className="result-detail-container">
            <TabNav 
            tabList = {[
                {title: subModule[0].name, tabContent: <Overview context={context.modules[1]}/>},
                {title: subModule[1].name, tabContent: <QuestionRepo questionList={survey[1].nodes}  resultList={context.modules[1].results}/>},
                {title: subModule[2].name, tabContent: <QuestionRepo questionList={survey[2].nodes} resultList={context.modules[2].results}/>},
                {title: subModule[3].name, tabContent: <QuestionRepo questionList={survey[1].nodes} resultList={context.modules[1].results}/>},
                {title: subModule[4].name, tabContent: <QuestionRepo questionList={survey[1].nodes} resultList={context.modules[1].results}/>},
                {title: subModule[5].name, tabContent: <QuestionRepo questionList={survey[1].nodes} resultList={context.modules[1].results}/>},
                {title: subModule[6].name, tabContent: <QuestionRepo questionList={survey[1].nodes} resultList={context.modules[1].results}/>}
            ]}
            ></TabNav>
      </div>
    );
}
