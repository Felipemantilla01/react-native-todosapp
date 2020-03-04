import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddItem from './components/addItem'
import * as uuid from 'uuid'

export default function App() {
  
  
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (item) => {
    let todosArray = [...todos.filter((todo)=>{
      if(todo.key !== item.key){return item}
    })]
    
    setTodos(todosArray)
  }

  const submitHandler = (text) =>{
    if(text.length>3){
      let todo = {
        text,
        key:Math.random().toString()
      }
      let todosArray = [...todos, todo]
      setTodos(todosArray)
    }else{
      Alert.alert('Oopss!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: ()=> console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      console.log('dissmis')
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <AddItem submitHandler={submitHandler} />
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return (
              <TodoItem item={item} pressHandler={pressHandler} />
            )
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
