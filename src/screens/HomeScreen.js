import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const {
    navigation: { navigate },
  } = props;
  return (
    <View>
      <Text style={styles.text}>First react native app</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />
      <TouchableOpacity onPress={() => navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
