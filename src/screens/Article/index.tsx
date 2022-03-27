import RenderHtml from "react-native-render-html";
import { Text, View } from "react-native";
import WebView from "react-native-webview";
import { Load } from "../../components/Load";
import { styles } from "./styles";
export function Article(props: any) {
  let htmlStyle = `<style>
                        #height-calculator {
                          margin: 0;
                          padding: 0;
                        }
                        #height-calculator {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            margin: 0;
                            padding: 0;
                        }
                        body {
                          width:100%;
                        }
                        h2 {
                          font-size: 48px;
                          text-align: center;
                        }
                        p {
                          font-size: 18px;
                          color: #999
                        }
                        h3 {
                          font-size: 32px
                        }
                        img {
                          width:98%;
                        }
                        td {
                          display: block !important;
                          width: 95% !important;
                        }
                        img {
                          width:98%;
                        }
                        hr {
                          width: 98%;
                        }
                        ol li ol li ol li {
                          position: relative; right: 85px;
                        }
                        ul {
                          width: 98%,
                          margin-left: -25px;
                        }
                        li {
                          width: 98%;
                        }
                        .tabs {
                          display: none;
                        }
                        .tabs > li {
                          display: none;
                        }
                        .tabs-content {
                          padding: 0;
                          list-style-type: none;
                        }
                        tr {
                          display: flex;
                          flex-direction: column;
                        }
               </style>`;

  if (props.route.params.post) {
    return (
      <View style={styles.container}>
        <RenderHtml
          contentWidth={300}
          source={{ html: props.route.params.post.title }}
        />
        <WebView
          style={styles.webView}
          originWhitelist={["*"]}
          renderLoading={() => {
            return <Load />;
          }}
          source={{ html: htmlStyle + props.route.params.post.content }}
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
