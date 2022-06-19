import React, {FC} from 'react';
import MovieDetails from '@screens/MovieDetails/MovieDetails';
import CustomHeader from '@components/HigherOrderComponent/HOCScreen';

/**
 * @author Nitesh Raj Khanal
 * @function @MovieDetailsWrapper
 **/

interface IProps {
  data: any;
  children: any;
  Selection: any;
}

const MovieDetailsWrapper: FC<IProps> = (props: any) => {
  return (
    <>
      <CustomHeader>
        <MovieDetails data={props.route.params} children={undefined} />
      </CustomHeader>
    </>
  );
};

export default MovieDetailsWrapper;
