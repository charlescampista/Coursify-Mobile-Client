import { Text, View } from "react-native";
import WebView from "react-native-webview";
import { Load } from "../../components/Load";
import { styles } from "./styles";
export function Article(props: any) {
  if (props.route.params.post) {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webView}
          originWhitelist={["*"]}
          renderLoading={() => {
            return <Load />;
          }}
          source={{ html: props.route.params.post.content }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Something goes wrong</Text>
      </View>
    );
  }
}
