import React from 'react'
import { Text, TextInput, View ,StyleSheet} from 'react-native'

const TextScreen = () => {
  return (
   <View>
    <Text>Enter Name:</Text>
    <TextInput autoCapitalize='none' autoCorrect={false} style={styles.input} />
    <Text>Name {'kiran'}</Text>
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