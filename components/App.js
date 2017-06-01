import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import ContentContainer from './ContentContainer'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content" />
        <ContentContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05224B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
});

export default App
