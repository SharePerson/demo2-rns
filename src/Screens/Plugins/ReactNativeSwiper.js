/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Swiper from 'react-native-swiper';

import {getImages} from '../../api/api';

export default class ReactNativeSwiper extends Component {
  state = {images: []};

  static navigationOptions = {
    title: 'React Native Swiper Plugin',
  };

  componentDidMount() {
    const images = getImages();
    this.setState({...this.state, images});
  }

  renderImages() {
    if (this.state.images.length > 0) {
      return this.state.images.map(image => (
        <View key={image.id} style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: image.imageUrl}} />
        </View>
      ));
    }

    return <></>;
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Swiper>{this.renderImages()}</Swiper>
        <View style={styles.descContainer}>
          <Text>Using react-native-swiper Plugin</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  descContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  imageContainer: {flex: 1},
  image: {paddingHorizontal: 10, height: 300},
});
