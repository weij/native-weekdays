import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';


class Weekdays extends Component {
  render(){
    return <View style={style.container}>
      <Text>
        Days of Week
      </Text>
    </View>
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('weekdays', () => Weekdays);

