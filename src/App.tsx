import React, { useState } from "react";
import { FlatList, StyleSheet, Text , TextInput, View } from "react-native";
import Button from "./components/Button";

function App(){

  const [text , setText] = useState("")
  const [list , setList] = useState([])

const renderElements = ({item}) => <Text>{item}</Text>

function addToList() {
if(!text) {
  return;
}
  setList([...list , text])
}

  return(
    <View style = {styles.container}>
      <Text>Hello Testing</Text>
      <FlatList
      testID="list"
      keyExtractor={(_ , i) => i.toString()} 
      data={list} 
      renderItem={renderElements}/>

      <TextInput 
      testID="input-area"
      placeholder = "add... "
      onChangeText={setText}
      style={styles.input}/>
     <Button title="Add.." onClick={addToList}/>
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container : { flex:1},
  input : {
    backgroundColor: "#e0e0e0" ,
    margin : 10 ,
    padding : 10 ,
    borderRadius:10,

  } ,
})