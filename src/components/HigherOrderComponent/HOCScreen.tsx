import React from 'react';
import CustomHeader from '@components/CustomHeader/ScreenHeader/MovieDetailsHeader';
/**
 * @author Nitesh Raj Khanal
 * @function @HOC
 **/

const HOCScreen = ({children}: any) => {
  return (
    <>
      <CustomHeader />
      {children}
    </>
  );
};

export default HOCScreen;
