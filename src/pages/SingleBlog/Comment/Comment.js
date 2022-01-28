import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import useAuth from "../../../hooks/useAuth";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const Comment = ({ blogId }) => {
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);
  const handleComment = (e) => {
    e.preventDefault();
    const commentData = {
      comment,
      blogId,
      value,
      user,
    };

    fetch("https://still-oasis-67632.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("success!");
          e.target.reset();
          setSuccess("News added successfully");
          console.log("News added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const [showComments, setShowComments] = useState([]);
  useEffect(() => {
    fetch(`https://still-oasis-67632.herokuapp.com/comments?blogId=${blogId}`)
      .then((res) => res.json())
      .then((data) => setShowComments(data));
  }, [showComments]);

  return (
    <div>
      <p>Add a comment and rate here: </p>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
      {/* <p>This is comment of: {blogId}</p> */}
      <form onSubmit={handleComment}>
        <input
          required
          type="text"
          placeholder="Comment here.."
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
      <div>
        <p>
          <b>Comments({showComments.length})</b>
        </p>
        <hr />
        {showComments.map((comments) => (
          <div
            key={comments._id}
            style={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
          >
            <div className="d-flex align-items-center">
              <img
                className="me-2"
                width="40"
                style={{ borderRadius: "50%", border: "1px solid gray" }}
                src={
                  comments.user.photoURL ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt={comments.user.displayName}
              />
              <p>{comments.user.displayName}</p>
            </div>

            <p>{comments.comment}</p>
            <Rating name="read-only" value={comments.value} readOnly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
