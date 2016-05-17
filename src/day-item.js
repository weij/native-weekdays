import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class DayItem extends Component {
  render(){
  	return <Text style={style.day}>
  	  Sunday
  	</Text>
  }
}

const style = StyleSheet.create({
  day: {
  	fontSize: 18,
  	color: '#0000FF'
  }
});