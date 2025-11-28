import React, { useState, useEffect } from "react";

const postData = {
  likes: 10,
  comments: [],
};

export default function PostComponent() {
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setPost(postData);
  }, []);

   if (!post) return <h2>Loading...</h2>; 

  function likePost() {
    setPost((prev) => ({
      ...prev,
      likes: prev.likes + 1,
    }));
  }

  function addComment() {
    setPost((prev) => ({
      ...prev,
      comments: [...prev.comments, newComment],
    }));
    setNewComment("");
  }

  return (
    <div>
      <h2>{post.likes} likes</h2>
      <button onClick={likePost}>Like</button>
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>
      <ul>
        {post.comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}
