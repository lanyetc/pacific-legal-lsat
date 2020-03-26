import React from "react";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLink";
import "./ResultStyle.css";
import banrdIcon from "../../../Assets/img/bot_ic_70px-04.svg";
import { useParams, Route, withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Tooltip, Tabs, Tab } from "@material-ui/core";
import TabNav from "../../../components/TabNav/TabNav";
import TodoCompnent from "./Detail/TodoComponent";
import { Result } from "../../../data/context";
import { Message } from "../../../model";
import { getSurvey, getModules } from "../../../data/data";
import QuestionRepo from "./Detail/QuestionRepo";
import Scroll from "react-scroll";

interface IState {
    open: boolean,
    value: any
}

class ResultPage extends React.Component<RouteComponentProps>{
    // results: any;
    survey: any;
    modules: any;
    state: IState;
    decodedModuleResults: any;
    scroller: any;
    // const [open, setOpen] = React.useState(false);
    // let { results } = useParams();
    // const encoded_result_string: any = results
    // let decodedModuleResults: any = null;
    // const survey = getSurvey();
    // const modules = getModules();
    constructor(props: any) {
        super(props);
        let {results} = props.match.params;
        const encoded_result_string: any = results;
        try {
            let { moduleResults } = JSON.parse(decodeURIComponent(atob(encoded_result_string)))
            this.decodedModuleResults = moduleResults
            console.log("moduleResults: " + JSON.stringify(moduleResults))
        } catch (e) {
            console.log("there was an error: " + e)
        }
        this.survey = getSurvey();
        this.modules = getModules();
        this.state = {
            open: false,
            value: 0
        }
        this.scroller = Scroll.scroller;
        this.handleShareClick = this.handleShareClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMoreInfo = this.handleMoreInfo.bind(this);
    }
    // try {
    //     let { moduleResults } = JSON.parse(decodeURIComponent(atob(encoded_result_string)))
    //     decodedModuleResults = moduleResults
    //     console.log("moduleResults: " + JSON.stringify(moduleResults))
    // } catch (e) {
    //     console.log("there was an error: " + e)
    // }
    public setOpen (openState:boolean) {
        this.setState((state: IState) => {
            return {
                open: openState
            }
        });
    }
    public setValue (newValue:any) {
        this.setState((state: IState) => {
            return {
                value: newValue
            }
        });
    }
    public handleShareClick(event: any) {
        this.setOpen(true);
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = window.location.href
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy)
        console.log("copied to clipboard")
    }

    public handleTooltipClose = () => {
        this.setOpen(false);
    };

    public getResultByKey(key: string) {
        const mrIndices = Object.keys(this.decodedModuleResults)
        console.log("module indices: " + mrIndices)
        let allResults: Array<Result> = []
        for (let index in mrIndices) {
            const moduleResult = this.decodedModuleResults[mrIndices[index]]
            moduleResult.results
                .forEach((result: Result) => { // TODO fix naming.. question/message, question
                    const question: Message = this.survey[result.questionId]
                    let trigger: any = question.findTriggerById(result.triggerId); // TODO supposed to be a trigger type, but findTriggerById might return undefined.
                    if (trigger && trigger[key]) {
                        const item:any = {
                            tabValue: Number(index)+1,
                            questionId: result.questionId,
                            content: trigger[key]
                        }
                        allResults.push(item)
                    }
                })
        }
        return allResults;
    }

    public scrollToQuestion(id: string) {
        try {
            // let chatbotScroller = document.getElementById('chatbot-scroller') as HTMLElement;
            // chatbotScroller.scrollTop = chatbotScroller.scrollHeight;
            const scrollToElement = id;
            let focusItem = document.getElementById(scrollToElement) as HTMLElement;
            focusItem.classList.add("grey");
            this.scroller.scrollTo(scrollToElement, {
                duration: 600,
                delay: 30,
                smooth: true,
                containerId: 'tab-content',
                offset: -100, // Scrolls to element + 50 pixels down the page
            });
        } catch (exception) {
            console.log("scroll exception");
        }
    }

    public getResultsByModuleId(moduleId: number) {
        const moduleResult = this.decodedModuleResults[moduleId]  // TODO fix naming.. question/message, questionId
        return moduleResult.results.map((result: Result) => {
            const question: Message = this.survey[result.questionId]
            let trigger: any = question.findTriggerById(result.triggerId);
            if (trigger && trigger.resultReport) {
                result.repo = trigger.resultReport
                return result
            }
        }).filter(Boolean)
    }
    // const [value, setValue] = React.useState(0);
    public handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        this.setValue(newValue);
    };
    public handleMoreInfo (newValue:number, questionId:number) {
        this.setState((state: IState) => {
            return {
                value: newValue
            }
        }, () => {
            const repoItemId = "repo-item-" + questionId
            this.scrollToQuestion(repoItemId);
        })
    }
    public getTabList() {
        let tabList: any = [];
        tabList.push({
            resultLength: 1,
            title: "OUTCOME",
            tabContent: this.getOverviewContainer()
        })
        if (this.decodedModuleResults) {
            Object.keys(this.decodedModuleResults).forEach((key: any) => {
                const resultList = this.getResultsByModuleId(key);
                if (resultList.length >= 0) {
                    // const tabContentComponent = <QuestionRepo questionList={modules[key].nodes} resultList={getResultsByModuleId(key)} />;
                    // const tabName = decodedModuleResults[key].name
                    tabList.push({
                        resultLength: resultList.length, title: this.decodedModuleResults[key].name, tabContent: <QuestionRepo questionList={this.modules[key].nodes} resultList={this.getResultsByModuleId(key)} />
                    })
                }
            })
        }
        return tabList;
    }
    public getOverviewContainer() {
        return (
            <div className="overview-container">
                <TodoCompnent handleMoreInfo={this.handleMoreInfo} priority="donow" title="DO NOW" todoList={this.getResultByKey("todo")} />
                <TodoCompnent handleMoreInfo={this.handleMoreInfo} priority="dolater" title="DO LATER" todoList={this.getResultByKey("reminder")} />
            </div>
        )
    }
    render() {
        const tabList = this.getTabList();
        const tabs = tabList.map((tab: any, i: any) => {
            if (tab.title) {
                return <Tab style={{display: (tab.resultLength > 0) ? "inline-flex" : "none"}} label={tab.title} key={i} className="tab" />
            }
            return true; // FIXME adding this for now to quiet the compiler warnings
        });
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
                                onClose={this.handleTooltipClose}
                                open={this.state.open}
                                disableFocusListener
                                // disableHoverListener
                                disableTouchListener
                                title="Link Copied to Clipboard!"
                            >
                                <Button variant="contained" size="small" onClick={this.handleShareClick} >Share Link!</Button>
                            </Tooltip>
                        </span>
                    </div>
                    <Tabs
                        value={this.state.value} onChange={this.handleChange}
                        aria-label="simple tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
                        className="tab-nav">
                        {tabs}
                    </Tabs>
                    {tabList.map((prop: any, key: any) => {
                        if (key === this.state.value) {
                            return (<div key={key} className="tab-content container with-bottom-padding" id="tab-content">
                                {prop.tabContent}
                            </div>);
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    
    }
    
}

export default withRouter(ResultPage)