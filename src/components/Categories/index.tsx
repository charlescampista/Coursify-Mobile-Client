import React from "react";
import { Text, FlatList, View } from "react-native";
import { Category } from "../../data/@types/Category";
import { CategoryListItem } from "../CategoryListItem";

import { styles } from "./styles";

type Props = {
  categories: Category[];
};

export function Categories({ categories, ...rest }: Props) {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => <CategoryListItem category={item} />}
    />
  );
}
