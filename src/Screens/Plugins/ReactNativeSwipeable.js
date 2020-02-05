/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Swipeable from 'react-native-swipeable';

import {getPersons} from '../../api/api';

const rightButtons = [
  <TouchableOpacity>
    <Text>Delete</Text>
  </TouchableOpacity>,
];

export default class ReactNativeSwipeable extends Component {
  state = {persons: []};

  static navigationOptions = {
    title: 'React Native Swipeable',
  };

  componentDidMount() {
    const persons = getPersons();
    this.setState({...this.state, persons});
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Swipeable rightButtons={rightButtons} rightButtonWidth={100}>
          <Text>Swipeable Content</Text>
        </Swipeable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});
