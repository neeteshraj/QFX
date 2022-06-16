import React from 'react';
import CustomHeader from '@components/CustomHeader/ScreenHeader/ScreenHeader';
/**
 * @author Nitesh Raj Khanal
 * @function @HOC
 **/

const HOCScreen =
  (Component: any) =>
  ({props}: any) =>
    (
      <>
        <CustomHeader />
        <Component {...props} />
      </>
    );

export default HOCScreen;
