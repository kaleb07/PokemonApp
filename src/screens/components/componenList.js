import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Theme from '~/styles';

const {colors, metrics} = Theme;

export const CardComponents = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cardComponents}>
      <Text>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

export const HeaderImage = props => {
  const colorGenerator = '#' + Math.random().toString(16).substr(-6);
  return (
    <View
      style={{
        backgroundColor: colorGenerator,
        height: metrics.getHeightFromDP('30%'),
        width: metrics.getWidthFromDP('90%'),
        borderBottomRightRadius: metrics.getWidthFromDP('12%'),
        borderTopLeftRadius: metrics.getWidthFromDP('12%'),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}>
        {props.exp && (
          <Text
            style={{
              color: 'white',
              fontSize: metrics.small,
              fontWeight: 'bold',
            }}>
            EXP {''} {props.exp}
          </Text>
        )}
      </View>
      <View style={{alignItems: 'space-between'}}>
        <Image
          source={{
            uri: props.front,
          }}
          style={{
            width: metrics.getWidthFromDP('40%'),
            height: metrics.getWidthFromDP('40%'),
          }}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          bottom: -5,
          alignItems: 'space-between',
        }}>
        <Image
          source={{
            uri: props.back,
          }}
          style={{
            width: metrics.getWidthFromDP('20%'),
            height: metrics.getWidthFromDP('20%'),
          }}
          resizeMode="cover"
        />
        <Image
          source={{
            uri: props.shiny,
          }}
          style={{
            width: metrics.getWidthFromDP('20%'),
            height: metrics.getWidthFromDP('20%'),
          }}
          resizeMode="cover"
        />
      </View>

      {props.cost && (
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: 'white',
            borderBottomRightRadius: metrics.getWidthFromDP('12%'),
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            elevation: 4,
          }}>
          {props.cost > 0 ? (
            <>
              <Icon
                name="currency-usd"
                type="material-community"
                size={metrics.getWidthFromDP('10%')}
                color={colors.paoloVeroneseGreen}
              />
              <Text style={styles.costText}>{props.cost.toString()}</Text>
            </>
          ) : (
            <>
              <Icon
                name="currency-usd"
                type="material-community"
                size={metrics.getWidthFromDP('10%')}
                color={colors.paoloVeroneseGreen}
              />
              <Text style={styles.costText}>Free</Text>
            </>
          )}
        </View>
      )}
    </View>
  );
};

export const BackButton = props => {
  return (
    <View
      style={{
        marginTop: metrics.getHeightFromDP('5%'),
        width: '100%',
        alignItems: 'flex-start',
        marginLeft: metrics.small,
      }}>
      <Icon
        name="chevron-left"
        type="material-community"
        size={metrics.getWidthFromDP('10%')}
        color="black"
        onPress={props.onPress}
      />
    </View>
  );
};

export const typesColor = name => {
  if (name == 'normal') {
    return {color: colors.silverChalice};
  } else if (name == 'fire') {
    return {color: colors.roseMader};
  } else if (name == 'water') {
    return {color: colors.darkSkyBlue};
  } else if (name == 'electric') {
    return {color: colors.lemonGracier};
  } else if (name == 'grass') {
    return {color: colors.emerald};
  } else if (name == 'ice') {
    return {color: colors.powderBlue};
  } else if (name == 'fighting') {
    return {color: colors.windsorTan};
  } else if (name == 'poison') {
    return {color: colors.patriarch};
  } else if (name == 'ground') {
    return {color: colors.darkOrange};
  } else if (name == 'flying') {
    return {color: colors.littleBoyBlue};
  } else if (name == 'psychic') {
    return {color: colors.fuchsia};
  } else if (name == 'bug') {
    return {color: colors.fuchsia};
  } else if (name == 'rock') {
    return {color: colors.fuchsia};
  } else if (name == 'ghost') {
    return {color: colors.fuchsia};
  } else if (name == 'dragon') {
    return {color: colors.fuchsia};
  } else if (name == 'dark') {
    return {color: colors.fuchsia};
  } else if (name == 'steel') {
    return {color: colors.fuchsia};
  } else if (name == 'fairy') {
    return {color: colors.fuchsia};
  }
};

const styles = StyleSheet.create({
  cardComponents: {
    alignSelf: 'center',
    width: metrics.getWidthFromDP('40%'),
    height: metrics.getWidthFromDP('25%'),
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginVertical: metrics.getHeightFromDP('1%'),
    marginHorizontal: metrics.getWidthFromDP('3%'),
  },
  costText: {
    fontSize: metrics.regular,
    marginRight: metrics.small,
    color: colors.mint,
    fontWeight: '600',
  },
});
