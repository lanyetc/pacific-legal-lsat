import React from "react";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLink";
import ResultDetail from "./Detail/ResultDetail";
import { ResultContextConsumer } from "../../../data/context";
import "./ResultStyle.css";
import banrdIcon from "../../../assets/img/botavator.svg";


export default function ResultPage() {
    return (
        <div className="full-screen-container white result-page">
            <Header
                brand={banrdIcon}
                brandName = "LSALT 2.0 | "
                toolTitle="Non-profit Self Assessment"
                fixed
                color="white"
                rightLinks={<HeaderLinks />}
                absolute

            />
            <div className="main-container">
               
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
