import React from 'react';
import CustomHeader from '@components/CustomHeader/ScreenHeader/MovieDetailsHeader';
/**
 * @author Nitesh Raj Khanal
 * @function @HOC
 **/

/**
 * It takes in a child component and returns a new component that wraps the child component with a
 * custom header
 * @param {any}  - any - This is a type annotation. It tells TypeScript that the children parameter is
 * of type any.
 * @returns The children of the HOCScreen component.
 */
const HOCScreen = ({children}: any) => {
  return (
    <>
      <CustomHeader />
      {children}
    </>
  );
};

export default HOCScreen;
