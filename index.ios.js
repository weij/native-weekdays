import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';
import DayItem from './src/day-item';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Weekdays extends Component {
  render(){
    return <View style={style.container}>
      <Text>
        Days of Week
      </Text>
      { this.renderDays() }
    </View>
  }

  renderDays(){
    return DAYS.map((day) => <DayItem day={day}/> )
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

