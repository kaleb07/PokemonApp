import React from 'react';
import {View, FlatList, SafeAreaView, Text} from 'react-native';
import globalStyles from '../components/globalStyles';

import {routesName} from '~/utilities/constants';
import {CardComponents} from '../components/componenList';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CharactersCreators} from '~/store/duck/characters';
import Theme from '~/styles/';

const {metrics, colors} = Theme;

const ListCharacters = ({navigation, storePokemon, charactersActions}) => {
  React.useEffect(() => {
    charactersActions.getCharactersRequest({offset: 0, limit: 20});
  }, []);

  function _handleLoadMore() {
    if (storePokemon.lastPage !== null && !storePokemon.loadMorechar) {
      charactersActions.getCharactersLoadMoreRequest({
        offset: storePokemon.offset,
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
          showsVerticalScrollIndicator={true}
          numColumns={2}
          data={storePokemon.listChar}
          scrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <CardComponents
              item={item}
              onPress={() =>
                navigation.navigate(routesName.DETAIL_CHARACTERS, {
                  name: item.name,
                })
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => _handleLoadMore()}
          ListFooterComponent={
            storePokemon.loadMorechar || storePokemon.loading ? (
              <Text style={{textAlign: 'center', color: colors.red}}>
                Loading characters...
              </Text>
            ) : null
          }
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  storePokemon: state.pokemonChar,
});

const mapDispatchToProps = dispatch => ({
  charactersActions: bindActionCreators(CharactersCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCharacters);
