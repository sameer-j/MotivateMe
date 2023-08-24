import React, { useRef, useCallback } from 'react';
import { Animated, Dimensions, FlatList } from 'react-native';
import QuoteListEmptyView from '../../../components/QuoteListEmptyView';
import QuoteCard from './QuoteCard';

const ITEM_WIDTH = Dimensions.get('window').width;

function QuoteCardCarousel({ quotes, initialScrollIndex = 0 }) {
  const pan = useRef(new Animated.ValueXY()).current;
  const renderItem = useCallback(
    ({ item, index }) => (
      <Animated.View
        style={{
          transform: [
            {
              scale: pan.x.interpolate({
                inputRange: [
                  (index - 1) * ITEM_WIDTH,
                  index * ITEM_WIDTH,
                  (index + 1) * ITEM_WIDTH, // adjust positioning
                ],
                outputRange: [0.8, 1, 0.8], // scale down when out of scope
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <QuoteCard quote={item} />
      </Animated.View>
    ),
    [],
  );

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((item) => item.id, []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: ITEM_WIDTH,
        offset: index * ITEM_WIDTH,
      }),
      [],
    ),
  };

  return (
    <FlatList
      data={quotes}
      horizontal
      contentContainerStyle={{
        paddingVertical: 16,
        flexGrow: 1,
      }}
      contentInsetAdjustmentBehavior="never"
      decelerationRate={'fast'}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<QuoteListEmptyView />}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: pan.x } } }],
        {
          useNativeDriver: false,
        },
      )}
      initialScrollIndex={initialScrollIndex}
      pagingEnabled={true}
      renderItem={renderItem}
      {...flatListOptimizationProps}
    />
  );
}

export default QuoteCardCarousel;
