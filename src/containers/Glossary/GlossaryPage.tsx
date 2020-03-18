import React from "react";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLink";
import "../Assessment/Result/ResultStyle.css";
import "./GlossaryStyle.css";
import banrdIcon from "../../Assets/img/botavator.svg";
import { Typography, List, ListItem } from "@material-ui/core";
import { glossaryContent } from "../../data/glossaryContent";
import { withRouter } from "react-router-dom";


let GlossaryPage:any =  function () {
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
                    <span>GLOSSARY</span>
                </div>
               <div className="glossary-container">
               <div className="terms-container">
                    {glossaryContent.map((item: any, key: any) => {
                        return (
                            <div className="repo-item" key={key}>

                                <div className="question-container">
                                    <Typography variant="body2" component="p" className="title" gutterBottom>
                                        {item.name}
                                    </Typography>
                                </div>
                                <div className="info-container">
                                    <Typography variant="body2" component="p" className="title" gutterBottom>
                                        {item.explanation}
                                    </Typography>
                                    {item.list && <div className="option-container">
                                        <List>
                                            {item.list.map((text: string, key: any) => {
                                                return (<ListItem key={key}>
                                                    <div className="reminder-item-bullet" />
                                                    <span className="item-label" >{text}</span>
                                                </ListItem>)
                                            })}
                                        </List>
                                    </div>}
                                    <Typography variant="body2" component="p" className="link" >
                                        {/* <Link>Learn more</Link> */}
                                    </Typography>
                                </div>
                            </div>
                        )
                    })}
                </div>
               </div>
            </div>
        </div>
    );
}

export default GlossaryPage = withRouter(GlossaryPage)