import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";

import { Grid } from "@material-ui/core";

// Importing Images from assets/images
import leftpic from "./assets/img/leftpic.png";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import ChatbotPage from "./containers/Assessment/Chatbot/ChatbotPage";
import ResultPage from "./containers/Assessment/Result/ResultPage";

import { ResultContextProvider, ResultContextConsumer } from '././data/context'
import './App.css';
import './components/common.css';


var hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <ResultContextProvider>
        <Switch>

          <Route path="/assessment" component={ChatbotPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/" component={ChatbotPage} />
        </Switch>
      </ResultContextProvider>
    </Router>
  );
}


export default App