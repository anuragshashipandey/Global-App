import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import globoCatalog from "./CatalogDB";
function Catalog({ navigation }) {
  const [catalogData, setCatalogData] = useState(globoCatalog);
  const catalogItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("CatalogDetail", { id: item.modelNumber })
        }
      >
        <View style={styles.product}>
          <View style={styles.product_img}>
            <Image style={styles.thumbnail} source={item.image} />
          </View>
          <View style={styles.product_txt}>
            <Text style={styles.title}>{item.model}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={catalogData}
        renderItem={catalogItem}
        keyExtractor={(item) => item.modelNumber}
      />
    </View>
  );
}

export default Catalog;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 25,
  },
  products: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 20,
    justifyContent: "center",
  },
  product_img: {
    flex: 1,
  },
  thumbnail: {
    height: 260,
    width: "100%",
  },
  product_txt: {
    alignItems: "flex-start",
    paddingLeft: 15,
    flex: 1,
  },
  title: {
    paddingBottom: 10,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    textAlign: "left",
  },
});
