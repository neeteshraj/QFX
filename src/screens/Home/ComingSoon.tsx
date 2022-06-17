import React, {FC, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestUpcoming} from '@redux/actions/upcomingAction';
import MovieCard from '@components/MovieCard/MovieCard';
import {BaseUrl} from '@constants/baseUrl';

interface IProps {
  renderItem: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @ComingSoon
 **/

const ComingSoon: FC<IProps> = () => {
  const {flatList} = styles;
  const dispatch = useDispatch();
  const comingSoon = useSelector((state: any) => {
    return state.upcoming.upcoming;
  });
  useEffect(() => {
    dispatch(requestUpcoming());
  }, [dispatch]);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          style={flatList}
          data={comingSoon}
          keyExtractor={(show, index) => 'key' + index}
          numColumns={2}
          renderItem={(show: any) => {
            return (
              <MovieCard
                urlToImage={`${BaseUrl}${show.item.thumbnailUrl}`}
                title={show.item.name}
                eventRating={show.item.eventRating}
                showID={show.item.id}
                mediaPlayerTrailerURL={show.item?.mediaPlayerTrailerURL}
                annotation={show.item.annotation}
                showLengthInMinutes={show.item.showLengthInMinutes}
                director={show.item.director}
                cast={show.item.cast}
                genre={show.item.genre}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {},
});

export default ComingSoon;
