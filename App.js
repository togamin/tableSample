import React from 'react';
import { StyleSheet, View } from 'react-native';
import TableScreen from './screen/TableScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <TableScreen></TableScreen>
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
