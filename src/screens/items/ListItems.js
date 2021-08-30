import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

import globalStyles from '../components/globalStyles';
import {routesName} from '~/utilities/constants';
import {CardComponents} from '../components/componenList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ItemsCreators} from '~/store/duck/items';
import Theme from '~/styles/';

const {metrics, colors} = Theme;

const ListItems = ({navigation, storeItem, itemsActions}) => {
  React.useEffect(() => {
    itemsActions.getItemsRequest({offset: 0, limit: 20});
  }, []);

  function _handleLoadMore() {
    if (storeItem.lastPage !== null && !storeItem.loadMoreItem) {
      itemsActions.getItemsLoadMoreRequest({
        offset: storeItem.offset,
        limit: 20,
      });
    }
  }

  return (
    <SafeAreaView style={globalStyles.containerWrap}>
      <View
        style={{
          alignSelf: 'center',
          marginTop: metrics.getHeightFromDP('4%'),
          marginBottom: metrics.getHeightFromDP('9%'),
        }}>
        <FlatList
          numColumns={2}
          data={storeItem.listItem}
          scrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <CardComponents
              item={item}
              onPress={() =>
                navigation.navigate(routesName.DETAIL_ITEM, {name: item.name})
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => _handleLoadMore()}
          ListFooterComponent={
            storeItem.loadMoreItem || storeItem.loading ? (
              <Text style={{textAlign: 'center', color: colors.red}}>
                Loading items...
              </Text>
            ) : null
          }
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  storeItem: state.pokemonItem,
});

const mapDispatchToProps = dispatch => ({
  itemsActions: bindActionCreators(ItemsCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
