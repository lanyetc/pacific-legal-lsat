import React from "react";
import "./LandingPage";
import { Button } from "@material-ui/core";
import banrdIcon from "../../Assets/img/botavator.svg";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLink";
import LandTopAnim from "./LandTopAnim"
import LandHowWedo from "./LandHowWedo"
import LandParagraph from "./LandParagraph"
import LandModuleMenu from "./LandModuleMenu"
import LandContact from "./LandContact"


export default function LandingPage(props: any) {
    return (
        <div className="Maindiv">
            <Header
                brand={banrdIcon}
                brandName="LSALT 2.0 | "
                toolTitle=" Legal Compliance Self Assessment"
                fixed
                color="white"
                rightLinks={<HeaderLinks />}
                absolute
            />
            <LandTopAnim></LandTopAnim>
            <LandHowWedo></LandHowWedo>
            <LandParagraph></LandParagraph>
            <LandModuleMenu></LandModuleMenu>
            <LandContact></LandContact>
            <footer className="FooterLand"><h1>Published on the traditional unceded territory of the Coast Salish peoples, including the territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səl̓ílwətaʔɬ/Selilwitulh (Tsleil-Waututh) Nations.</h1></footer>
        </div>
    )
}

