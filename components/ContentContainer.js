import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchQuote } from '../actions'
import Quote from './Quote'

class ContentContainer extends React.Component {
  render() {
    const { quote, fetchQuote, isLoading } = this.props
    return(
      <View>
        <Text style={styles.headerText}>Welcome to the Guy Fieri Quote Generator</Text>
        <TouchableOpacity
          onPress={fetchQuote}
          style={styles.button} >
          <Text style={styles.buttonText}>Get a Quote</Text>
        </TouchableOpacity>
        <ActivityIndicator 
          animating={isLoading} 
          style={styles.loadingIndicator} />
        { quote ? <Quote quote={quote} /> : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#D91C5C',
    padding: 10,
    borderRadius: 3
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  loadingIndicator: {
    marginTop: 5,
    marginBottom: 10
  }
});

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    isLoading: state.isLoading
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
)(ContentContainer);