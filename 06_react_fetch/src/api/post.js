import { get, post, put, del } from "./request";

// 获取文章列表
export const getPosts = (params) => {
  return get("/posts", params);
};

// 获取文章详情
export const getPostById = (id) => {
  return get(`/posts/${id}`);
};

// 创建文章
export const createPost = (data) => {
  return post("/posts", data);
};

// 更新文章
export const updatePost = (id, data) => {
  return put(`/posts/${id}`, data);
};

// 删除文章
export const deletePost = (id) => {
  return del(`/posts/${id}`);
};
