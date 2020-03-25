import { StyleSheet } from 'react-native';

import { fonts, fontSizes } from '../../../assets/fonts';
import colors from '../../../assets/style/colors';

export default StyleSheet.create({
  m: (value) => ({ margin: value }),
  mr: (value) => ({ marginRight: value }),
  ml: (value) => ({ marginLeft: value }),
  mt: (value) => ({ marginTop: value }),
  mb: (value) => ({ marginBottom: value }),
  title: {
    fontFamily: fonts.light,
    color: colors.white,
    fontSize: fontSizes.winTitle,
    position: 'absolute',
    width: 142,
    marginLeft: -71,
    left: '50%',
    textAlign: 'center',
  },
  shadowPlank: {
    height: 130,
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
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
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
