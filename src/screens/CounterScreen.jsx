import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const reducer = (state, action) => {
  switch (action.type) {
    case "increase": {
      return { ...state, count: state.count + action.payload };
    }
    case "decrease": {
      return { ...state, count: state.count + action.payload };
    }
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: -1 })}
      />
      <Text>Current Count:{state.count}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default CounterScreen;
