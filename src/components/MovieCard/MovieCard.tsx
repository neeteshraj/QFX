import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
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
  cast,
}) => {
  const {container, image, movieTitle, rating} = styles;

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
    });
  };

  return (
    <SafeAreaView style={container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Image style={image} source={{uri: urlToImage}} />
        <Text style={movieTitle}>{title}</Text>
        <Text style={rating}>({eventRating})</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  image: {
    flex: 1,
    width: 180,
    height: 250,
  },
  movieTitle: {
    flex: 1,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'row',
    margin: 5,
    color: colors.primary,
  },
  rating: {
    flex: 1,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'row',
    margin: 5,
    color: colors.primary,
  },
});

export default MovieCard;
