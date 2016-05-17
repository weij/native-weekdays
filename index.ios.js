import React, { Component, View, Text, StyleSheet, AppRegistry } from 'react-native';


class Weekdays extends Component {
  render(){
    return <View>
      <Text>
        Days of Week
      </Text>
    </View>
  }
}

AppRegistry.registerComponent('weekdays', () => Weekdays);

