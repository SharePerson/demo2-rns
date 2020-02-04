import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Button
          title="React Native Swiper Classic"
          onPress={() => this.props.navigation.navigate('RNSwiperClassic')}
        />
        <Button
          title="React Native Swiper Plugin"
          onPress={() => this.props.navigation.navigate('RNSwiper')}
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
