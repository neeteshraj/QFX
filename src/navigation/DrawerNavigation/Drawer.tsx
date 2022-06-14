import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NowShowing from '../../screens/Home/NowShowing/NowShowing';
import ComingSoon from '../../screens/Home/ComingSoon/ComingSoon';
import Cinemas from '../../screens/Home/Cinemas/Cinemas';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={NowShowing} />
      <Drawer.Screen name="Coming Soon" component={ComingSoon} />
      <Drawer.Screen name="Cinemas" component={Cinemas} />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
