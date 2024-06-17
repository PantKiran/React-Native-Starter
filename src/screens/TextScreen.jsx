import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <Text>Enter Password:</Text>
      
      <TextInput
         
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      {password.length < 5 ? (
        <Text>password must be longer than 5 characters </Text>
      ) : null}
      <Text>My Name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "Black",
    borderWidth: 1,
  },
});

export default TextScreen;
