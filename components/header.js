import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todos App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:'100%',           
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      }
})

export default header
