import React from "react";
import Artboard1 from "../../Assets/img/Artboard1.svg"
import Artboard2 from "../../Assets/img/Artboard2.svg"
import Artboard3 from "../../Assets/img/Artboard3.svg"

import { Breadcrumbs, Link, Button } from "@material-ui/core";
import './LandingPageStyle.css';
export default function LandHowWedo() {
    return (
        <div className="Howwedoitout">
            <h1>How we do it</h1>
            <div className="HowWeDoIt">
                <div className="how123">
                    <img src={Artboard1}></img>
                    <h1>Take the 20 minutes survey</h1>
                </div>
                <div className="how123">
                    <img src={Artboard2}></img>
                    <h1>Generate a compliance to-do list</h1>
                </div>
                <div className="how123">
                    <img src={Artboard3}></img>
                    <h1>Share results with your team</h1>
                </div>
            </div>
        </div>
    );
}
