import React from "react";
import botavator from "../../Assets/img/botavator.png"
import { Breadcrumbs, Link, Button } from "@material-ui/core";

import './LandingPageStyle.css';
export default function LandContact() {
    return (
        <div className="LandContact">
            <img src={botavator}></img>
            <div className="leftcontact"><h1>Contact Us |</h1>
            <span>Looking for more information? Visit <span className="underline">lawfornonprofits.ca</span></span></div>
            <div className="rightcontact"><h1>Disclaimer |</h1><span>The materials and information provided on this site are for information purposes only. They do NOT constitute legal advice or other professional advice. We may answer general questions submitted to us through this site but no solicitor-client relationship will arise between you and Law for Non Profits with regard to any questions submitted or answered, unless explicitly stated otherwise.</span></div>
        </div>
    );
}