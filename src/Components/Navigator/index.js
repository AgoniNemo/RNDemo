import Home from 'views/Home/index'
import Animation from 'views/Animation/index'
import Video from 'views/Video/index'
import { StackNavigator } from 'react-navigation';

const Navigator = StackNavigator(
    {
       Home: { screen: Home },
       Animation: { screen: Animation },
       Video: { screen:Video }
    },
    {
      headerMode:'screen'
    }
);

export default Navigator;