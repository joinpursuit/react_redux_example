import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Posts from "../components/Posts";
import Form from "../components/Form";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/posts">
              <Posts/>
          </Route> 
          <Route path="/posts/new">
            <Form/>
          </Route> 
        </Switch>
      </>
    );
  }
}

export default App;
