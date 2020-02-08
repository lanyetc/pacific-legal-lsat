import React from "react";
import TabNav from "../../../../components/TabNav/TabNav";
import Overview from "./Overview";
import QuestionRepo from "./QuestionRepo" 
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
    
    return (
        <div className="result-detail-container">
            <TabNav 
            tabList = {[
                {title: subModule[0].name, tabContent: <Overview />},
                {title: subModule[1].name, tabContent: <QuestionRepo resultList="1"/>},
                {title: subModule[2].name, tabContent: <QuestionRepo resultList="2"/>},
                {title: subModule[3].name, tabContent: <QuestionRepo resultList="3"/>},
                {title: subModule[4].name, tabContent: <QuestionRepo resultList="4"/>},
                {title: subModule[5].name, tabContent: <QuestionRepo resultList="5"/>},
                {title: subModule[6].name, tabContent: <QuestionRepo resultList="6"/>}
            ]}
            ></TabNav>
      </div>
    );
}
