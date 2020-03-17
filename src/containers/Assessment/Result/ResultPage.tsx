import React from "react";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLink";
import ResultDetail from "./Detail/ResultDetail";
import { ResultContextConsumer } from "../../../data/context";
import "./ResultStyle.css";
import banrdIcon from "../../../Assets/img/botavator.svg";


export default function ResultPage() {
    return (
        <div className="full-screen-container white result-page">
            <Header
                brand={banrdIcon}
                brandName = "LSALT 2.0 | "
                toolTitle=" Legal Compliance Self Assessment"
                fixed
                color="white"
                rightLinks={<HeaderLinks />}
                absolute

            />
            <div className="main-container">
               <div className="result-title-bar">
                   <span>Review Results for Privacy Policy and Confidentiality Module </span>
               </div>
                <ResultContextConsumer>
                    {({ context }) => (
                        <ResultDetail context={context}></ResultDetail>
                    )}
                </ResultContextConsumer>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
