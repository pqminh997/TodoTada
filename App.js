import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import RootStack from './src/navigation/index'

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
