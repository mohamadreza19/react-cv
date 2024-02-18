import React from "react";

function PostsExcerpt({ post }) {
  return (
    <article className="border">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 10)}</p>
      <p className="bg-light">
        <PostAuther userId={post.userID} />
      </p>
    </article>
  );
}

export default PostsExcerpt;
