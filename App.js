import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './src/Bananas';
import Greeting from './src/Greeting';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
    <Text>Fuck</Text>
    <Bananas />
    <Greeting name="fucking name" />
  </View>
);
