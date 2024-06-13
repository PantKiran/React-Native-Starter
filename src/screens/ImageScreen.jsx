import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";
import forest from "../../assets/forest.jpg";
import beach from "../../assets/beach.jpg";
import mountain from "../../assets/mountain.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title={"Forest"} image={forest} score={9} />
      <ImageDetails title={"Beach"} image={beach} score={7}/>
      <ImageDetails title={"Mountain"} image={mountain} score={8}/>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
