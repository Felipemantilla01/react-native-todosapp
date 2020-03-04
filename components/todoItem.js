import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const todoItem = ({item, pressHandler}) => {
    
    return (
        <TouchableOpacity onPress={()=>pressHandler(item)}>
            <View style={styles.item}>
            <Ionicons name="ios-trash" size={20} color="#333" />
                <Text style={styles.textItem}>{item.text}</Text>
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
      width:300,
      flexDirection:'row',
      
    },
    textItem:{
        marginLeft:10
    }
  });

export default todoItem
