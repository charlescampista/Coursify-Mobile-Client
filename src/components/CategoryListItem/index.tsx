import React from "react";
import { Text, View } from "react-native";
import { Category } from "../../data/@types/Category";

import { styles } from "./styles";

type Props = {
  category: Category;
};

export function CategoryListItem({ category, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>{category.name}</Text>
        <Text style={styles.more}>Ver Mais</Text>
      </View>
    </View>
  );
}
