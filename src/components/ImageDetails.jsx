import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetails = ({ title, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageDetails;
