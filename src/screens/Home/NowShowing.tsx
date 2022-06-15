import React, {FC, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestNowShowing} from '@redux/actions/nowShowingAction';
import MovieCard from '@components/MovieCard/MovieCard';
import {BaseUrl} from '@constants/baseUrl';

interface IProps {
  renderItem: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @NowShowing
 **/

const NowShowing: FC<IProps> = () => {
  const {flatList} = styles;
  const dispatch = useDispatch();
  const nowShowing = useSelector((state: any) => {
    return state.nowShowing.nowShowing;
  });
  useEffect(() => {
    dispatch(requestNowShowing());
  }, [dispatch]);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          style={flatList}
          data={nowShowing}
          keyExtractor={(show, index) => 'key' + index}
          numColumns={2}
          renderItem={(show: any) => {
            return (
              <MovieCard
                urlToImage={`${BaseUrl}${show.item.thumbnailUrl}`}
                title={show.item.name}
                eventRating={show.item.eventRating}
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

export default NowShowing;
