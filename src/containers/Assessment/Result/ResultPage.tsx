import React from "react";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLink";
import "./ResultStyle.css";
import banrdIcon from "../../../Assets/img/bot_ic_70px-04.svg";
import { useParams } from "react-router-dom";
import { Button, Tooltip } from "@material-ui/core";
import TabNav from "../../../components/TabNav/TabNav";
import TodoCompnent from "./Detail/TodoComponent";
import { Result } from "../../../data/context";
import { Message } from "../../../model";
import { getSurvey, getModules } from "../../../data/data";
import QuestionRepo from "./Detail/QuestionRepo";




export default function ResultPage() {
    const [open, setOpen] = React.useState(false);
    let { results } = useParams();
    const encoded_result_string: any = results
    let decodedModuleResults: any = null;
    const survey = getSurvey();
    const modules = getModules();


    try {
        let { moduleResults } = JSON.parse(decodeURIComponent(atob(encoded_result_string)))
        decodedModuleResults = moduleResults
        console.log("moduleResults: " + JSON.stringify(moduleResults))
    } catch (e) {
        console.log("there was an error: " + e)
    }

    function handleShareClick(event: any) {
        setOpen(true);
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = window.location.href
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy)
        console.log("copied to clipboard")
    }

    const handleTooltipClose = () => {
        setOpen(false);
    };

    function getResultByKey(key: string) {
        const mrIndices = Object.keys(decodedModuleResults)
        console.log("module indices: " + mrIndices)
        let allResults: Array<Result> = []
        for (let index in mrIndices) {
            const moduleResult = decodedModuleResults[mrIndices[index]]
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
        const moduleResult = decodedModuleResults[moduleId]  // TODO fix naming.. question/message, questionId
        return moduleResult.results.map((result: Result) => {
            const question: Message = survey[result.questionId]
            let trigger: any = question.findTriggerById(result.triggerId);
            if (trigger && trigger.resultReport) {
                result.repo = trigger.resultReport
                return result
            }
        }).filter(Boolean)
    }

    function getTabList() {
        let tabList: any = [];
        tabList.push({
            title: "OUTCOME", 
            tabContent:overviewContainer
        })
        if (decodedModuleResults) {
            Object.keys(decodedModuleResults).forEach((key: any) => {
                const resultList = getResultsByModuleId(key);
                if(resultList.length > 0) {
                    tabList.push({
                        title: decodedModuleResults[key].name, tabContent: <QuestionRepo questionList={modules[key].nodes} resultList={getResultsByModuleId(key)} />
                    })
                }
            })
        }
        return tabList;
    }

    const overviewContainer = <div className="overview-container">
        <TodoCompnent priority="donow" title="DO NOW" todoList={getResultByKey("todo")}/>
        <TodoCompnent priority="dolater" title="DO LATER" todoList={getResultByKey("reminder")}/>
    </div>

    
    return (
        <div className="full-screen-container white result-page">
            <Header
                brand={banrdIcon}
                brandName="LSALT 2.0 | "
                toolTitle=" Legal Compliance Self Assessment"
                fixed
                color="white"
                rightLinks={<HeaderLinks />}
                absolute
            />
            <div className="main-container">
                <div className="result-title-bar">
                    <span>Review Results for Privacy Policy and Confidentiality Module</span>
                    <span className="btn-group share-btn">
                        <Tooltip
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            // disableHoverListener
                            disableTouchListener
                            title="Link Copied to Clipboard!"
                        >
                            <Button variant="contained" size="small" onClick={handleShareClick} >Share Link!</Button>
                        </Tooltip>
                    </span>
                </div>
                <TabNav tabList={getTabList()}></TabNav>
            </div>
        </div>
    );

}
