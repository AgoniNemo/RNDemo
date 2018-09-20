import Home from 'views/Home/index'
import Animation from 'views/Animation/index'
import { StackNavigator } from 'react-navigation';

const Navigator = StackNavigator(
    {
       Home: { screen: Home },
       Animation: { screen: Animation }
    },
    {
      headerMode:'screen'
    }
);

export default Navigator;