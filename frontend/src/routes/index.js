import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Signup from "../pages/Signup";
import Friends from "../pages/Friends";
import Auth from "../components/Auth";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={Signup} />
          <Route path="/friends" component={Auth(Friends)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;