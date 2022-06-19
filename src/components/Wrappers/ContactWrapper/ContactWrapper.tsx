import React, {useMemo} from 'react';
import Contact from '@screens/Contact/Contact';
import CustomHeader from '@components/HigherOrderComponent/HOC';

/**
 * @author Nitesh Raj Khanal
 * @function @LoginWrapper
 **/

const ContactWrapper = () => {
  const ContactHeader = useMemo(() => {
    return CustomHeader(Contact);
  }, []);
  return (
    <>
      <ContactHeader />
    </>
  );
};

export default ContactWrapper;
