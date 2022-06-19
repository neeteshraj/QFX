import React, {FC, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import youtubeParser from '@utils/youtubeParser';
import YoutubePlayer from 'react-native-youtube-iframe';
import colors from '@assets/styles/colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@components/MovieCard/MovieCard';
import {StackNavigationProp} from '@react-navigation/stack';

import {AuthContext} from '@components/Context/AuthContext';

interface IProps {
  data: any;
  children: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @MovieDetails
 **/

const MovieDetails: FC<IProps> = ({data}: any) => {
  const {userInfo} = useContext(AuthContext);
  const {
    title,
    annotation,
    eventRating,
    mediaPlayerTrailerURL,
    showLengthInMinutes,
    cast,
    genre,
    director,
    theatreID,
  } = data;

  const {
    parentContainer,
    titleTextContainer,
    textViewWrapper,
    titleText,
    ticketIconWrapper,
    touchable,
    icon,
    buyStyle,
    miscDetails,
    miscDetailsText,
    synopsis,
    synopsisText,
  } = styles;

  const url = youtubeParser(mediaPlayerTrailerURL);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const buyReserveTicket = () => {
    userInfo
      ? navigation.navigate('Selection', {
          data,
        })
      : navigation.navigate('Login', {});
  };

  return (
    <SafeAreaView style={parentContainer}>
      <View>
        <YoutubePlayer height={300} play={false} videoId={url} />
      </View>
      <View style={titleTextContainer}>
        <View style={textViewWrapper}>
          <Text style={titleText}>
            {title} ({eventRating})
          </Text>
        </View>
        {theatreID ? (
          <View style={ticketIconWrapper}>
            <TouchableOpacity style={touchable} onPress={buyReserveTicket}>
              <View style={icon}>
                <FontAwesome name="ticket" size={22} color={colors.primary} />
              </View>
              <View>
                <Text style={buyStyle}>BUY/RESERVE TICKET</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textViewWrapper: {
    width: '60%',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.primary,
  },
  ticketIconWrapper: {
    width: '40%',
  },
  touchable: {
    flexDirection: 'row',
  },
  icon: {
    padding: 8,
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: colors.offWhite,
  },
  buyStyle: {
    fontSize: 9,
    fontWeight: '500',
    paddingTop: 15,
    paddingLeft: 5,
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
