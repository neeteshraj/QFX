import React from 'react';
import ScreenHeader from '@components/CustomHeader/ScreenHeader/ScreenHeader';
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
const HOCSelection = ({children}: any) => {
  return (
    <>
      <ScreenHeader />
      {children}
    </>
  );
};

export default HOCSelection;
