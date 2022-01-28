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
  const handleDetails = (e) => {
    const updateDetails = e.target.value;
    const updateBlog = { ...blog };
    updateBlog.blogsDetails = updateDetails;
    setBlog(updateBlog);
  };
  const handlCost = (e) => {
    const updateCost = e.target.value;
    const updateBlog = { ...blog };
    updateBlog.cost = updateCost;
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
            <p>Blgs Details: </p>
            <textarea
              rows="10"
              cols="70"
              type="text"
              onChange={handleDetails}
              value={blog.blogsDetails}
            />
            <br />
            <br />
            <label>Cost of Travel: </label>
            <input type="number" onChange={handlCost} value={blog.cost} />
            <br />
            <br />
            <label>Blogger's Name: </label>
            <input type="text" onChange={handleTitle} value={blog.blogger} />
            <br />
            <br />
            <label>Location: </label>
            <input type="text" onChange={handleTitle} value={blog.address} />
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
