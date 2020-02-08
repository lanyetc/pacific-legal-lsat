import React from "react";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLink";
import ModuleResult from "./ModuleResult";
import ResultDetail from "./Detail/ResultDetail";

export default function ResultPage() {
    return (
        <div className="full-screen-container white">
        <Header
                  brand="PLEO"
                  toolTitle = "NPO SELF ASSESSMENT "
                  fixed
                  color="white"
                  rightLinks={<HeaderLinks />}
                  absolute
                 
          />
           <div className="main-container">
              <ModuleResult></ModuleResult>
              <ResultDetail></ResultDetail>
          </div>
  
      </div>
    );
}
