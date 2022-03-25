import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Category } from "../../data/@types/Category";
import { Post } from "../../data/@types/Post";
import { getPostsByCategory } from "../../services/postServices";
import { Load } from "../Load";
import { PostListItem } from "../PostListItem";

import { styles } from "./styles";

type Props = {
  category: Category;
};

export function CategoryListItem({ category, ...rest }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [requestDone, setRequestDone] = useState<Boolean>(false);

  useEffect(() => {
    getPostsByCategory(category.id, 10).then((response) => {
      setPosts(response);
      setRequestDone(true);
    });
  }, []);

  if (requestDone)
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.title}>{category.name}</Text>
          <Text style={styles.more}>Ver Mais</Text>
        </View>

        <FlatList
          horizontal={true}
          data={posts}
          keyExtractor={(item) => item.id + ""}
          renderItem={(arg) => <PostListItem post={arg.item} />}
        />
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <Load />
      </View>
    );
}
