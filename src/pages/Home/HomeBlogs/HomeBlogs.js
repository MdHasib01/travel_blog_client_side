import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import BlogsCompo from "./BlogsCompo";
import tipsBack from "../../../Assects/Top_Banner/h6-rev-slide-shape.png";
import PaginationCompo from "./PaginationCompo";

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      await fetch("https://still-oasis-67632.herokuapp.com/allblogs")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="mt-5">
      <h2
        className="text-center"
        style={{
          fontWeight: "bold",
          fontSize: "2.5em",
        }}
      >
        FEATURED BLOG{" "}
        <span
          style={{
            color: "#59815b",
            backgroundImage: `url(${tipsBack})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          POSTS
        </span>
      </h2>
      <Container>
        <BlogsCompo loading={loading} blogs={currentBlogs} />
        <div className="d-flex justify-content-center">
          <PaginationCompo
            postPerPage={postPerPage}
            totalPosts={blogs.length}
            paginate={paginate}
          />
        </div>
      </Container>
    </div>
  );
};

export default HomeBlogs;
