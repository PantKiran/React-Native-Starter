import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend #1",
    },
    {
      name: "Friend #2",
    },
    {
      name: "Friend #3",
    },
    {
      name: "Friend #4",
    },
    {
      name: "Friend #5",
    },
    {
      name: "Friend #6",
    },
    {
      name: "Friend #7",
    },
  ];
  return (
    <View>
      <FlatList
        data={friends}
        renderItem={({ item }) => {
         return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ListScreen;
