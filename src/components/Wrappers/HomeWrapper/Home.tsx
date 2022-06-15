import React, {useMemo} from 'react';
import TopTabNavigator from '@navigation/TopTabNavigator/TopTab';
import CustomHeader from '@components/HigherOrderComponent/HOC';

/**
 * @author Nitesh Raj Khanal
 * @function @HomeWrapper
 **/

const HomeWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(TopTabNavigator);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default HomeWrapper;
