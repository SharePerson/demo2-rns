import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Button
          title="Swipe using FlatList"
          onPress={() => this.props.navigation.navigate('RNSwiperClassic')}
        />
        <Button
          title="Using react-native-swiper Plugin"
          onPress={() => this.props.navigation.navigate('RNSwiper')}
        />
        <Button
          title="Using react-native-swipe-image Plugin"
          onPress={() => this.props.navigation.navigate('RNSwipeImage')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
