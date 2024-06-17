import React, { useState } from 'react'
import { Text, TextInput, View ,StyleSheet} from 'react-native'

const TextScreen = () => {
   const [name,setName]= useState('')
  return (
   <View>
    <Text>Enter Name:</Text>
    <TextInput value={ name} onChangeText={(newValue)=>setName(newValue)} autoCapitalize='none' autoCorrect={false} style={styles.input} />
    <Text>My Name is: {name}</Text>

   </View>
  )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'Black',
        borderWidth:1
    }
})

export default TextScreen