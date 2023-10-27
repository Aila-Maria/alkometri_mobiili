import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BasicStyle } from './styles/Styles';


export default function App() {

  return (
    
    <View >
      <Calculate/>
    </View>
    
  );
}

function Calculate(){
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [female,setFemale] = useState(0);
  const [male, setMale] = useState(0);
  const [result, setResult] = useState(0);


  //tarkistetaan että tulos ei ole negatiivinen
  let r = result.lenght > 0 ? result : '0';
  r = r.replace(',','.');

  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsLeft = grams - (burning * time);
  let resultM = grams / (weight * 0.7);
  let resultF = grams / (weight * 0.6);
  return(
    <View style={BasicStyle.container}>
      <Text style={BasicStyle.header}>Alcometer</Text>
      <Text style={BasicStyle.label}>Weight</Text>
      <TextInput style={BasicStyle.textInput}
      keyboardType='number-pad'
      placeholder='Enter weight'
      onChangeText={text => setWeight(text)}
      />
      <Text style={BasicStyle.label}>Bottles</Text>
      <TextInput style={BasicStyle.textInput}
      keyboardType='number-pad'
      placeholder='Enter bottles'
      onChangeText={text => setBottles(text)}
      />
      <Text style={BasicStyle.label}>Hours</Text>
      <TextInput style={BasicStyle.textInput}
      keyboardType='number-pad'
      placeholder='Enter hours'
      onChangeText={text => setTime(text)}
      />
      <Text style={BasicStyle.label}>Male</Text>
      <Text style={BasicStyle.label}>Female</Text>
      <Text style={BasicStyle.result}></Text>
      <TouchableOpacity onPress={()=>console.log("Submit")}>
          <Text style={BasicStyle.submit}>SUBMIT</Text>
      </TouchableOpacity> 
    </View>

  )
}


