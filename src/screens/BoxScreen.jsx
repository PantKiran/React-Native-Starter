import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>child #1</Text>
      <Text style={styles.textTwoStyle}>child #2</Text>
      <Text style={styles.textThreeStyle}>child #3</Text>
    </View>
  );
};

/*
 parent :
alignItem
justifyContent
flexDirection
child:
flex
alignSelf

*/

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    alignItems:'center'
   
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf:'stretch'

  }, 
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    
  },
});

export default BoxScreen;
