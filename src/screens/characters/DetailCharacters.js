import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import Theme from '~/styles';
import {HeaderImage, BackButton, typesColor} from '../components/componenList';
import globalStyles from '../components/globalStyles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CharactersCreators} from '~/store/duck/characters';

const {colors, metrics} = Theme;

const DetailCharacters = ({
  navigation,
  route,
  storePokemon,
  charactersActions,
}) => {
  React.useEffect(() => {
    charactersActions.getDetailCharRequest({name: route.params.name});
  }, []);

  const length = storePokemon?.detailChar?.moves?.length;
  const page1 = Math.ceil(length / 2);

  const PokemonTypes = props => {
    return (
      <View style={{flexDirection: 'row'}}>
        {props?.data?.map((item, i) => (
          <View
            style={{
              backgroundColor: typesColor(item.type.name).color,
              marginHorizontal: metrics.getWidthFromDP('2%'),
              borderRadius: metrics.small,
              elevation: 5,
            }}
            key={i}>
            <Text
              style={{
                color: 'white',
                fontSize: metrics.extraSmall,
                paddingVertical: 4,
                paddingHorizontal: 8,
                fontWeight: '600',
              }}>
              {item.type.name}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const StatsBar = ({title, max, val}) => {
    const statProgress = ((val / max) * 45).toFixed(0);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: metrics.getWidthFromDP('1%')}}>0</Text>
          <View
            style={{
              backgroundColor: colors.gainsBoro,
              width: metrics.getWidthFromDP('46%'),
              height: metrics.getHeightFromDP('1%'),
              justifyContent: 'center',
              borderRadius: 4,
              paddingHorizontal: 1,
            }}>
            <View
              style={{
                backgroundColor: colors.oceanGreen,
                width: metrics.getWidthFromDP(statProgress),
                height: metrics.getHeightFromDP('0.7'),
                borderRadius: 4,
              }}
            />
          </View>
          <Text style={{marginLeft: metrics.getWidthFromDP('1%')}}>{max}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.containerWrap}>
      <ScrollView contentContainerStyle={globalStyles.containerStyle}>
        <BackButton onPress={() => navigation.goBack()} />
        <>
          {storePokemon.loadingDetail || storePokemon.detailChar.length == 0 ? (
            <Text style={{textAlign: 'center'}}>Loading</Text>
          ) : (
            <>
              <HeaderImage
                exp={storePokemon?.detailChar?.base_experience}
                front={storePokemon?.detailChar?.sprites?.front_default}
                back={storePokemon?.detailChar?.sprites?.back_default}
                shiny={storePokemon?.detailChar?.sprites?.front_shiny}
              />
              <Text
                style={{
                  color: colors.mediumBlack,
                  fontSize: metrics.big,
                  fontWeight: 'bold',
                }}>
                {storePokemon?.detailChar?.species?.name}
              </Text>
              <PokemonTypes data={storePokemon?.detailChar.types} />
              <View style={globalStyles.containerCard}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    marginVertical: metrics.getHeightFromDP('1%'),
                    flexDirection: 'row',
                    marginHorizontal: metrics.regular,
                  }}>
                  <View>
                    <Text style={globalStyles.descText}>HEIGHT</Text>
                    <Text style={globalStyles.unitText}>
                      {storePokemon.detailChar.height} M
                    </Text>
                  </View>
                  <View>
                    <Text style={globalStyles.descText}>WEIGHT</Text>
                    <Text style={globalStyles.unitText}>
                      {storePokemon.detailChar.weight} KG
                    </Text>
                  </View>
                </View>
              </View>

              <View style={globalStyles.containerCard}>
                <View style={globalStyles.containerInCard}>
                  <Text style={globalStyles.descText}>ABILITIES</Text>
                  {storePokemon?.detailChar?.abilities?.map((item, i) => (
                    <View key={i}>
                      <Text>{item.ability.name}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={globalStyles.containerCard}>
                <View style={globalStyles.containerInCard}>
                  <Text style={globalStyles.descText}>STATISTIC </Text>
                  <StatsBar
                    title={'HP'}
                    max={255}
                    val={storePokemon?.detailChar?.stats[0]?.base_stat}
                  />
                  <StatsBar
                    title={'ATTACK'}
                    max={190}
                    val={storePokemon?.detailChar?.stats[1]?.base_stat}
                  />
                  <StatsBar
                    title={'DEFENSE'}
                    max={250}
                    val={storePokemon?.detailChar?.stats[2]?.base_stat}
                  />
                  <StatsBar
                    title={'SPECIAL ATTACK'}
                    max={194}
                    val={storePokemon?.detailChar?.stats[3]?.base_stat}
                  />
                  <StatsBar
                    title={'SPECIAL DEFENSE'}
                    max={250}
                    val={storePokemon?.detailChar?.stats[4]?.base_stat}
                  />
                  <StatsBar
                    title={'SPEED'}
                    max={200}
                    val={storePokemon?.detailChar?.stats[5]?.base_stat}
                  />
                </View>
              </View>
              <View style={{marginBottom: metrics.getHeightFromDP('10%')}}>
                <View style={globalStyles.containerCard}>
                  <View style={globalStyles.containerInCard}>
                    <Text style={globalStyles.descText}>MOVES</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        {storePokemon?.detailChar?.moves
                          .slice(0, page1)
                          .map((item, i) => (
                            <View
                              style={{
                                marginRight: metrics.getWidthFromDP('2%'),
                              }}
                              key={i}>
                              <Text style={{fontSize: metrics.extraSmall}}>
                                {item.move.name}
                              </Text>
                            </View>
                          ))}
                      </View>
                      <View>
                        {storePokemon?.detailChar?.moves
                          .slice(page1 + 1, length)
                          .map((item, i) => (
                            <View
                              style={{
                                marginRight: metrics.getWidthFromDP('2%'),
                              }}
                              key={i}>
                              <Text style={{fontSize: metrics.extraSmall}}>
                                {item.move.name}
                              </Text>
                            </View>
                          ))}
                      </View>
                    </View>
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
  storePokemon: state.pokemonChar,
});

const mapDispatchToProps = dispatch => ({
  charactersActions: bindActionCreators(CharactersCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailCharacters);
