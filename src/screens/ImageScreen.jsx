import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";
import forest from "../../assets/forest.jpg";
import beach from "../../assets/beach.jpg";
import mountain from "../../assets/mountain.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title={"Forest"} image={forest} />
      <ImageDetails title={"Beach"} image={beach} />
      <ImageDetails title={"Mountain"} image={mountain} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
