import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../reduxUtils";

import Posts from "../components/Posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    if (!this.props.posts.length) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
        this.props.addPosts(res.data);
      });
    }
  };

  render() {
    const { posts } = this.props;
    console.log(this.props);

    return <Posts posts={posts} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
