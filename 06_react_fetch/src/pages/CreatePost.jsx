import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/post";

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(formData);
      navigate("/");
    } catch (error) {
      console.error("创建文章失败：", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>新建文章</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>标题: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>内容: </label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default CreatePost;
