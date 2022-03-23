import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { Category } from "../../data/@types/Category";
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
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    getCategories(10).then((response) => {
      setCategories(response);
    });
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

  //fetchCategories();
  // fetchPosts();
  // fetchPostsByCategory();
  // fetchPostsByCategory();
  // fetchPostById();
  // fetchAllMedia();
  // fetchSpecificMedia();
  // fetchMediaById();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
