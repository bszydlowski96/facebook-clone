import React from "react";
import "./Post.scss";

interface PostProps {
  author: {
    name: string;
    avatar: string;
    time: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

const Post = ({ author, content, image, likes, comments }: PostProps) => {
  return (
    <div className="post">
      <div className="post__header">
        <img src={author.avatar} alt={author.name} className="post__avatar" />
        <div className="post__info">
          <h3 className="post__author">{author.name}</h3>{" "}
          <span className="post__time">{author.time}</span>{" "}
        </div>
      </div>

      <div className="post__content">
        <p>{content}</p>
      </div>

      {image && (
        <div className="post__image">
          <img src={image} alt="Post" />
        </div>
      )}

      <div className="post__stats">
        {" "}
        <span className="post__likes">👍 {likes} osób lubi to</span>
        <span className="post__comments">{comments} komentarzy</span>
      </div>

      <div className="post__actions">
        <button className="post__action">👍 Lubię to</button>{" "}
        <button className="post__action">💬 Komentarz</button>
        <button className="post__action">📤 Udostępnij</button>
      </div>
    </div>
  );
};

export default Post;
