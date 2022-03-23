import { Category } from "../data/@types/Category";
import { api } from "./api";

// export const getCategories = async (quantityPerPage: number) => {
//   let response = await api.get(`/categories?per_page=${quantityPerPage}`);
//   let categories: Category[] = response.data.items.map(
//     (item: any) =>
//       ({
//         id: item.data.id,
//         countOfPosts: item.data.count,
//         description: item.data.description,
//         link: item.data.link,
//         name: item.data.name,
//         slug: item.data.slug,
//       } as Category)
//   );
//   return categories;
// };

export async function getCategories(
  quantityPerPage: number
): Promise<Category[]> {
  let response = await api.get(`/categories?per_page=${quantityPerPage}`);
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
