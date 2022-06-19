import React from 'react';
import CustomHeader from '@components/CustomHeader/CustomHeader';
/**
 * @author Nitesh Raj Khanal
 * @function @HOC
 **/

/* A higher order component. It is a function that takes a component as an argument and returns a new
component. */
const HOC =
  (Component: any) =>
  ({props}: any) =>
    (
      <>
        <CustomHeader />
        <Component {...props} />
      </>
    );

export default HOC;
