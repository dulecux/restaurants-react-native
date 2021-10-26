import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from './src/screens/SearchScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator({
      Search: SearchScreen,
      List: ListScreen,
}, {
      initialRouteName: 'Search',
      defaultNavigationOptions: {
        title: 'Restaurant Search'
      }
});


export default createAppContainer(navigator);