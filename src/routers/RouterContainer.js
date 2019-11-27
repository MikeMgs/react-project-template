import React from "react";
import { Switch, Route } from "react-router-dom";
import RouterAuth from "./RouterAuth";
import AppContainer from "../AppContainer";

export default function RouterContainer() {
  return (
    <Switch>
      <Route path="/auth" component={RouterAuth} />
      <Route path="/" component={AppContainer} />
    </Switch>
  );
}
