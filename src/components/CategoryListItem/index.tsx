import { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
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
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    if (loading) return;
    setLoading(true);
    let response = await getPostsByCategory(category.id, 5, page);
    setPosts([...posts, ...response]);
    setLoading(false);
    setPage(page + 1);
  }

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
        onEndReached={getPosts}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<ActivityIndicator size="large" color="#0000FF" />}
      />
    </View>
  );
}
