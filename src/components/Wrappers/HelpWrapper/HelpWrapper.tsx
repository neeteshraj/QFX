import React, {useMemo} from 'react';
import Help from '@screens/Help/Help';
import CustomHeader from '@components/HigherOrderComponent/HOC';

/**
 * @author Nitesh Raj Khanal
 * @function @HelpWrapper
 **/

const HelpWrapper = () => {
  const HelpHeader = useMemo(() => {
    return CustomHeader(Help);
  }, []);
  return (
    <>
      <HelpHeader />
    </>
  );
};

export default HelpWrapper;
