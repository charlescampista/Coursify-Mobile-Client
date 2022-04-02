import React, { useState, useEffect } from "react";
import { Text, FlatList, View, ActivityIndicator } from "react-native";
import { Category } from "../../data/@types/Category";
import { getCategories } from "../../services/categoryServices";
import { CategoryListItem } from "../CategoryListItem";

import { styles } from "./styles";

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchCategoriesFromService();
  }, []);

  async function fetchCategoriesFromService() {
    if (loading) return;
    setLoading(true);
    //PASS PAGE
    let response = await getCategories(3);
    setCategories([...categories, ...response]);
    setLoading(false);
    setPage(page + 1);
  }

  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => <CategoryListItem category={item} />}
      onEndReached={fetchCategoriesFromService}
      onEndReachedThreshold={0.1}
      ListFooterComponent={<ActivityIndicator size="large" color="#FF0000" />}
    />
  );
}
