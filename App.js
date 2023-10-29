import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BasicStyle, DarkStyle, Colors } from './styles/Styles';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import { Alert } from 'react-native';



export default function App() {

  return (
      <View >
        <Calculate />
      </View>

  );
}

function Calculate() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [sex, setSex] = useState('Male');
  const [promilles, setPromilles] = useState('');
  const [resultCol,setResultCol] = useState('');

  const [isEnabled, setIsEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  

  const currentStyle = darkMode ? DarkStyle : BasicStyle;

  const createAlert = () => Alert.alert('Alert','Enter weight', [{text:'OK', onPress: () => ('Ok Pressed')},
  ]);

  const AlcoholLevel = () =>{
    
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let resultCol;
    
    

    if (weight == 0){
      createAlert();
    }
    else {
      if(sex == 'Male'){
        result = gramsLeft / (weight * 0.7);
      }
      else{
        result = gramsLeft / (weight * 0.6);

      }
      if (result < 0){
        result = 0
      }
       
        if(result < 0.5){
           resultCol = Colors.color1;
        } else if (result >= 0.5 && result <= 1.1){
           resultCol = Colors.color2;
        } else{
           resultCol = Colors.color3;
        }

        
      setPromilles(result.toFixed(2));
      setResultCol(resultCol);
    }
  };





  return (
    <ScrollView>
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
        value = {weight}
        onChangeText={v => setWeight(v)}
      />

      <Text style={currentStyle.label}>Bottles</Text>
        <NumericInput
        value={bottles}
        onChange={v => setBottles(v)}
        minValue={0}
        maxValue={10}
        borderColor={currentStyle.numBorColor}
        leftButtonBackgroundColor={currentStyle.lBBColor}
        rightButtonBackgroundColor={currentStyle.rBBColor}
        iconStyle={currentStyle.iStyleColor}
        rounded={true}
        containerStyle={currentStyle.numBackgroundColor}
        />

      <Text style={currentStyle.label}>Hours</Text>
      <NumericInput
        value={time}
        onChange={v => setTime(v)}
        minValue={0}
        maxValue={10}
        borderColor={currentStyle.numBorColor}
        leftButtonBackgroundColor={currentStyle.lBBColor}
        rightButtonBackgroundColor={currentStyle.rBBColor}
        iconStyle={currentStyle.iStyleColor}
        rounded={true}
        containerStyle={currentStyle.numBackgroundColor}
        />

      <RadioButton.Group value={sex} onValueChange={v => setSex(v)}>
      <View style={currentStyle.radioButton}>
        <RadioButton value = 'Male'/>
        <Text style={currentStyle.label}>Male</Text>
        </View>
        <View style={currentStyle.radioButton}>
        <RadioButton value = 'Female'/>
        <Text style={currentStyle.label}>Female</Text>
        </View>
      </RadioButton.Group>

      <Text style={{...currentStyle.result, color: resultCol}}>{promilles}</Text>

      <TouchableOpacity onPress={AlcoholLevel}>
        <Text style={currentStyle.submit}>Calculate</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}



