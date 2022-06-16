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
    alignSelf: 'center',
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
  },
  rating: {
    flex: 1,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'row',
    margin: 5,
  },
});

export default MovieCard;
