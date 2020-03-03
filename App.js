import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddItem from './components/addItem'

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
    let todo = {
      text,
      key:4
    }
    let todosArray = [...todos, todo]

    setTodos(todosArray)
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem submitHandler={submitHandler}/>
      <FlatList 
      data = {todos}
      renderItem = {({item})=>{
        return(
          <TodoItem item={item} pressHandler={pressHandler} />
        )
      }}
      />
      
      
    </View>
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
