import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} classNames="button muted-button">
        View Post
      </Link>
    </article>
  ));

  return (
    <selection>
      <h2>Posts</h2>
      {renderedPosts}
    </selection>
  );
};

export default PostsList;
