import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../api/post";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setFormData({
          title: data.title,
          body: data.body,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, formData);
      navigate("/");
    } catch (error) {
      console.error("更新文章失败：", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>错误: {error}</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>编辑文章</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label>标题: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div>
          <label>内容: </label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            style={{ width: "100%", height: "200px", padding: "0.5rem" }}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button type="submit" style={{ padding: "0.5rem 1rem" }}>
            保存
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{ padding: "0.5rem 1rem" }}
          >
            取消
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
