import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Androw from 'react-native-androw';
import BackIcon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import style from './style';
import globalStyle from '../../../assets/style/global';
import colors from '../../../assets/style/colors';
import { fontSizes } from '../../../assets/fonts';

export default class Navheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBackPressed: false,
    };
  }

  render() {
    const { isBackPressed } = this.state;
    return (
      <Androw style={style.shadowPlank}>
        <LinearGradient
          style={style.gradientPlank}
          colors={[colors.gray, colors.darkGray]}
          start={{ x: 0.3, y: -1 }}
          end={{ x: 0.7, y: 2 }}
        >
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={'#0000'}
            onPress={() => console.log('TODO: Back press')}
            onHideUnderlay={() => this.setState({ isBackPressed: false })}
            onShowUnderlay={() => this.setState({ isBackPressed: true })}
          >
            <View style={style.flexRow}>
              <BackIcon
                name='arrow-left'
                size={fontSizes.backTitle}
                color={isBackPressed ? colors.darkBlue : colors.lightBlue}
                style={globalStyle.mr(5)}
              />
              <Text style={isBackPressed ? style.backButtonPressed : style.backButton}>
                Go back
              </Text>
            </View>
          </TouchableHighlight>
          <Text style={style.title}>Kinoinfo</Text>
        </LinearGradient>
      </Androw>
    );
  }
}

Navheader.propTypes = {
  onSearch: PropTypes.func,
};
