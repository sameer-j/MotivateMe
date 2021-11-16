import React from 'react';
import { Animated, Dimensions, FlatList } from 'react-native';
import QuoteListEmptyView from '../../../components/QuoteListEmptyView';
import QuoteCard from './QuoteCard';

const ITEM_WIDTH = Dimensions.get('window').width;

function QuoteCardCarousel({ quotes, initialScrollIndex }) {
  const pan = React.useRef(new Animated.ValueXY()).current;
  const renderItem = ({ item, index }) => (
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
      }}>
      <QuoteCard quote={item} />
    </Animated.View>
  );
  return (
    <FlatList
      data={quotes}
      horizontal
      style={{ marginTop: 70 }}
      contentContainerStyle={{
        paddingVertical: 16,
        flexGrow: 1,
      }}
      contentInsetAdjustmentBehavior="never"
      decelerationRate={'fast'}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      ListEmptyComponent={<QuoteListEmptyView />}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: pan.x } } }],
        {
          useNativeDriver: false,
        },
      )}
      initialScrollIndex={initialScrollIndex}
      pagingEnabled={true}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      getItemLayout={(_, index) => ({
        index,
        length: ITEM_WIDTH,
        offset: index * ITEM_WIDTH,
      })}
    />
  );
}

export default QuoteCardCarousel;
