import React, {FC} from 'react';
import EntryNavigation from '@navigation/EntryNav';
import {Provider} from 'react-redux';
import globalStore from '@redux/store/globalStore';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryPoint
 **/

const Entry: FC<IProps> = () => {
  return (
    <Provider store={globalStore}>
      <EntryNavigation />
    </Provider>
  );
};

export default Entry;
