import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

interface IProps {
  urlToImage: string;
  title: string;
  eventRating: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @MovieCard
 **/

const MovieCard: FC<IProps> = ({title, urlToImage, eventRating}) => {
  const {container, image, movieTitle, rating} = styles;
  const handleOnPress = () => {
    console.log('Here i am pressed');
  };
  return (
    <SafeAreaView style={container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Image style={image} source={{uri: urlToImage}} />
        <Text style={movieTitle}>{title}</Text>
        <Text style={rating}>{eventRating}</Text>
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
