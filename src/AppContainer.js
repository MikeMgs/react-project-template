import React from "react";
import Router from "./routers/Router";
import "./styles/main.scss";

export default function AppContainer() {
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
}
