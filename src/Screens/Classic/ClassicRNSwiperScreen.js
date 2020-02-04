/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {
  View,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

import {getImages} from '../../api/api';

export default class ClassicRNSwiperScreen extends Component {
  state = {images: [], width: 0};

  static navigationOptions = {
    title: 'Classic Swiper',
  };

  componentDidMount() {
    const images = getImages();
    const {width} = Dimensions.get('window');
    this.setState({...this.state, images, width});
  }

  render() {
    const {width, images} = this.state;
    const styles = StyleSheetFactory.getSheet({width});
    return (
      <View style={styles.mainContainer}>
        <View style={styles.flatlistContainer}>
          <FlatList
            horizontal
            pagingEnabled
            data={images}
            style={styles.flatlist}
            keyExtractor={image => image.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: item.imageUrl}} />
                </View>
              );
            }}
          />
        </View>
        <View style={styles.descContainer}>
          <Text>Using React Native FlatList</Text>
        </View>
      </View>
    );
  }
}

class StyleSheetFactory {
  static getSheet({width}) {
    return StyleSheet.create({
      mainContainer: {flex: 1},
      flatlist: {width: width},
      flatlistContainer: {flex: 1},
      descContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
      imageContainer: {flex: 1, padding: 10},
      image: {height: 300, width: width - 20, borderRadius: 10},
    });
  }
}
