import React, {useMemo} from 'react';
import Support from '@screens/Support/Suppport';
import CustomHeader from '@components/HigherOrderComponent/HOC';

/**
 * @author Nitesh Raj Khanal
 * @function @SupportWrapper
 **/

const SupportWrapper = () => {
  const SupportHeader = useMemo(() => {
    return CustomHeader(Support);
  }, []);
  return (
    <>
      <SupportHeader />
    </>
  );
};

export default SupportWrapper;
