import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import {ScrollView, FlatList} from 'react-native';


export default function App() {
  const [userInput, changeInput] = useState('')
  const [userText, changeText] = useState([])

  const handleChange = (s)=>{
    changeInput(s)
  }
  const handleSubmit = ()=>{
    changeText((inputText)=>[
      ...inputText,
      {text: userInput, key: Math.random().toString()}
    ])
    changeInput('')
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginTop: 50, display:'flex', flexDirection:'row',justifyContent: "space-around"}}>
        <TextInput value={userInput} style={{borderWidth:2,width: 200, height: 40}}placeholder='hiihh' name='input' onChangeText={handleChange}/>
        <View style={{ borderWidth: 2, width: 100, height: 40, borderColor: 'gray', borderRadius: 5 }}>
            <Button title="Search" color="gray" accessibilityLabel="Learn more about this purple button" onPress={handleSubmit}/>
        </View>
      </View >

      <View style={{flex: 16, marginTop: 20}}>
        <FlatList data={userText} renderItem={(eachItem)=>{
          return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{alignContent: 'center', padding:5, backgroundColor:'pink', color:'white', borderRadius: 5, marginTop: 5, height: 100}}>
                {eachItem.item.text}
              </Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.key}
        alwaysBounceVertical={false}
        />


      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});