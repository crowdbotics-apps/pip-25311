import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial219181Navigator from '../features/Tutorial219181/navigator';
import NotificationList219153Navigator from '../features/NotificationList219153/navigator';
import Settings219152Navigator from '../features/Settings219152/navigator';
import Settings219144Navigator from '../features/Settings219144/navigator';
import UserProfile219142Navigator from '../features/UserProfile219142/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial219181: { screen: Tutorial219181Navigator },
NotificationList219153: { screen: NotificationList219153Navigator },
Settings219152: { screen: Settings219152Navigator },
Settings219144: { screen: Settings219144Navigator },
UserProfile219142: { screen: UserProfile219142Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
