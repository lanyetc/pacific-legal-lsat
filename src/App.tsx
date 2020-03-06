import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import ChatbotPage from "./containers/Assessment/Chatbot/ChatbotPage";
import ResultPage from "./containers/Assessment/Result/ResultPage";
import { ResultContextProvider } from '././data/context'
import './App.css';
import './components/common.css';


const App = () => {
  return (
    <Router history={history}>
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