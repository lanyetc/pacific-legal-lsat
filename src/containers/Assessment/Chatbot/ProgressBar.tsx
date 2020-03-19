import React from "react";
import { getTopModules, getModules } from "../../../data/data";
import { List, ListItem } from "@material-ui/core";

export default function ProgressBar(props:any) {
    const topModules = getTopModules();
    const subModules = getModules();
    const currentTopModule: any = topModules[0]; // default top module: Privacy Policy
    const resultContext:any = props.context;
    return (

        <div className="progress-container">
            <div className="left-module-bar">
                <List className="sub-module-list">
                    {topModules.map((topModule, key: any) => (
                        <ListItem key={key}>
                            <div className="module-link-nav">
                                <span className="module-icon"><img src={topModule.icon} /></span>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
            <div className="right-module-bar">
                <div className="module-title">
                    <span>{currentTopModule.name + " Module"}</span>
                    <span className="title-split-line"><i className="bottom-arrow" /></span>
                </div>
                <div className="sub-module-list">
                    {
                        Object.keys(subModules).map((index, key: any) => (
                            <div key={key} className={(resultContext[index] && +index !== props.currentModuleId) ? "previous-module-bar progress-block" : "progress-block"}>
                                <span className={+index == props.currentModuleId ? "current-module-title sub-module-title" : "sub-module-title"}>{subModules[index].name}</span>
                                <div className="under-bar"  style={{visibility: (resultContext[index] || +index === props.currentModuleId) ? "visible" : "hidden"}}>
                                    <div className="top-bar" id={"sub-module-bar-"+index}></div>
                                </div>
                            </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
