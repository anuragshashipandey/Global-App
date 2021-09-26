import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import globoCatalog from "./CatalogDB";

function CatalogDetail({ route, navigation }) {
  const [catalogData, setCatalogData] = useState(globoCatalog);
  const { id } = route.params;

  const selectedProduct = catalogData.find((post) => post.modelNumber === id);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btn_txt}>Go Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.model}>{selectedProduct.model} </Text>
        <Image style={styles.product_img} source={selectedProduct.image} />
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Quote", {
            model: selectedProduct.model,
            modelNumber: selectedProduct.modelNumber,
          });
        }}
      >
        <Text style={styles.btn_txt}>Submit Quote</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CatalogDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 100,
  },
  btn: {
    padding: 20,
  },
  btn_txt: {
    fontWeight: "bold",
  },
  model: {
    paddingBottom: 15,
  },
  product_img: {
    height: 250,
    width: "100%",
  },
  description: {
    paddingTop: 10,
  },
});
