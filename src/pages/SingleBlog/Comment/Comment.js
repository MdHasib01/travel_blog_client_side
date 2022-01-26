import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

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

  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);
  const handleComment = (e) => {
    e.preventDefault();
    const commentData = {
      comment,
      blogId,
      value,
    };

    fetch("http://localhost:8000/comments", {
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
    fetch(`http://localhost:8000/comments?blogId=${blogId}`)
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
        <p>Comments({showComments.length})</p>
        {showComments.map((comments) => (
          <div key={comments._id}>
            <p>{comments.comment}</p>
            <Rating name="read-only" value={comments.value} readOnly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
