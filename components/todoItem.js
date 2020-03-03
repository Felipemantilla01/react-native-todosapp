import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const todoItem = ({item, pressHandler}) => {
    
    return (
        <TouchableOpacity onPress={()=>pressHandler(item)}>
            <View style={styles.item}>
                <Text>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
      width:300
    }
  });

export default todoItem
