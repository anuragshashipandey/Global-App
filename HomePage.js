import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

function HomePage({ navigation }) {
  let key = "";
  const [dataloading, finishLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  const getNews = async () => {
    try {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=Apple&from=2021-09-25&sortBy=popularity&apiKey=${key}`
      );
      let news = await res.json();

      setNewsData(news.articles);
      finishLoading(false);
    } catch (err) {
      console.log(err);
    }
    // .then((res) => res.json())
    // .then((json) => setNewsData(json.articles))
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNews();
  }, []);
  const storyItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("NewsDetail", {
            url: item.url,
            item: item,
          });
        }}
      >
        <View style={styles.listing}>
          <Text style={styles.title}>{item.title}</Text>
          <Image
            style={styles.thumbnail}
            source={{ uri: item.urlToImage, item: item }}
          />
          <Text style={styles.blurb}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      {dataloading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={newsData}
          renderItem={storyItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  title: {
    padding: 10,
  },
  thumbnail: {
    height: 100,
    width: "98%",
    // fontWeight: "bold",
  },
  listing: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  blurb: {
    fontStyle: "italic",
  },
});

export default HomePage;
