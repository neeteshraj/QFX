import React, {FC, useEffect} from 'react';
import {Provider} from 'react-redux';
import globalStore from '@redux/store/globalStore';
import StackScreen from '@navigation/StackNavigator/StackNav';

import RNBootSplash from 'react-native-bootsplash';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryPoint
 **/

const Entry: FC<IProps> = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={globalStore}>
      <StackScreen />
    </Provider>
  );
};

export default Entry;
