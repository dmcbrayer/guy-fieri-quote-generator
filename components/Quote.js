import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quote = ({quote}) => (
  <View style={styles.quote}>
    <Text style={styles.bodyText}>{quote}</Text>
  </View>
)

const styles = StyleSheet.create({
  bodyText: {
    color: '#000',
    textAlign: 'center'
  },
  quote: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 10
  }
});

export default Quote
