import React, {FC, useEffect} from 'react';
import {View, SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestCinemas} from '@redux/actions/cinemaAction';
import MovieCard from '@components/MovieCard/MovieCard';
import {BaseUrl} from '@constants/baseUrl';

interface IProps {
  renderItem: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Cinemas
 **/

const Cinemas: FC<IProps> = () => {
  const {container} = styles;
  const dispatch = useDispatch();
  const cinemas = useSelector((state: any) => {
    console.log('State =>', state.cinema.cinemas);
    return state.cinema.cinemas;
  });

  useEffect(() => {
    dispatch(requestCinemas());
  }, [dispatch]);

  console.log('Cinemas =>', cinemas);

  return (
    <View style={container}>
      <Text>Cinemas</Text>
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

export default Cinemas;
