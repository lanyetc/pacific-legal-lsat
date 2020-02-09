import React from "react";

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import ChatbotPage from "./containers/Assessment/Chatbot/ChatbotPage";
import ResultPage from "./containers/Assessment/Result/ResultPage";
import './App.css';
import './components/common.css';

var hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
    <Switch>
      <Route path="/assessment" component={ChatbotPage} />
      <Route path="/result" component={ResultPage} />
      <Route path="/" component={ChatbotPage} />
    </Switch>
  </Router>
  );
}

export default App;