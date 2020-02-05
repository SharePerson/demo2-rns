/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swipe-image';

import {getImages} from '../../api/api';

export default class ReactNativeSwipeImage extends Component {
  state = {images: []};

  static navigationOptions = {
    title: 'React Native Swipe Image',
  };

  componentDidMount() {
    const images = getImages();
    const formattedImages = images.map(image => {
      return {
        url: image.imageUrl,
        name: image.id,
      };
    });
    this.setState({...this.state, images: formattedImages});
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Swiper
          images={this.state.images}
          imageHeight={300}
          textColor="#fff"
          swipeBottom={e => console.log('swipe bottom: ', e)}
          swipeTop={e => console.log('swipe top: ', e)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});
