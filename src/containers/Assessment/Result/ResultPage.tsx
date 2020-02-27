import React from "react";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLink";
import ModuleResult from "./ModuleResult";
import ResultDetail from "./Detail/ResultDetail";
import { ResultContextConsumer } from "../../../data/context";

export default function ResultPage() {
    return (
        <div className="full-screen-container white">
            <Header
                brand="PLEO"
                toolTitle="NPO SELF ASSESSMENT "
                fixed
                color="white"
                rightLinks={<HeaderLinks />}
                absolute

            />
            <div className="main-container">
                <ModuleResult></ModuleResult>
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
