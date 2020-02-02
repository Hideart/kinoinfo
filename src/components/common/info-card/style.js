import { StyleSheet } from 'react-native';
import colors from '../../../assets/style/colors';
import { fonts, fontSizes } from '../../../assets/fonts';

export default StyleSheet.create({
  card: {
    borderColor: colors.darkGray,
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
  },
  poster: {
    maxWidth: '40%',
    maxHeight: 180,
    resizeMode: 'contain',
  },
  popularCard: {
    borderColor: colors.lightBlue,
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
  },
  info: {
    color: colors.white,
    marginVertical: 5,
    fontFamily: fonts.semibold,
  },
  cardTitle: {
    color: colors.lightBlue,
    fontFamily: fonts.semibold,
    fontSize: fontSizes.winTitle,
    lineHeight: 25,
  },
  cardDescription: {
    marginTop: 5,
    color: colors.lightGray,
    fontFamily: fonts.semibold,
    fontSize: fontSizes.smaller,
  },
});
