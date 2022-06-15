import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NowShowing from '@screens/Home/NowShowing';
import ComingSoon from '@screens/Home/ComingSoon';
import Cinemas from '@screens/Home/Cinemas';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @TopTab
 **/

const MaterialTab = createMaterialTopTabNavigator();

/**
 * It returns a MaterialTab.Navigator component that contains three MaterialTab.Screen components, each
 * of which has a name and a component prop
 * @returns A MaterialTab.Navigator component with 3 MaterialTab.Screen components as children.
 */
const TopTab: FC<IProps> = () => {
  return (
    <MaterialTab.Navigator>
      <MaterialTab.Screen name="NOW SHOWING" component={NowShowing} />
      <MaterialTab.Screen name="COMING SOON" component={ComingSoon} />
      <MaterialTab.Screen name="CINEMAS" component={Cinemas} />
    </MaterialTab.Navigator>
  );
};

export default TopTab;
