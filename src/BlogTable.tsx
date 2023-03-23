import React, { useState } from "react";
import "./BlogTable.css";
import { Link } from "react-router-dom";
import DescriptionBox from "./DescriptionBox";

interface BlogData {
  coverImage: string;
  launchDate: string;
  title: string;
  author: string;
  description: string;
}

interface BlogTableProps {
  blogData: BlogData[];
}

const BlogTable: React.FC<BlogTableProps> = ({ blogData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");

  const handleOpen = (description: string) => {
    setDescription(description);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>Library</h1>
        <button className="blog-btn">
          <Link style={{ padding: 10, textDecoration: "none" }} to="/blogform">
            Add blog
          </Link>
        </button>
      </div>
      <div className="blog-table-container">
        <table className="blog-table">
          <thead>
            <tr>
              <th>Cover Image</th>
              <th>Launch Date</th>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((blog, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="blog-cover-image"
                  />
                </td>
                <td className="date">{blog.launchDate}</td>
                <td
                  className="title"
                  onClick={() => handleOpen(blog.description)}
                >
                  {blog.title}
                </td>
                <td>{blog.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && (
        <div className="description-box-container">
          <div className="blog-description-box">
            <DescriptionBox
              description={description}
              handleClose={handleClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTable;
