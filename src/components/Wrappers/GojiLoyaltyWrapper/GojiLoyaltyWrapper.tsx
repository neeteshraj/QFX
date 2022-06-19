import React, {useMemo} from 'react';
import Loyalty from '@screens/GojiLoyalty/GojiLoyalty';
import CustomHeader from '@components/HigherOrderComponent/HOC';

/**
 * @author Nitesh Raj Khanal
 * @function @LoyaltyWrapper
 **/

const LoyaltyWrapper = () => {
  const LoyaltyHeader = useMemo(() => {
    return CustomHeader(Loyalty);
  }, []);
  return (
    <>
      <LoyaltyHeader />
    </>
  );
};

export default LoyaltyWrapper;
