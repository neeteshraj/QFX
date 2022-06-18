import React, {FC, useEffect} from 'react';
import {Provider} from 'react-redux';
import globalStore from '@redux/store/globalStore';
import StackScreen from '@navigation/StackNavigator/StackNav';
import compareAppVersion from '@utils/compareAppVersion';
import {AuthProvider} from '@components/Context/AuthContext';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryPoint
 **/

const Entry: FC<IProps> = () => {
  useEffect(() => {
    compareAppVersion();
  }, []);

  return (
    <AuthProvider>
      <Provider store={globalStore}>
        <StackScreen />
      </Provider>
    </AuthProvider>
  );
};

export default Entry;
