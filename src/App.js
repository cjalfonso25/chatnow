import React from "react";
import { Route, Switch } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path="/chat" exact component={Chat} />
      <Route path="/" exact component={Join} />
    </Switch>
  );
};

export default App;
