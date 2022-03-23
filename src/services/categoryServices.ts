import { api } from "./api";

export const getCategories = async (quantityPerPage: number) => {
  return await api.get(`/categories?per_page=${quantityPerPage}`);
};
