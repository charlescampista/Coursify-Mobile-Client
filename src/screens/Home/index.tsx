import { Text, View } from "react-native";
import { getCategories } from "../../services/categoryServices";
import {
  getAllMedia,
  getMediaPieceById,
  getSpecificMedia,
} from "../../services/mediaServices";
import {
  getPostById,
  getPosts,
  getPostsByCategory,
} from "../../services/postServices";

import { styles } from "./styles";

export function Home() {
  async function fetchCategories() {
    let categories = await getCategories(2);
    console.log("Categories: " + categories.data);
  }

  async function fetchPosts() {
    let posts = await getPosts(2);
    console.log("Posts: " + posts.data);
  }

  async function fetchPostsByCategory() {
    let posts = await getPostsByCategory(1288, 2);
    console.log("PostsByCategory: " + posts.data);
  }

  async function fetchPostById() {
    let posts = await getPostById(3446);
    console.log("SinglePost: " + posts.data);
  }

  async function fetchAllMedia() {
    let media = await getAllMedia(2);
    console.log("Media Pieces: " + media.data);
  }

  async function fetchSpecificMedia() {
    let media = await getSpecificMedia([5052, 5050, 5048, 5047, 5046, 5043], 3);
    console.log("Specific Media Pieces: " + media.data);
  }

  async function fetchMediaById() {
    let media = await getMediaPieceById(5050);
    console.log("Media Piece: " + media.data);
  }

  fetchCategories();
  fetchPosts();
  fetchPostsByCategory();
  fetchPostsByCategory();
  fetchPostById();
  fetchAllMedia();
  fetchSpecificMedia();
  fetchMediaById();

  return (
    <View style={styles.container}>
      <Text>It Works</Text>
    </View>
  );
}
