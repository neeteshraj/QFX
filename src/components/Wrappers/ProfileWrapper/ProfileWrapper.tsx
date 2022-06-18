import React, {useMemo} from 'react';
import Profile from '@screens/Profile/Profile';
import CustomHeader from '@components/HigherOrderComponent/HOC';

/**
 * @author Nitesh Raj Khanal
 * @function @LoginWrapper
 **/

const ProfileWrapper = () => {
  const ProfileHeader = useMemo(() => {
    return CustomHeader(Profile);
  }, []);
  return (
    <>
      <ProfileHeader />
    </>
  );
};

export default ProfileWrapper;
