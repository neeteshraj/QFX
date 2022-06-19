import React, {FC, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestNowShowing} from '@redux/actions/nowShowingAction';
import MovieCard from '@components/MovieCard/MovieCard';
import {BaseUrl} from '@constants/baseUrl';
import colors from '@assets/styles/colors';

interface IProps {
  renderItem: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @NowShowing
 **/

const NowShowing: FC<IProps> = () => {
  const {parentContainer, container, flatList} = styles;
  const dispatch = useDispatch();
  const nowShowing = useSelector((state: any) => {
    return state.nowShowing.nowShowing;
  });
  useEffect(() => {
    dispatch(requestNowShowing());
  }, [dispatch]);
  return (
    <SafeAreaView style={parentContainer}>
      <View style={container}>
        <FlatList
          showsVerticalScrollIndicator={false}
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
                showID={show.item.showID}
                eventID={show.item.eventID}
                mediaPlayerTrailerURL={show.item?.mediaURL}
                annotation={show.item.annotation}
                showLengthInMinutes={show.item.showLengthInMinutes}
                director={show.item.director}
                cast={show.item.cast}
                genre={show.item.genre}
                companyId={show.item.companyId}
                theatreID={show.item.theatreID}
                showDate={show.item.showDate}
                theatreName={show.item.theatreName}
                city={show.item?.city}
                dtLocalRelease={show.item?.dtLocalRelease}
              />
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
});

export default NowShowing;
