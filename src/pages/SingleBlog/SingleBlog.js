import React, { useEffect, useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "react-router-dom";
import Comment from "./Comment/Comment";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/allblogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9" style={{ borderRight: "1px solid gray" }}>
          <img
            src={`data:image/png;base64,${blog.image}`}
            alt=""
            className="img-fluid"
          />
          <p className="text-center my-3" style={{ color: "gray" }}>
            <i>{blog.imageTitle}</i>
          </p>
          <hr />
          <h2
            className="mt-5"
            style={{
              fontSize: "2.2em",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {blog.title}
          </h2>

          <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
            <LocationOnIcon />
            Location: {blog.address}
          </h3>
          <h3
            style={{ fontSize: "1.5em", fontWeight: "bold", color: "#f77b63" }}
          >
            The Cost of the Trip Will Be: ${blog.cost}
          </h3>
          <div className="d-flex justify-content-between">
            <p style={{ color: "gray" }}>
              <BorderColorIcon /> <i>by {blog.blogger}</i>
            </p>
            {/* <p style={{ color: "gray" }}>
              <EventNoteIcon /> <i>{blog.time.toDateString()}</i>
            </p> */}
          </div>
          <p
            style={{ fontSize: "1.3em", textAlign: "justify" }}
            dangerouslySetInnerHTML={{
              __html: blog.blogsDetails,
            }}
          ></p>
          <hr />

          {/*-------------- coments area ------------- */}
          <Comment blogId={blog._id} />
        </div>
        {/*-------------------- sidebar news item and adds------------- */}
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default SingleBlog;
