import { Category } from "../data/@types/Category";
import { api } from "./api";

export async function getCategories(
  quantityPerPage: number,
  page: number
): Promise<Category[]> {
  let response = await api.get(
    `/categories?per_page=${quantityPerPage}&page=${page}`
  );
  let categories: Category[] = response.data.map(
    (item: any) =>
      ({
        id: item.id,
        countOfPosts: item.count,
        description: item.description,
        link: item.link,
        name: item.name,
        slug: item.slug,
      } as Category)
  );
  return categories;
}
