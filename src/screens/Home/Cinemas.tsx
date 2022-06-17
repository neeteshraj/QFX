import React, {FC, useEffect} from 'react';
import {View, SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestCinemas} from '@redux/actions/cinemaAction';
import MovieCard from '@components/MovieCard/MovieCard';
import {BaseUrl} from '@constants/baseUrl';
import colors from '@assets/styles/colors';

interface IProps {
  renderItem: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Cinemas
 **/

const Cinemas: FC<IProps> = () => {
  const {parentContainer, container, flatList, theatreName, theatreNameText} =
    styles;
  const dispatch = useDispatch();
  const cinemas = useSelector((state: any) => {
    return state.cinema.cinemas;
  });

  useEffect(() => {
    dispatch(requestCinemas());
  }, [dispatch]);

  return (
    <SafeAreaView style={parentContainer}>
      <View style={container}>
        <FlatList
          style={flatList}
          data={cinemas}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return (
              <>
                <View style={theatreName}>
                  <Text style={theatreNameText}>{show.item.theatreName}</Text>
                </View>
                <FlatList
                  style={flatList}
                  data={show.item.events}
                  keyExtractor={(movies, index) => 'key' + index}
                  numColumns={2}
                  renderItem={(movies: any) => {
                    return (
                      <MovieCard
                        id={movies.item.eventId}
                        companyId={movies.item.theatreId}
                        urlToImage={`${BaseUrl}${movies.item.thumbnailUrl}`}
                        title={movies.item.name}
                        eventRating={movies.item.eventRating}
                        annotation={movies.item.annotation}
                        mediaPlayerTrailerURL={movies.item.mediaLink}
                        genre={movies.item.genre}
                        director={movies.item.director}
                        cast={movies.item.cast}
                      />
                    );
                  }}
                />
              </>
            );
          }}
        />
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
  container: {
    marginRight: 10,
    justifyContent: 'center',
  },
  flatList: {},
  theatreName: {
    marginTop: 10,
    marginLeft: 10,
  },
  theatreNameText: {
    fontSize: 25,
    color: colors.cinemasNameText,
  },
});

export default Cinemas;
