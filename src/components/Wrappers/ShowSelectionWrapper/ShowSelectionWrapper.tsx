import React, {useMemo} from 'react';
import ShowSelection from '@screens/SelectionScreen/ShowSelection';
import CustomHeader from '@components/HigherOrderComponent/HOCScreens';

/**
 * @author Nitesh Raj Khanal
 * @function @LoginWrapper
 **/

const SelectionWrapper = () => {
  const SelectionHeader = useMemo(() => {
    return CustomHeader(ShowSelection);
  }, []);
  return (
    <>
      <SelectionHeader />
    </>
  );
};

export default SelectionWrapper;
