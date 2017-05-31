import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { fetchQuote } from './apiUtils'

class App extends React.Component {
  state = {
    quote: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to the Guy Fieri Quote Generator</Text>
        <Button
          color="#D91C5C"
          onPress={() => this._getQuote() }
          title="Get a random Guy Fieri Quote!" />

        <Text style={styles.bodyText}>{this.state.quote}</Text>
      </View>
    );
  }

  _getQuote = async () => {
    const quote = await fetchQuote()
    this.setState({ quote: quote })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05224B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24
  },
  bodyText: {
    color: '#fff'
  }
});

Expo.registerRootComponent(App);
