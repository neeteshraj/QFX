import React, {FC} from 'react';
import {Provider} from 'react-redux';
import globalStore from '@redux/store/globalStore';
import StackScreen from '@navigation/StackNavigator/StackNav';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryPoint
 **/

const Entry: FC<IProps> = () => {
  return (
    <Provider store={globalStore}>
      <StackScreen />
    </Provider>
  );
};

export default Entry;
