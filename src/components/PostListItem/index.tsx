import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Post } from "../../data/@types/Post";
import { styles } from "./styles";
import RenderHtml from "react-native-render-html";
import { getMediaPieceById } from "../../services/mediaServices";
import { Media } from "../../data/@types/Media";
type Props = {
  post: Post;
};

export function PostListItem({ post, ...rest }: Props) {
  const [media, setMedia] = useState<Media>({
    id: -1,
    title: "emptyMedia",
    details: {},
  } as Media);
  const [requestDone, setRequestDone] = useState<Boolean>(false);
  const navigation = useNavigation();

  function handleNavigationToArticle(post: Post, media: Media) {
    navigation.navigate("Article", { post: post, media: media });
  }

  useEffect(() => {
    getMediaPieceById(post.featuredMedia).then((response) => {
      setMedia(response);
      setRequestDone(true);
    });
  }, []);

  if (requestDone) {
    return (
      <TouchableOpacity
        onPress={() => {
          handleNavigationToArticle(post, media);
        }}
        {...rest}
      >
        <View style={styles.container}>
          <Image
            source={{
              uri: media?.details.medium.source_url,
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{post.title}</Text>

          <RenderHtml contentWidth={300} source={{ html: post.description }} />
          <Text style={styles.readMore}>Ler Mais</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.readMore}>Carregando Midia</Text>
      </View>
    );
  }
}
