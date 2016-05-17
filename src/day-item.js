import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class DayItem extends Component {
  render(){
  	return <Text style={this._style()}>
  	  {this.props.day}
  	</Text>
  }

  _style(){
  	return {
  	  color: this._color()
  	}
  }

  _color(){
  	const opacity = 1 / (this.props.daysUntil === 0 ? 0.5 : this.props.daysUntil);
  	return 'rgba(0, 0, 0, '+ opacity + ')';
  }
}
