import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>First react native app</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor:'red',
    textAlign:'center'
  },
});

export default HomeScreen;
