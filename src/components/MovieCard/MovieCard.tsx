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
    id: string;
    title: string;
    urlToImage: string;
    annotations: string;
    director: string;
    cast: string;
  };
};

interface IProps {
  id: string;
  urlToImage: string;
  title: string;
  eventRating: string;
  director: string;
  cast: string;
  annotations: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @MovieCard
 **/

const MovieCard: FC<IProps> = ({
  id,
  title,
  urlToImage,
  eventRating,
  annotations,
  director,
  cast,
}) => {
  const {container, image, movieTitle, rating} = styles;

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleOnPress = () => {
    return navigation.navigate('MovieDetailsWrapper', {
      id,
      title,
      urlToImage,
      annotations,
      director,
      cast,
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
