import React, { useEffect, useState } from "react";
import "./App.css";
import BlogForm from "./BlogForm";
import BlogTable from "./BlogTable";
import { Routes, Route } from "react-router-dom";

interface BlogData {
  coverImage: string;
  launchDate: string;
  title: string;
  author: string;
  description: string;
}

const blogData: BlogData[] = [
  {
    coverImage:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    launchDate: "february 14,2023",
    title: "Communicate more by saying less",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere leo sit amet purus dignissim scelerisque. Nullam ullamcorper, eros eget consectetur tristique, risus massa aliquam elit, id sodales eros felis non enim. Nam non velit a diam malesuada ultricies vel in urna. Suspendisse potenti.",
  },
  {
    coverImage:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    launchDate: "february 14,2023",
    title: "Blog Post 2",
    author: "Jane Doe",
    description:
      "Integer tristique, velit ac pharetra aliquet, odio leo vestibulum sem, sit amet scelerisque risus nibh nec lorem. Curabitur et fringilla nisi, quis lacinia mi. Maecenas semper augue libero, vitae vehicula felis convallis vel. Donec auctor lorem ac velit elementum dapibus. Fusce auctor molestie erat, at finibus nibh sagittis ut.",
  },
  {
    coverImage:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    launchDate: "february 14,2023",
    title: "Blog Post 3",
    author: "John Smith",
    description:
      "Sed euismod sapien ut ipsum sollicitudin, a lacinia enim dapibus. Donec non ligula non erat tincidunt dictum at in enim. Fusce malesuada dignissim magna, nec fermentum eros bibendum quis. Maecenas accumsan mauris dolor, at elementum est imperdiet nec. Praesent mattis aliquet nisi, quis facilisis arcu tristique vel.",
  },
  {
    coverImage:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    launchDate: "february 14,2023",
    title: "Communicate more by saying less",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere leo sit amet purus dignissim scelerisque. Nullam ullamcorper, eros eget consectetur tristique, risus massa aliquam elit, id sodales eros felis non enim. Nam non velit a diam malesuada ultricies vel in urna. Suspendisse potenti.",
  },
  {
    coverImage:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    launchDate: "february 14,2023",
    title: "Communicate more by saying less",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere leo sit amet purus dignissim scelerisque. Nullam ullamcorper, eros eget consectetur tristique, risus massa aliquam elit, id sodales eros felis non enim. Nam non velit a diam malesuada ultricies vel in urna. Suspendisse potenti.",
  },
  {
    coverImage:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    launchDate: "february 14,2023",
    title: "Communicate more by saying less",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere leo sit amet purus dignissim scelerisque. Nullam ullamcorper, eros eget consectetur tristique, risus massa aliquam elit, id sodales eros felis non enim. Nam non velit a diam malesuada ultricies vel in urna. Suspendisse potenti.",
  },
  {
    coverImage:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    launchDate: "february 14,2023",
    title: "Communicate more by saying less",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere leo sit amet purus dignissim scelerisque. Nullam ullamcorper, eros eget consectetur tristique, risus massa aliquam elit, id sodales eros felis non enim. Nam non velit a diam malesuada ultricies vel in urna. Suspendisse potenti.",
  },
];

function App() {
  // const [blogs, setBlogs] = useState<BlogData[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg");
  //     const data = await response.json();
  //     setBlogs(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<BlogTable blogData={blogData} />} />
          <Route path="/blogform" element={<BlogForm />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
