import { CircularProgress } from "@mui/material";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import EventNoteIcon from "@mui/icons-material/EventNote";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";

const BlogsCompo = ({ loading, blogs }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/blog_details/${id}`);
  };
  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <CircularProgress color="success" />
      </div>
    );
  }
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {blogs.map((blog) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={`data:image/png;base64,${blog.image}`}
              />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                  <div className="d-flex my-3">
                    <small className="me-2" style={{ color: "gray" }}>
                      <EventNoteIcon /> <i>{blog.time.slice(0, 15)}</i>
                    </small>
                    <small style={{ color: "gray" }}>
                      <BorderColorIcon /> <i>by {blog.blogger}</i>
                    </small>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.blogsDetails.slice(0, 200),
                    }}
                  ></div>
                </Card.Text>
                <button
                  className="primary-btn"
                  onClick={() => handleClick(blog._id)}
                >
                  Read more &#10132;
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogsCompo;
