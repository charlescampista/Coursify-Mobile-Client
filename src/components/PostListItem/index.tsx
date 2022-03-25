import { Text, View, Image } from "react-native";
import { Post } from "../../data/@types/Post";
import { WebView } from "react-native-webview";
import { styles } from "./styles";
import RenderHtml from "react-native-render-html";
import { useState, useEffect } from "react";
import { getMediaPieceById } from "../../services/mediaServices";
import { Media } from "../../data/@types/Media";
type Props = {
  post: Post;
};

export function PostListItem({ post, ...rest }: Props) {
  const [media, setMedia] = useState<Media>();
  const [requestDone, setRequestDone] = useState<Boolean>(false);

  useEffect(() => {
    getMediaPieceById(post.featuredMedia).then((response) => {
      setMedia(response);
      setRequestDone(true);
    });
  }, []);

  if (requestDone) {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: media?.details.medium.source_url,
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{post.title}</Text>
        {/* <WebView
            style={styles.webView}
            originWhitelist={["*"]}
            source={{ html: post.description }}
          /> */}
        <RenderHtml contentWidth={300} source={{ html: post.description }} />
        <Text style={styles.readMore}>Ler Mais</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.readMore}>Carregando Midia</Text>
      </View>
    );
  }
}
