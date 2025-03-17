import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../api/post";
const PostList = () => {
  // 使用useState钩子管理posts数据状态
  const [posts, setPosts] = useState([]);
  // 使用useState钩子管理加载状态
  const [loading, setLoading] = useState(true);
  // 使用useState钩子管理错误状态
  const [error, setError] = useState(null);

  // 使用useEffect钩子在组件挂载时获取数据
  useEffect(() => {
    // 定义异步函数fetchData用于获取数据
    const fetchData = async () => {
      try {
        // 使用封装的get方法发起请求
        const data = await getPosts({
          _limit: 5, // 限制获取5条数据
        });
        setPosts(data);
        setLoading(false);
      } catch (err) {
        // axios的错误对象包含更详细的错误信息
        setError(err.message);
        setLoading(false);
      }
    };

    // 调用fetchData函数
    fetchData();
  }, []); // 空依赖数组表示仅在组件挂载时执行

  // 如果正在加载，显示加载信息
  if (loading) {
    return <div>加载中...</div>;
  }

  // 如果错误，显示错误信息
  if (error) {
    return <div>错误: {error}</div>;
  }

  // 添加删除文章的处理函数
  const handleDelete = async (postId) => {
    if (window.confirm("确定要删除这篇文章吗？")) {
      try {
        await deletePost(postId);
        setPosts(posts.filter((post) => post.id !== postId));
      } catch (err) {
        setError("删除文章失败：" + err.message);
      }
    }
  };

  // 渲染获取到的数据
  return (
    <div>
      <h1>文章列表</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "0.5rem 1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              to={`/post/${post.id}`}
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "1.1rem",
                fontWeight: "500",
              }}
            >
              {post.title}
            </Link>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Link
                to={`/edit/${post.id}`}
                style={{
                  backgroundColor: "#1890ff",
                  color: "white",
                  border: "none",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                编辑
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                删除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
