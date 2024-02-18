import { useSelector, useDispatch } from "react-redux";

import React from "react";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postSlice";
import { PostAuther } from "./PostAuther";
import { useEffect } from "react";

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  });

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
