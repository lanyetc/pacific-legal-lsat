import React from "react";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLink";
import ResultDetail from "../Assessment/Result/Detail/ResultDetail";
import { ResultContextConsumer } from "../../data/context";
import "./LandingPageStyle.css";
import "./illustration anim.svg"
import { duration } from "@material-ui/core";
import Vivus from "vivus";

export default function LandingPage() {
    let hi = new Vivus('hi-there', {type: 'scenario-sync', duration: 20, start: 'autostart', dashGap: 20, forceRender: false},
				function () {
					if (window.console) {
						console.log('Animation finished. [log triggered from callback]');
					}
				}),
				obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
				obt2 = new Vivus('obturateur2', {type: 'sync', duration: 150}),
				obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 150}),
				pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 20, forceRender: false});
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
            <div className="landingillustration">
                <div id="NPO">
                    <script>
                        new Vivus('my-div', duration:200, file: './illustration anim.svg' , myCallback);
                    </script>
                </div> 
                              
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
