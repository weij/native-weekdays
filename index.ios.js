import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';
import Moment from 'moment';
import DayItem from './src/day-item';


// Create a component called Weekdays
class Weekdays extends Component {
  render(){
    return <View style={style.container}>
      <Text>
        Days of Week
      </Text>
      { this._renderDays() }
    </View>
  }

  _renderDays(){
    let dayItems = [];

    for(let i = 0; i < 7; i++){
      let day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem key={i} day={day} daysUntil={i} />
      )
    }
    return dayItems
  }

}

// styling Weekdays component
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// show this component on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);

