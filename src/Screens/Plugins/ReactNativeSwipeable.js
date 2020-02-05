/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Swipeable from 'react-native-swipeable';

import {getPersons} from '../../api/api';

export default class ReactNativeSwipeable extends Component {
  state = {persons: []};

  static navigationOptions = {
    title: 'React Native Swipeable',
  };

  componentDidMount() {
    const persons = getPersons();
    this.setState({...this.state, persons});
  }

  renderRightButtons() {
    return [
      <View style={styles.deleteContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>,
    ];
  }

  renderPersons() {
    if (this.state.persons.length > 0) {
      return this.state.persons.map(person => {
        return (
          <View key={person.id} style={styles.itemContainer}>
            <Swipeable
              rightButtons={this.renderRightButtons()}
              rightButtonWidth={75}>
              <View style={styles.swipeable}>
                <Image style={styles.avatar} source={{uri: person.avatarUrl}} />
                <Text style={styles.text}>{person.name}</Text>
              </View>
            </Swipeable>
          </View>
        );
      });
    }

    return <></>;
  }

  render() {
    return <View style={styles.mainContainer}>{this.renderPersons()}</View>;
  }
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  itemContainer: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginVertical: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
  swipeable: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  deleteContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
