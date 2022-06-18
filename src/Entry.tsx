import React, {FC, useEffect, useContext} from 'react';
import {Provider} from 'react-redux';
import globalStore from '@redux/store/globalStore';
import StackScreen from '@navigation/StackNavigator/StackNav';
import compareAppVersion from '@utils/compareAppVersion';
import {AuthContext, AuthProvider} from '@components/Context/AuthContext';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryPoint
 **/

const Entry: FC<IProps> = () => {
  useEffect(() => {
    compareAppVersion();
  }, []);

  const userInfo = useContext(AuthContext);
  console.log('userInfo', userInfo);
  return (
    <AuthProvider>
      <Provider store={globalStore}>
        <StackScreen />
      </Provider>
    </AuthProvider>
  );
};

export default Entry;
