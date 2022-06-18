import React, {FC} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import youtubeParser from '@utils/youtubeParser';
import YoutubePlayer from 'react-native-youtube-iframe';
import colors from '@assets/styles/colors';

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
    parentContainer,
    titleTextContainer,
    titleText,
    miscDetails,
    miscDetailsText,
    synopsis,
    synopsisText,
  } = styles;

  const url = youtubeParser(mediaPlayerTrailerURL);

  return (
    <SafeAreaView style={parentContainer}>
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
  parentContainer: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  titleTextContainer: {
    marginTop: -60,
    marginLeft: 10,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  miscDetails: {
    marginLeft: 10,
    marginBottom: 20,
  },
  miscDetailsText: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.primary,
  },
  synopsis: {
    marginLeft: 10,
    marginRight: 10,
  },
  synopsisText: {
    fontSize: 15,
    textAlign: 'justify',
    color: colors.primary,
  },
});

export default MovieDetails;
