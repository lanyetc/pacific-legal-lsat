import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";

import { Grid } from "@material-ui/core";

// Importing Images from assets/images
import leftpic from "../src/Assets/img/leftpic.png";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import ChatbotPage from "./containers/Assessment/Chatbot/ChatbotPage"
import './App.css';
import './components/common.css';

var hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
    <Switch>
      <Route path="/assessment" component={ChatbotPage} />
      <Route path="/" component={ChatbotPage} />
    </Switch>
  </Router>
  );
}

export default function Resultfunction(props: { [x: string]: any; }) {
    const { ...rest } = props;
    return (
        <div className="fullContainer">
          
            {/* <Header
                brand="Results"
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            /> */}
            <section className="resultsFullPage">
                    <section className="resultsLefttSide">
                        <img className="resultsImage" src={leftpic}></img>
                        <div className="moduleBlock">
                            <h1 className="moduleFont">Module Results</h1>
                            <p className="moduleParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <section className="buttonBlock">
                                <button className="downloadButton">download</button>
                                <button className="shareButton">share</button>
                            </section>
                        </div>
                    </section>
                    <section className="resultsRightSide">
                        <ul className="resultsNav">
                            <li>Outcome</li>
                            <li>Privacy Policy</li>
                            <li>Personal Info</li>
                            <li>Confidentiality</li>
                            <li>Privacy Officer</li>
                            <li>Requests</li>
                            <li>Antispam</li>
                        </ul>
                        <section className="resultsMiddle">
                            <h1>To Do List</h1>
                                <ul className="todoList">
                                                            
                                    <li><input type="radio" name="" value=""></input>  Create a privacy policy
                                        <button className="moreinfoButton">more info</button>
                                        <button className="createButton">create now</button>
                                    </li>
                                    <li><input type="radio" name="" value=""></input>  Review social media terms of service
                                        <button className="moreinfoButton">more info</button>
                                        <button className="createButton">create now</button>
                                    </li>
                                    <li><input type="radio" name="" value=""></input>  Outline personal info access
                                        <button className="moreinfoButton">more info</button>
                                        <button className="createButton">create now</button>
                                    </li>
                                    <li><input type="radio" name="" value=""></input>  Train employees on privacy policies
                                        <button className="moreinfoButton">more info</button>
                                        <button className="createButton">create now</button>
                                    </li>
                                    <li><input type="radio" name="" value=""></input>  Outline personal info access
                                        <button className="moreinfoButton">more info</button>
                                        <button className="createButton">create now</button>
                                    </li>
                                    <li><input type="radio" name="" value=""></input>  Train employees on privacy policies
                                        <button className="moreinfoButton">more info</button>
                                        <button className="createButton">create now</button>
                                    </li>
                                </ul>
                        </section>
                        <section className="Reminder">
                            <h1 className="reminderFont">Reminder</h1>
                            <ul className="reminderList">
                                <li>Only use mass messages for fundraising</li>
                                <li>Get consent before sending</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </section>
                    </section>
            </section>
            <footer className="footerResults">
                <h1>Sign Up For This</h1>    
                <section className="footerInnerResults">


                </section>
            </footer>           

        </div>
    );
}
