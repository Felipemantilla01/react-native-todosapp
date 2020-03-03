import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'

const addItem = ({submitHandler}) => {

    const [text, setText] = useState('') 
    

    return (
        <View style={{marginBottom:20}}>
            <TextInput
            style={styles.input}
            placeholder='e.g. New task '
            onChangeText={(value)=>setText(value)}
            />
            {/* <Text>{text}</Text> */}
            <Button style={{width:300}} color="coral" title="Add todo" onPress={()=>submitHandler(text)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:10,
        padding:20,
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:'coral',
        borderRadius:10,
        width:300
    }
})

export default addItem
