import React, { useState } from "react";
import PropTypes from "prop-types";

function PostForm(props) {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
  };

  return (
    <div className="container mt-5 pb-5 shadow">
      <div className="form-container">
        <p>This is a POST FORM</p>
        <form>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              name="title"
              className="form-control"
              placeholder="Enter title"
              onChange={handleChange}
              value={postData.title}
            />
          </div>

          <div className="form-group">
            <label for="title">Description</label>
            <input
              name="description"
              className="form-control"
              placeholder="Enter descripton"
              onChange={handleChange}
              value={postData.description}
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

PostForm.propTypes = {};

export default PostForm;
