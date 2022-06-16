import React, {FC, useState, useCallback} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @MovieDetails
 **/

const MovieDetails: FC<IProps> = () => {
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
