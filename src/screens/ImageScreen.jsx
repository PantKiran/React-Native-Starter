import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title={"Forest"}/>
      <ImageDetails title={"Beach"} />
      <ImageDetails title={"Mountain"} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
