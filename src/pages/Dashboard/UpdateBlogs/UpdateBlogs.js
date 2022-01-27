import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import NavigationBar from "../../../shared/NavigationBar/NavigationBar";
import Footer from "../../../shared/Footer/Footer";

const UpdateBlogs = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      await fetch(`https://still-oasis-67632.herokuapp.com/allblogs/${id}`)
        .then((res) => res.json())
        .then((data) => setBlog(data));
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  const handleTitle = (e) => {
    const updateTitle = e.target.value;
    const updateBlog = { ...blog };
    updateBlog.title = updateTitle;
    setBlog(updateBlog);
  };
  const handleUpdate = () => {};

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <CircularProgress color="success" />
      </div>
    );
  }
  return (
    <>
      <NavigationBar />
      <div className="container">
        <Helmet>
          <title>Manage All Blogs</title>
          <meta name="description" content={`Manage all blogs`} />
        </Helmet>
        <h2 className="text-center mb-4">Update Blog</h2>

        <div>
          <form onSubmit={handleUpdate}>
            <label>Blgs Title: </label>
            <input type="text" onChange={handleTitle} value={blog.title} />
            <br />
            <br />
            <p>Blgs Details </p>
            <textarea type="text" onChange={handleTitle} value={blog.title} />
            <br />
            <br />
            <label>Blgs Title: </label>
            <input type="text" onChange={handleTitle} value={blog.title} />
            <br />
            <br />
            <label>Blgs Title: </label>
            <input type="text" onChange={handleTitle} value={blog.title} />
            <br />
            <br />
            <label>Blgs Title: </label>
            <input type="text" onChange={handleTitle} value={blog.title} />
            <br />
            <br />

            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default UpdateBlogs;
