import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Theme from '~/styles';
import {HeaderImage} from '../components/componenList';
import globalStyles from '../components/globalStyles';
import {BackButton} from '../components/componenList';
import {Icon} from 'react-native-elements/dist/icons/Icon';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ItemsCreators} from '~/store/duck/items';

const {colors, metrics} = Theme;

const DetailItems = ({navigation, route, storeItem, itemsActions}) => {
  React.useEffect(() => {
    itemsActions.getDetailItemRequest({name: route.params.name});
  }, []);

  return (
    <SafeAreaView style={globalStyles.containerWrap}>
      <ScrollView contentContainerStyle={globalStyles.containerStyle}>
        <BackButton onPress={() => navigation.goBack()} />
        <>
          {storeItem.loadingDetail || storeItem.detailItem.length == 0 ? (
            <Text style={{textAlign: 'center'}}>Loading</Text>
          ) : (
            <>
              <HeaderImage
                front={storeItem?.detailItem?.sprites?.default}
                cost={storeItem?.detailItem?.cost.toString()}
              />
              <Text
                style={{
                  color: colors.mediumBlack,
                  fontSize: metrics.big,
                  fontWeight: 'bold',
                }}>
                {storeItem?.detailItem?.name}
              </Text>

              <View
                style={{
                  marginTop: metrics.small,
                  width: '100%',
                }}>
                <View
                  style={{
                    marginHorizontal: metrics.extraSmall,
                  }}>
                  <Text style={globalStyles.descText}>CATEGORY</Text>
                  <Text style={{fontSize: metrics.extraSmall}}>
                    {storeItem?.detailItem?.category?.name}
                  </Text>
                </View>
              </View>

              <View style={globalStyles.containerCard}>
                <View style={globalStyles.containerInCard}>
                  <Text style={globalStyles.descText}>EFFECT ENTRIES</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: '600'}}>Effect:</Text>
                    <Text
                      style={{
                        width: metrics.getWidthFromDP('76%'),
                        marginLeft: metrics.getWidthFromDP('2%'),
                      }}>
                      {storeItem?.detailItem?.effect_entries[0].effect}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: '600'}}>Short Effect:</Text>
                    <Text
                      style={{
                        width: metrics.getWidthFromDP('66%'),
                        marginLeft: metrics.getWidthFromDP('2%'),
                      }}>
                      {storeItem?.detailItem?.effect_entries[0].short_effect}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{marginBottom: metrics.getHeightFromDP('10%')}}>
                <View style={globalStyles.containerCard}>
                  <View style={globalStyles.containerInCard}>
                    <Text style={globalStyles.descText}>ATTRIBUTES</Text>
                    {storeItem?.detailItem?.attributes.map((item, i) => (
                      <View
                        style={{marginRight: metrics.getWidthFromDP('2%')}}
                        key={i}>
                        <Text style={{fontSize: metrics.extraSmall}}>
                          {item.name}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </>
          )}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  storeItem: state.pokemonItem,
});

const mapDispatchToProps = dispatch => ({
  itemsActions: bindActionCreators(ItemsCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailItems);
