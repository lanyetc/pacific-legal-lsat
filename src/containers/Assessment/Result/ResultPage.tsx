import React from "react";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLink";
import ResultDetail from "./Detail/ResultDetail";
import "./ResultStyle.css";
import banrdIcon from "../../../Assets/img/botavator.svg";
import { useParams } from "react-router-dom";

export default function ResultPage() {
    let { results } = useParams();
    const encoded_result_string: any = results
    let the_context: any = null;

    try{
        let {context} = JSON.parse(decodeURIComponent(atob(encoded_result_string)))
        the_context = context
    }catch(e){
        console.log("there was an error: " + e)
    }
    

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
                    <span>Review Results for Privacy Policy and Confidentiality Module </span>
                </div>
                <ResultDetail context={the_context}></ResultDetail>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
