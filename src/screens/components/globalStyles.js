import {StyleSheet} from 'react-native';
import Theme from '~/styles';
const {colors, metrics} = Theme;

const globalStyles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    backgroundColor: colors.ghostWhite,
  },
  containerStyle: {alignItems: 'center'},
  descText: {
    fontSize: metrics.extraSmall,
    color: colors.mediumBlack,
    fontWeight: 'bold',
  },
  unitText: {
    fontSize: metrics.extraSmall,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center',
  },
  containerCard: {
    backgroundColor: 'white',
    width: metrics.getWidthFromDP('90%'),
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
  },
  containerInCard: {
    marginVertical: metrics.getHeightFromDP('1%'),
    marginHorizontal: metrics.getWidthFromDP('3%'),
  },
});

export default globalStyles;
