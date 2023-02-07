import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function HistoryScreen({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        ListHeaderComponent={() => <Text style={styles.header}>History</Text>}
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    list: {
      margin: 50
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  });
