/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {getPersons} from '../../api/api';

export default class ReactNativeSwipeListView extends Component {
  state = {persons: []};

  static navigationOptions = {
    title: 'React Native Swipe List View',
  };

  deletePerson(personId) {
    let {persons} = this.state;
    persons = persons.filter(person => person.id !== personId);
    this.setState({...this.state, persons});
  }

  componentDidMount() {
    const persons = getPersons();
    this.setState({...this.state, persons});
  }

  renderPerson(person) {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.avatar} source={{uri: person.avatarUrl}} />
        <Text style={styles.text}>{person.name}</Text>
      </View>
    );
  }

  renderHiddenItem(person) {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => this.deletePerson(person.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <SwipeListView
          data={this.state.persons}
          renderItem={({item}) => this.renderPerson(item)}
          renderHiddenItem={({item}) => this.renderHiddenItem(item)}
          rightOpenValue={-75}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
  deleteButton: {
    alignSelf: 'flex-end',
    width: 75,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginVertical: 3,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
