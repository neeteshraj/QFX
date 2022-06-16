import React, {FC, useState, useCallback, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {requestNowShowing} from '@redux/actions/nowShowingAction';
import {useDispatch, useSelector} from 'react-redux';

import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @MovieDetails
 **/

const MovieDetails: FC<IProps> = ({route}: any) => {
  const [movieDetails, setMovieDetails] = useState<any>();

  useEffect(() => {
    if (route?.params.id) {
      const response = getData(route.params.id);
    }
  }, []);

  const getData = async (id: any) => {
    const detail = await axios.get(
      `https://staging.qfxcinemas.com:2005/api/public/Event?=${id}`,
    );
    setMovieDetails(detail.data.data);
  };

  console.log('Movie Details =>', movieDetails);

  return (
    <View>
      <YoutubePlayer height={300} play={false} videoId={'dQw4w9WgXcQ'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieDetails;
