import React from 'react';
import MovieDetails from '@screens/MovieDetails/MovieDetails';
import CustomHeader from '@components/HigherOrderComponent/HOCScreen';

/**
 * @author Nitesh Raj Khanal
 * @function @MovieDetailsWrapper
 **/

const MovieDetailsWrapper = (props: any) => {
  return (
    <>
      <CustomHeader>
        <MovieDetails data={props.route.params} />
      </CustomHeader>
    </>
  );
};

export default MovieDetailsWrapper;
