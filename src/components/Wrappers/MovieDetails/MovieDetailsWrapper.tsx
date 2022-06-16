import React, {useMemo} from 'react';
import MovieDetails from '@screens/MovieDetails/MovieDetails';
import CustomHeader from '@components/HigherOrderComponent/HOCScreen';

/**
 * @author Nitesh Raj Khanal
 * @function @MovieDetailsWrapper
 **/

const MovieDetailsWrapper = () => {
  const MovieDetailsHeader = useMemo(() => {
    return CustomHeader(MovieDetails);
  }, []);
  return (
    <>
      <MovieDetailsHeader />
    </>
  );
};

export default MovieDetailsWrapper;
