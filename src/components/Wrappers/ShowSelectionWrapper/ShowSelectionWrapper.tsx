import React, {FC} from 'react';
import Selection from '@screens/SelectionScreen/ShowSelection';
import CustomHeader from '@components/HigherOrderComponent/HOCSelection';

/**
 * @author Nitesh Raj Khanal
 * @function @SelectionWrapper
 **/

interface IProps {
  data: any;
  children: any;
}

const SelectionWrapper: FC<IProps> = (props: any) => {
  console.log('Daaataaaa =>', props);
  return (
    <>
      <CustomHeader>
        <Selection data={props.route.params} children={props.children} />
      </CustomHeader>
    </>
  );
};

export default SelectionWrapper;
