import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  return (
    
    <View style={styles.container}>
      <Calculate/>
      <Text></Text>
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

  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsLeft = grams - (burning * time);
  let resultM = grams / (weight * 0.7);
  let resultF = grams / (weight * 0.6);
  return(
    <View style={styles.container}>
      <Text>Alcometer</Text>
      <Text>Weight</Text>
      <TextInput
      keyboardType='number-pad'
      placeholder='Enter weight'
      onChangeText={text => setWeight(text)}
      />
      <Text>Bottles</Text>
      <TextInput
      keyboardType='number-pad'
      placeholder='Enter bottles'
      onChangeText={text => setBottles(text)}
      />
      <Text>Hours</Text>
      <TextInput
      keyboardType='number-pad'
      placeholder='Enter hours'
      onChangeText={text => setTime(text)}
      />
      <Text>Male</Text>
      <Text>Female</Text>
      <Text>Result</Text>
      <Button title='calculate'
      onPress={() => setResult(resultM)}/>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
