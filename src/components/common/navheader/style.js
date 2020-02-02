import { StyleSheet } from 'react-native';

import { fonts, fontSizes } from '../../../assets/fonts';
import colors from '../../../assets/style/colors';

export default StyleSheet.create({
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: fonts.light,
    color: colors.white,
    fontSize: fontSizes.winTitle,
   },
  shadowPlank: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 25,
    elevation: 24,
  },
  gradientPlank: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    fontFamily: fonts.light,
    fontSize: fontSizes.backTitle,
    color: colors.lightBlue,
  },
  backButtonPressed: {
    fontFamily: fonts.light,
    fontSize: fontSizes.backTitle,
    color: colors.darkBlue,
  },
  breadcrumbsNav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: fontSizes.large,
  },
});
