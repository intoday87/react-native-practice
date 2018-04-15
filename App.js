import React, { Component } from 'react';
import { DatePickerIOS, StyleSheet, Text, View } from 'react-native';
import Bananas from './src/Bananas';
import Greeting from './src/Greeting';
import Blink from './src/Blink';
import LotOfStyles from './src/Lot-of-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    alert(newDate);
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Fuck</Text>
        <Bananas />
        <Greeting name="fucking name" />
        <Blink text="blink" />
        <LotOfStyles />
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    );
  }
}
