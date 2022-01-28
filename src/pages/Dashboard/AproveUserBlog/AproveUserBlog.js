import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CircularProgress } from "@mui/material";

const AproveUserBlog = () => {
  const [reversedBlogs, setReversedBlogs] = useState([]);
  const blogs = reversedBlogs.reduceRight(function (arr, last, index, coll) {
    return (arr = arr.concat(last));
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      await fetch(
        "https://still-oasis-67632.herokuapp.com/checked?checked=false"
      )
        .then((res) => res.json())
        .then((data) => setReversedBlogs(data));
      setLoading(false);
    };
    fetchBlogs();
  }, []);
  //update blog

  const handleApproveBlog = (id) => {
    // it will add soon
  };

  //delete blogs post
  /*const handleDeleteBlogs = (id) => {
    const proceed = window.confirm("are you want to delete");
    if (proceed) {
      const url =
        "https://still-oasis-67632.herokuapp.com/checked?checked=false";
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingBlogs = blogs.filter((blog) => blog._id !== id);
            reversedBlogs(remainingBlogs);
          }
        });
    }
  };*/

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <CircularProgress color="success" />
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>Manage All Blogs</title>
        <meta name="description" content={`Manage all blogs`} />
      </Helmet>
      <h2 className="text-center mb-4">Manage All Blogs</h2>
      {blogs.map((blog) => (
        <div>
          <ul>
            <li>
              {blog.title}

              <button onClick={() => handleApproveBlog(blog._id)}>
                Approve
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AproveUserBlog;
