import RenderHtml from "react-native-render-html";
import { Text, View } from "react-native";
import WebView from "react-native-webview";
import { Load } from "../../components/Load";
import { styles } from "./styles";
export function Article(props: any) {
  let htmlStyle = `<style>
                        
                        body {
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                        }
                        h2 {
                          font-size: 3em;
                          text-align: center;
                          color: #2AB598
                        }
                        p {
                          font-size: 2.3em;
                          color: #999
                        }
                        h3 {
                          font-size: 2.5em;
                          text-align: center;
                          color: #2AB598
                        }
                        td {
                          display: block !important;
                          width: 95% !important;
                        }
                        hr {
                          width:100%;
                          margin: 1em;
                        }
                        img {
                          width: 100%
                        }
                        a {
                          font-size: 2.3em;
                          color: #FDA506;
                        }

                        a {
                          font-size: 2.3em;
                          color: #FDA506;
                        }



                        ol li ol li ol li {
                          position: relative; right: 2.3em;
                        }
                        ul {
                          width: 98%,
                          margin-left: -25px;
                        }
                        li {
                          width:100%;
                          margin: 1em;
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

  const titleStyle = `
    <style>
    .title {
      display: flex;
      color: #2ab598;
      font-size: 3.7em;
      font-family: "Roboto";
      font-weight: bold;
      margin: 0.8em 0.5em ;
      text-align: center;
    }
    </style>
  `;
  const titleTag = `
    <span class="title">
    ${props.route.params.post.title}
    </span>
  `;

  if (props.route.params.post) {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webView}
          originWhitelist={["*"]}
          renderLoading={() => {
            return <Load />;
          }}
          source={{
            html:
              htmlStyle +
              titleStyle +
              titleTag +
              props.route.params.post.content,
          }}
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
