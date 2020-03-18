import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import HeaderLinks from "../../../components/Header/HeaderLink";
import ResultDetail from "./Detail/ResultDetail";
import "./ResultStyle.css";
import banrdIcon from "../../../Assets/img/botavator.svg";
import { useParams } from "react-router-dom";
import { Button, Tooltip } from "@material-ui/core";


export default function ResultPage() {
    const [open, setOpen] = React.useState(false);

    let { results } = useParams();
    const encoded_result_string: any = results
    let the_context: any = null;

    try {
        let { context } = JSON.parse(decodeURIComponent(atob(encoded_result_string)))
        the_context = context
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
                <ResultDetail context={the_context}></ResultDetail>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
