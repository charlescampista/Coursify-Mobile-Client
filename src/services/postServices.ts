import { Post } from "../data/@types/Post";
import { api } from "./api";

export const getPostById = async (postId: number) => {
  return await api.get(`/posts/${postId}`);
};

export async function getPosts(quantityPerPage: number): Promise<Post[]> {
  let response = await api.get(`/posts?per_page=${quantityPerPage}`);
  let posts: Post[] = response.data.map((item: any) =>
    convertObjectToPost(item)
  );
  return posts;
}

export async function getPostsByCategory(
  categoryId: number,
  quantityPerPage: number
): Promise<Post[]> {
  let response = await api.get(
    `/posts?categories=${categoryId}&per_page=${quantityPerPage}`
  );
  let posts: Post[] = response.data.map((item: any) =>
    convertObjectToPost(item)
  );
  return posts;
}

function convertObjectToPost(object: any): Post {
  return {
    id: object.id,
    title: object.title.rendered,
    status: object.status,
    featuredMedia: object.featured_media,
    content: object.content.rendered,
    description: object.excerpt.rendered,
    pageViews: object.page_views,
    categories: object.categories,
  } as Post;
}
