import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map(el => {
        return <li key={el.id}>{el.title}</li>;
      })}

      <Link to="/posts/new">Add New Post</Link>
    </>
  );
};

export default Posts;
