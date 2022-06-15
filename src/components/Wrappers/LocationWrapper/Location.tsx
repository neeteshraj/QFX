import React, {useMemo} from 'react';
import Location from '@screens/Location/Location';
import CustomHeader from '@components/HigherOrderComponent/HOC';

/**
 * @author Nitesh Raj Khanal
 * @function @HomeWrapper
 **/

const LocationWrapper = () => {
  const LocationHeader = useMemo(() => {
    return CustomHeader(Location);
  }, []);
  return (
    <>
      <LocationHeader />
    </>
  );
};

export default LocationWrapper;
