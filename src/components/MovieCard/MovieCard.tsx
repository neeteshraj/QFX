import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import colors from '@assets/styles/colors';

export type RootStackParamList = {
  MovieDetailsWrapper: {
    showID: number;
    title: string;
    urlToImage: string;
    eventRating: string;
    genre: string;
    director: string;
    cast: string;
    mediaPlayerTrailerURL: string;
    annotation: string;
    showLengthInMinutes: number;
    companyId: number;
    theatreName: string;
    city: string;
    theatreID: number;
    showDate: string;
    eventID: number;
    dtLocalRelease: string;
  };
};

interface IProps {
  showID: number;
  urlToImage: string;
  title: string;
  eventRating: string;
  genre: string;
  mediaPlayerTrailerURL: string;
  annotation: string;
  showLengthInMinutes: number;
  director: string;
  cast: string;
  companyId: number;
  theatreName: string;
  city: string;
  theatreID: number;
  showDate: string;
  eventID: number;
  dtLocalRelease: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @MovieCard
 **/

/**
 * The MovieCard function is a React functional component that takes in a set of props and returns a
 * TouchableOpacity component that navigates to the MovieDetailsWrapper screen when pressed
 * @param  -
 * @returns A React component that is a function component.
 */
const MovieCard: FC<IProps> = ({
  showID,
  title,
  genre,
  urlToImage,
  eventRating,
  mediaPlayerTrailerURL,
  annotation,
  showLengthInMinutes,
  director,
  companyId,
  theatreName,
  city,
  cast,
  theatreID,
  showDate,
  eventID,
  dtLocalRelease,
}) => {
  const {
    container,
    image,
    movieTitle,
    rating,
    release,
    imageContainer,
    movieInfo,
  } = styles;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleOnPress = () => {
    return navigation.navigate('MovieDetailsWrapper', {
      showID,
      title,
      urlToImage,
      eventRating,
      mediaPlayerTrailerURL,
      annotation,
      showLengthInMinutes,
      director,
      cast,
      genre,
      companyId,
      theatreName,
      city,
      theatreID,
      showDate,
      eventID,
      dtLocalRelease,
    });
  };
  return (
    <SafeAreaView style={container}>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={imageContainer}>
          <Image style={image} source={{uri: urlToImage}} />
        </View>
        <View style={movieInfo}>
          <Text style={movieTitle}>{title}</Text>
          <Text style={rating}>({eventRating})</Text>
          <Text style={release}>{dtLocalRelease}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    height: 200,
    marginLeft: 10,
  },
  image: {
    width: 175,
    height: 200,
  },
  movieInfo: {
    marginLeft: 5,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'left',
    flexDirection: 'row',
    color: colors.primary,
    marginLeft: 10,
  },
  rating: {
    marginRight: 15,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '500',
    flexDirection: 'row',
    color: colors.primary,
    marginLeft: 10,
  },
  release: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '500',
    flexDirection: 'row',
    color: colors.primary,
    marginLeft: 10,
  },
});

export default MovieCard;
