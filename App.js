import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [numbers, setNumbers] = useState({num1: 0, num2: 0});
  const [result, setResult] = useState(0);
  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);

  const buttonPressed = (operator) => {
    if (operator == "+") {
      setResult(parseInt(numbers.num1) + parseInt(numbers.num2));
      setData([...data, 
        {key: numbers.num1 + ' ' + operator + ' ' + numbers.num2 + ' = ' + 
          (parseInt(numbers.num1) + parseInt(numbers.num2))
        }]);
    }
    else if (operator == "-") {
      setResult(numbers.num1 - numbers.num2);
      setData([...data, 
        {key: numbers.num1 + ' ' + operator + ' ' + numbers.num2 + ' = ' + 
          (numbers.num1 - numbers.num2)
        }]);
    };
    setReady(true);
    setNumbers({num1: 0, num2: 0});
  }; 

  return (
    <View style={styles.container}>

      <View style={styles.subcontainer1}>

        {ready && <Text>Result: {result}</Text>}

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

        <View style={styles.operators}>
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
        </View>

      </View>

      <View style={styles.subcontainer2}>
        
        {ready && <Text>History:</Text>}
       
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
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

  subcontainer1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
    marginBottom: 10
  },

  subcontainer2: {
    flex: 1
  },

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 5,
    margin: 10
  },

  operators : {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button : {
    width: '20%',
    margin: 10
  },
});
