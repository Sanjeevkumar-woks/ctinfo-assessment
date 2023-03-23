import { useState } from "react";
import "./BlogForm.css";

interface Blog {
  coverPageUrl: string;
  launchDate: string;
  title: string;
  author: string;
  description: string;
}

const BlogForm = () => {
  const [blog, setBlog] = useState<Blog>({
    coverPageUrl: "",
    launchDate: "",
    title: "",
    author: "",
    description: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (!response.ok) {
        throw new Error("Failed to add blog");
      }

      setBlog({
        coverPageUrl: "",
        launchDate: "",
        title: "",
        author: "",
        description: "",
      });

      alert("Blog added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Add New Blog</h2>
      <label htmlFor="coverPageUrl">Cover Page URL:</label>
      <input
        type="text"
        id="coverPageUrl"
        name="coverPageUrl"
        value={blog.coverPageUrl}
        onChange={handleChange}
      />

      <label htmlFor="launchDate">Launch Date:</label>
      <input
        type="text"
        id="launchDate"
        name="launchDate"
        value={blog.launchDate}
        onChange={handleChange}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={blog.title}
        onChange={handleChange}
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={blog.author}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={blog.description}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
