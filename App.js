import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [numbers, setNumbers] = useState({num1: 0, num2: 0});
  const [result, setResult] = useState(0);
  const [ready, setReady] = useState(false);

  const buttonPressed = (operator) => {
    if (operator == "+") {
      setResult(parseInt(numbers.num1) + parseInt(numbers.num2));
    }
    else if (operator == "-") {
      setResult(numbers.num1 - numbers.num2);
    }
    setReady(true); 
  }; 

  return (
    <View style={styles.container}>
      <View>
        {ready == true && <Text>Result: {result}</Text>}
      </View>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setNumbers({...numbers, num1: text})} 
        value={numbers.num1}
        keyboardType="numeric" 
      />
      <TextInput 
        style={styles.input} 
        onChangeText={text => setNumbers({...numbers, num2: text})} 
        value={numbers.num2}
        keyboardType="numeric" 
      />
      <View style={styles.button}>
        <Button
          onPress={() => buttonPressed("+")} 
          title="+"
        />
        <Button
          onPress={() => buttonPressed("-")} 
          title="-"
        />
      </View>
      <StatusBar style="auto" />
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

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },

  button : {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  }
});
