import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { Categories } from "../../components/Categories";
import { Category } from "../../data/@types/Category";
import { Post } from "../../data/@types/Post";
import { getCategories } from "../../services/categoryServices";
import {
  getAllMedia,
  getMediaPieceById,
  getSpecificMedia,
} from "../../services/mediaServices";
import {
  getPostById,
  getPosts,
  getPostsByCategory,
} from "../../services/postServices";

import { styles } from "./styles";

export function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories(10).then((response: Category[]) => {
      setCategories(response);
    });
  }, []);

  async function handleGetPostsByCategory(category: Category) {
    await getPostsByCategory(category.id, 30).then((response) => {
      return response;
    });
  }

  return (
    <View style={styles.container}>
      <Categories categories={categories} />
    </View>
  );
}
