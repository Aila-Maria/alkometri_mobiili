import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BasicStyle, DarkStyle } from './styles/Styles';


export default function App() {

  return (
    <ScrollView>
      <View >
        <Calculate />
      </View>
    </ScrollView>

  );
}

function Calculate() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [sex, setSex] = useState('Male');
  const [result, setResult] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  const currentStyle = darkMode ? DarkStyle : BasicStyle;


  //tarkistetaan että tulos ei ole negatiivinen
  let r = result.lenght > 0 ? result : '0';
  r = r.replace(',', '.');

  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsLeft = grams - (burning * time);
  let resultM = grams / (weight * 0.7);
  let resultF = grams / (weight * 0.6);




  return (
    <View style={currentStyle.container}>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(prev => !prev)}
          thumbColor={isEnabled ? BasicStyle.thumbEnabledColor : BasicStyle.thumbDisabledColor}
          trackColor={{ false: BasicStyle.trackEnabledCOlor, true: BasicStyle.trackDisabledColor }}
          onChange={() => setDarkMode(!darkMode)}
        />
      <Text style={currentStyle.header}>Alcometer</Text>
      <Text style={currentStyle.label}>Weight</Text>
      <TextInput style={currentStyle.textInput}
        keyboardType='number-pad'
        placeholder='Enter weight'
        onChangeText={text => setWeight(text)}
      />
      <Text style={currentStyle.label}>Bottles</Text>
      <TextInput style={BasicStyle.textInput}
        keyboardType='number-pad'
        placeholder='Enter bottles'
        onChangeText={text => setBottles(text)}
      />
      <Text style={currentStyle.label}>Hours</Text>
      <TextInput style={BasicStyle.textInput}
        keyboardType='number-pad'
        placeholder='Enter hours'
        onChangeText={text => setTime(text)}
      />
      <Text style={currentStyle.label}>Male</Text>
      <Text style={currentStyle.label}>Female</Text>
      <Text style={currentStyle.result}></Text>
      <TouchableOpacity onPress={() => console.log("Submit")}>
        <Text style={currentStyle.submit}>Calculate</Text>
      </TouchableOpacity>
    </View>

  )
}



