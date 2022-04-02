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
  const [isLastPage, setIsLastPage] = useState<Boolean>(false);

  useEffect(() => {
    fetchCategoriesFromService();
  }, []);

  async function fetchCategoriesFromService() {
    if (loading && !isLastPage) return;
    setLoading(true);
    try {
      let response = await getCategories(3, page);
      if (response.length === 0) {
        setCategories([...categories]);
        setIsLastPage(true);
        setLoading(false);
      } else {
        setCategories([...categories, ...response]);
        setPage(page + 1);
        setLoading(false);
        setIsLastPage(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => <CategoryListItem category={item} />}
      onEndReached={fetchCategoriesFromService}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        loading && !isLastPage ? (
          <ActivityIndicator size="large" color="#FF0000" />
        ) : (
          <></>
        )
      }
    />
  );
}
