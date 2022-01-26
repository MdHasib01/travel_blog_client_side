import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TextEditor from "./TextEditor/TextEditor";
import { Helmet } from "react-helmet";
const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [blogsDetails, setBlogsDetails] = useState("");
  const [category, setcategory] = useState("Adventure");
  const [time, setTime] = useState(new Date());
  const [blogger, setBlogger] = useState("");
  const [address, setAddress] = useState("Add Location");
  const [imageTitle, setImageTitle] = useState("Nice Moment Photo");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("blogsDetails", blogsDetails);
    formData.append("category", category);
    formData.append("time", time);
    formData.append("blogger", blogger);
    formData.append("address", address);
    formData.append("cost", cost);
    formData.append("imageTitle", imageTitle);
    formData.append("image", image);

    fetch("http://localhost:8000/allblogs", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Blog added successfully");
          alert("Blog adde successfully");
          e.target.reset();
          console.log("Blog added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Post a Blog</title>
        <meta name="description" content={`Post a bloog`} />
      </Helmet>
      <Container>
        <form onSubmit={handleSubmit}>
          <label>Blgs Title: </label>
          <input
            required
            type="text"
            placeholder="Blogs Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <p>Blogs Details: </p>
          <div className="text-editor">
            <TextEditor
              setBlogsDetails={setBlogsDetails}
              blogsDetails={blogsDetails}
            />
          </div>
          <br />
          <br />
          <lebel for="category">Blog Post's Category: </lebel>
          <select
            defaultValue="Adventure"
            name="category"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="Adventure">Adventure</option>
            <option value="Beaches">Beaches</option>
            <option value="Camping">Camping</option>
            <option value="Friendly">Friendly</option>
            <option value="Low budget">Low budget</option>
            <option value="Popular">Popular</option>
            <option value="Tips">Tips</option>
          </select>
          <br />
          <br />
          <label>Cost of Travel: </label>
          <input
            type="number"
            placeholder="$Cost"
            onChange={(e) => setCost(e.target.value)}
          />
          <br />
          <br />
          <label>Post time: </label>
          <input
            type="text"
            disabled
            defaultValue={new Date()}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <br />
          <label>Blogger's Name: </label>
          <input
            type="text"
            placeholder="Blogger's Name"
            onChange={(e) => setBlogger(e.target.value)}
          />
          <br />
          <br />
          <label>Travel Location: </label>
          <input
            type="text"
            placeholder="Add Location"
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br />
          <br />
          <label>About The Picture: </label>
          <input
            required
            type="text"
            placeholder="About The Picture"
            onChange={(e) => setImageTitle(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="primary-btn">
            Post Blog
          </button>
        </form>
        {success && <p style={{ color: "green" }}>{success}</p>}
      </Container>
    </div>
  );
};

export default AddBlogs;
