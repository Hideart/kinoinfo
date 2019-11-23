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
import SearchInput from '../search-input';

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
          <View style={style.breadcrumbsNav}>
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
                <Text
                  style={isBackPressed ? style.backButtonPressed : style.backButton}
                >
                  Назад
                </Text>
              </View>
            </TouchableHighlight>
            <Text style={style.title}>Популярное</Text>
            <TouchableHighlight
              activeOpacity={0.7}
              underlayColor={'#0000'}
              onPress={() => console.log('TODO: Settings press')}
              onHideUnderlay={() => this.setState({ isSettingsPressed: false })}
              onShowUnderlay={() => this.setState({ isSettingsPressed: true })}
            >
              <View style={style.flexRow}>
                <Icon
                  style={globalStyle.ml(15)}
                  name='settings'
                  color={colors.white}
                  size={fontSizes.winTitle}
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={style.breadcrumbsNav}>
            <SearchInput onSearch={this.props.onSearch} />
          </View>
        </LinearGradient>
      </Androw>
    );
  }
}

Navheader.propTypes = {
  onSearch: PropTypes.func,
};
