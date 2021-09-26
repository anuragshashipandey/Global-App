import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import img1 from "../assets/home-image-2.jpg";
import img2 from "../assets/our-story-image-2.jpg";
import img3 from "../assets/our-story-image-3.jpg";

const txt1 =
  "Globomantics is a news aggregator service developed by students of IIT Kharagpur. It presents a continuous flow of links to articles organized from thousands of publishers and magazines.";

const txt2 = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={img1} style={{ width: "100%", height: 300 }} />
        <Text style={styles.heading}>We are different</Text>
        <Text style={styles.text}>{txt1}</Text>
        <Image source={img2} style={{ width: "100%", height: 300 }} />
        <Text style={styles.heading}>Leaders in our Field</Text>
        <Text style={styles.text}>{txt2}</Text>
        <Image source={img3} style={{ width: "100%", height: 300 }} />
        <Text style={styles.heading}>We are experts</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    paddingTop: 5,
  },
  text: {},
});
