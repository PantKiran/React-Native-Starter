import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_INCREMENT = 20;
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
 const setColor = (color,change)=>{
         if(color==='red'){
            if(red+change>255 || red+change<0) {
                return
            }
            else{
                setRed(red+change)
            }
         }
 }

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor('red',COLOR_INCREMENT)}
        onDecrease={() => setColor('red',-1*COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
      />
      <View
        style={{
          margin: 60,
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green},${blue})`,
        }}
      ></View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
