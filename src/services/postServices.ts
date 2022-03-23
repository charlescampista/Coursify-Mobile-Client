import { api } from "./api";

export const getPosts = async (quantityPerPage: number) => {
  return await api.get(`/posts?per_page=${quantityPerPage}`);
};

export const getPostsByCategory = async (
  categoryId: number,
  quantityPerPage: number
) => {
  return await api.get(
    `/posts?categories=${categoryId}&per_page=${quantityPerPage}`
  );
};

export const getPostById = async (postId: number) => {
  return await api.get(`/posts/${postId}`);
};
