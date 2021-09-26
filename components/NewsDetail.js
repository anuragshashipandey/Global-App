import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";

function NewsDetail({ route, navigation }) {
  const [dataloading, finishLoading] = useState(true);
  const [allPostData, setAllPostData] = useState([]);
  const { url, item } = route.params;
  const [selectedPost, setSelectedPost] = useState();
  // const selectedPost = allPostData.find((post) => post.url == url);
  // const getNews = async () => {
  //   try {
  //     let res = await fetch(
  //       `https://newsapi.org/v2/everything?q=Apple&from=2021-09-25&sortBy=popularity&apiKey=${key}`
  //     );
  //     let news = await res.json();
  //     setAllPostData(news.articles);
  //     finishLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   .then((res) => res.json())
  //   .then((json) => setAllPostData(json.articles))
  //   .catch((err) => console.log(err))
  //   .finally(() => finishLoading(false));
  // };
  useEffect(() => {
    //getNews();
    setSelectedPost(item);
    finishLoading(false);
  }, [item]);
  return (
    <View style={styles.container}>
      <TouchableOpacity styles={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btn_txt}>Go Back</Text>
      </TouchableOpacity>
      {dataloading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Text style={styles.title}>{selectedPost.title}</Text>
          <Image
            style={styles.story_img}
            source={{ uri: selectedPost.urlToImage }}
          />
          <Text style={styles.blurb}>{selectedPost.description}</Text>
          <Text style={styles.content}>{selectedPost.content}</Text>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  btn: {
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  btn_txt: {
    fontWeight: "bold",
  },
  story_img: {
    height: 300,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
  },
  blurb: {
    fontStyle: "italic",
    fontSize: 14,
    padding: 20,
  },
  content: {
    flex: 1,
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default NewsDetail;
