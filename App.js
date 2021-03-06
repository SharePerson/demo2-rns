import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/Screens/HomeScreen';
import ReactNativeSwiper from './src/Screens/Plugins/ReactNativeSwiper';
import ClassicRNSwiperScreen from './src/Screens/Classic/ClassicRNSwiperScreen';
import ReactNativeSwipeImage from './src/Screens/Plugins/ReactNativeSwipeImage';
import ReactNativeSwipeable from './src/Screens/Plugins/ReactNativeSwipeable';
import ReactNativeSwipeListView from './src/Screens/Plugins/ReactNativeSwipeListView';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    RNSwiper: ReactNativeSwiper,
    RNSwiperClassic: ClassicRNSwiperScreen,
    RNSwipeImage: ReactNativeSwipeImage,
    RNSwipeable: ReactNativeSwipeable,
    RNSwipeListView: ReactNativeSwipeListView,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native Swiper',
    },
  },
);

export default createAppContainer(navigator);
