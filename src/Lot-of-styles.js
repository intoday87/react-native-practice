import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default function LotOfStyles() {
  return (
    <View>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>big blue</Text>
      <Text style={[styles.bigBlue, styles.red]}>big blue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then big blue</Text>
    </View>
  );
}
