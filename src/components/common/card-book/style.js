import { StyleSheet } from 'react-native';
import colors from '../../../assets/style/colors';
import { fonts, fontSizes } from '../../../assets/fonts';

export default StyleSheet.create({
  card: {
    borderColor: colors.darkGray,
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    paddingTop: 15,
    margin: 10,
  },
  popularCard: {
    borderColor: colors.darkBlue,
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    paddingTop: 15,
    margin: 10,
  },
  cardTitle: {
    color: colors.white,
    fontFamily: fonts.semibold,
    fontSize: fontSizes.winTitle,
    lineHeight: 25,
  },
  cardRating: {
    color: colors.lightBlue,
    fontFamily: fonts.semibold,
    fontSize: fontSizes.winTitle,
    lineHeight: 25,
  },
  cardViews: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardViewsLabel: {
    color: colors.white,
    fontFamily: fonts.semibold,
    fontSize: fontSizes.smaller,
  },
  cardDescription: {
    color: colors.lightGray,
    fontFamily: fonts.semibold,
    fontSize: fontSizes.smaller,
  },
});
