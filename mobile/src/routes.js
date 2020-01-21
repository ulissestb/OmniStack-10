import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const navigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'DevRadar'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Perfil no Github'
    }
  },
}, {
  defaultNavigationOptions: {
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#7D40E7'
    }
  }
})

const Routes = createAppContainer(navigator)

export default Routes
