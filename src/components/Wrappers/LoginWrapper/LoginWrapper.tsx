import React, {useMemo} from 'react';
import Login from '@screens/Login/Login';
import CustomHeader from '@components/HigherOrderComponent/HOCScreens';

/**
 * @author Nitesh Raj Khanal
 * @function @LoginWrapper
 **/

const LoginWrapper = () => {
  const LoginHeader = useMemo(() => {
    return CustomHeader(Login);
  }, []);
  return (
    <>
      <LoginHeader />
    </>
  );
};

export default LoginWrapper;
