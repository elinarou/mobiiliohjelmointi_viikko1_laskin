import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [numbers, setNumbers] = useState({num1: 0, num2: 0});
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const buttonPressed = (operator) => {
    let res = 0;

    if (operator == "+") {
      res = parseInt(numbers.num1) + parseInt(numbers.num2);
    }
    else if (operator == "-") {
      res = numbers.num1 - numbers.num2;
    };
    
    setResult(res);
    setData([...data, {key: `${numbers.num1} ${operator} ${numbers.num2} = ${res}`}]);
    setNumbers({num1: 0, num2: 0});
  }; 
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Result: {result}</Text>
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
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button 
            onPress={() => buttonPressed("+")} 
            title="+"
          />
        </View>
        <View style={styles.button}>
          <Button 
            onPress={() => buttonPressed("-")} 
            title="-"
          />
        </View>
        <View style={styles.button}>
          <Button 
            onPress={() => navigation.navigate("History", {data})}
            title="History"
          />
        </View>
      </View>
    </View>
  );
};

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
      borderWidth: 1,
      padding: 5,
      margin: 10
    },
  
    buttons : {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    button : {
      width: '20%',
      margin: 10
    },
  });
  