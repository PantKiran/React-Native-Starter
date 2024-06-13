import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetails = ({ title, image,score}) => {
  return (
    <View>
      <Image source={image} />
      
      <Text>{title} </Text>
      <Text>Image Score - {score}</Text>
      
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageDetails;
