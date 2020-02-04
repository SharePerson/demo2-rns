import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/Screens/HomeScreen';
import ReactNativeSwiper from './src/Screens/Plugins/ReactNativeSwiper';
import ClassicRNSwiperScreen from './src/Screens/Classic/ClassicRNSwiperScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    RNSwiper: ReactNativeSwiper,
    RNSwiperClassic: ClassicRNSwiperScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native Swiper',
    },
  },
);

export default createAppContainer(navigator);
