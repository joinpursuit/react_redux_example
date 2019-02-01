import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../redux-utils";

import Form from "../components/Form";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const { posts } = this.props;

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    this.props.addPost({ title, id });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;

    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        title={title}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
