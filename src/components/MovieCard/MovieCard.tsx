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
    companyId: number;
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
      companyId,
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
    width: 170,
    height: 200,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '500',
    flexDirection: 'row',
    color: colors.primary,
  },
  rating: {
    marginRight: 15,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '500',
    flexDirection: 'row',
    color: colors.primary,
  },
});

export default MovieCard;
