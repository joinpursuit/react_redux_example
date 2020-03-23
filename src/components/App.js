import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import PostsContainer from "../containers/PostsContainer";
import FormContainer from "../containers/FormContainer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/posts" component={PostsContainer} />
          <Route path="/posts/new" component={FormContainer} />
        </Switch>
      </>
    );
  }
}

export default App;
