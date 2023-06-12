import { useSelector, useDispatch } from "react-redux";

import React from "react";
import { selectAllPosts } from "./postSlice";
import { PostAuther } from "./PostAuther";

export const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renreredPosts = posts.map((post) => (
    <article key={post.id} className="border">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 10)}</p>
      <p className="bg-light">
        <PostAuther userId={post.userID} />
      </p>
    </article>
  ));
  return (
    <div>
      <h2>Posts</h2>
      {renreredPosts}
    </div>
  );
};
