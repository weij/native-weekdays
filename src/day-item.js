import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

// crreate a component called DayItem
class DayItem extends Component {
  render(){
  	return <Text style={this._style()}>
  	  {this.props.day}
  	</Text>
  }

  // a styling function that returns an object, which in turn calls other helper functions
  _style(){
  	return {
  	  color: this._color(),
  	  fontWeight: this._fontWeight(),
  	  fontSize: this._fontSize(),
  	  lineHeight: this._lineHeight()
  	}
  }

  _color(){
  	const opacity = 1 / (this.props.daysUntil === 0 ? 0.5 : this.props.daysUntil);
  	return 'rgba(0,0,0, '+ opacity + ')';
  }

  _fontWeight(){
    const weight = (7 - this.props.daysUntil) * 100;
    return weight.toString();
  }

  _fontSize(){
    return 60 - 6 * this.props.daysUntil;
  }

  _lineHeight(){
    return 70 - 4 * this.props.daysUntil;
  }
}

// export the component and make ready for use
export default DayItem;


