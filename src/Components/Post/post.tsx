import React from "react";
import Image from "../Image/Image";
import { blogposts } from "../../../data/blogData";
import "../Post/poststyle.css";
const post: React.FC = () => {
  return (
    <div className="postcontent">
      {/* postboxes */}
      {blogposts.map((post) => (
        <div key={post.id} className="postbox">
          <h2 className="post-title">{post.title}</h2>
          <Image src={post.image} alt={post.title} width={600} />
          <p className="post-text">{post.text}</p>
          <p className="post-details">
            {" "}
            <span className="post-writer">By {post.writer}</span> |{" "}
            <span className="post-views">{post.view} views</span>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default post;
