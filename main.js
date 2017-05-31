import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { fetchQuote } from './apiUtils'

class App extends React.Component {
  state = {
    quote: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content" />
        <Text style={styles.headerText}>Welcome to the Guy Fieri Quote Generator</Text>
        <TouchableOpacity
          onPress={() => this._getQuote()}
          style={styles.button} >
          <Text style={styles.buttonText}>Get a Quote</Text>
        </TouchableOpacity>
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
    padding: 15
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
  },
  bodyText: {
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#D91C5C',
    padding: 10,
    borderRadius: 3
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
});

Expo.registerRootComponent(App);
