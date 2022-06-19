import React, {useMemo} from 'react';
import Terms from '@screens/TermsConditions/Terms';
import CustomHeader from '@components/HigherOrderComponent/HOC';

/**
 * @author Nitesh Raj Khanal
 * @function @TermsWrapper
 **/

const TermsWrapper = () => {
  const TermsHeader = useMemo(() => {
    return CustomHeader(Terms);
  }, []);
  return (
    <>
      <TermsHeader />
    </>
  );
};

export default TermsWrapper;
