import React from "react";
import { Router, Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
import history from './history';
import ChatbotPage from "./containers/Assessment/Chatbot/ChatbotPage";
import ResultPage from "./containers/Assessment/Result/ResultPage";
import LandingPage from "./containers/LandingPage/LandingPage";
import GlossaryPage from "./containers/Glossary/GlossaryPage";
import { ResultContextProvider } from '././data/context'
import './App.css';
import './components/common.css';


const App = () => {
  return (
    <HashRouter>
    <ResultContextProvider>
      <Switch>
        <Route path="/assessment" component={ChatbotPage} />
        <Route path="/result/:results" component={ResultPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/glossary" component={GlossaryPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </ResultContextProvider>
  </HashRouter>
  );
}


export default App