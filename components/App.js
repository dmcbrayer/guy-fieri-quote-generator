import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { fetchQuote } from '../actions'
import Quote from './Quote'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content" />
        <View>
          <Text style={styles.headerText}>Welcome to the Guy Fieri Quote Generator</Text>
          <TouchableOpacity
            onPress={() => this._getQuote()}
            style={styles.button} >
            <Text style={styles.buttonText}>Get a Quote</Text>
          </TouchableOpacity>
          { this.props.quote === null ? null : <Quote quote={this.props.quote} /> }
        </View>
      </View>
    );
  }

  _getQuote = () => {
    this.props.fetchQuote()
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

const mapStateToProps = (state) => {
  return {
    quote: state.quote
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: () => dispatch(fetchQuote())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
