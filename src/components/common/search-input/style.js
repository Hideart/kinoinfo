import { StyleSheet } from 'react-native';

import { fonts, fontSizes } from '../../../assets/fonts';
import colors from '../../../assets/style/colors';

export default StyleSheet.create({
  inuptWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  inputBackground: {
    backgroundColor: colors.lightGray,
    height: 35,
    width: '80%',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  input: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.input,
    color: colors.darkGray,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 40,
    flex: 1,
  },
  inputPlaceholder: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 35,
    backgroundColor: '#0005',
  },
  placeholderText: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.input,
    color: colors.darkGray,
  },
  clearSearch: {
    position: 'absolute',
    right: 10,
    top: 4,
  },
});
