import { useState, useEffect } from "react";

// 创建DataFetcher组件，用于获取和展示数据
const DataFetcher = () => {
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
        // 使用fetch API发起GET请求
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        // 检查响应状态
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // 将响应数据解析为JSON格式
        const data = await response.json();
        // 更新posts状态
        setPosts(data);
        // 设置loading状态为false
        setLoading(false);
      } catch (err) {
        // 发生错误时，更新error状态并关闭loading状态
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

  // 如果有错误，显示错误信息
  if (error) {
    return <div>错误: {error}</div>;
  }

  // 渲染获取到的数据
  return (
    <div>
      <h1>文章列表</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ border: "1px solid #ccc", padding: "1rem" }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
