import React, {FC} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @MovieDetails
 **/

const MovieDetails: FC<IProps> = ({data}: any) => {
  const {
    title,
    annotation,
    eventRating,
    mediaPlayerTrailerURL,
    showLengthInMinutes,
    cast,
    genre,
    director,
  } = data;

  const {
    titleTextContainer,
    titleText,
    miscDetails,
    miscDetailsText,
    synopsis,
    synopsisText,
  } = styles;

  function youtube_parser(url: string) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : undefined;
  }
  const url = youtube_parser(mediaPlayerTrailerURL);

  return (
    <SafeAreaView>
      <View>
        <YoutubePlayer height={300} play={false} videoId={url} />
      </View>
      <View style={titleTextContainer}>
        <Text style={titleText}>
          {title} ( {eventRating} )
        </Text>
      </View>
      <View style={miscDetails}>
        <Text style={miscDetailsText}>Genre: {genre ? genre : 'N/A'}</Text>
        <Text style={miscDetailsText}>
          Runtime: {showLengthInMinutes ? showLengthInMinutes : 'N/A'}
        </Text>
        <Text style={miscDetailsText}>
          Director: {director ? director : 'N/A'}
        </Text>
        <Text style={miscDetailsText}>Cast: {cast ? cast : 'N/A'} </Text>
      </View>
      <View style={synopsis}>
        <Text style={synopsisText}>
          SYNOPSIS: {annotation ? annotation : 'N/A'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleTextContainer: {
    marginTop: -60,
    marginLeft: 10,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  miscDetails: {
    marginLeft: 10,
    marginBottom: 20,
  },
  miscDetailsText: {
    fontSize: 15,
    lineHeight: 25,
  },
  synopsis: {
    marginLeft: 10,
    marginRight: 10,
  },
  synopsisText: {
    fontSize: 15,
    textAlign: 'justify',
  },
});

export default MovieDetails;
