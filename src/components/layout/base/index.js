import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import Navheader from '../../common/navheader';
import colors from '../../../assets/style/colors';
import globalStyle from '../../../assets/style/global';

export default class BaseLayout extends React.Component {
  render() {
    const { contentContainerStyle } = this.props;
    return (
      <View style={globalStyle.flex(1)}>
        <LinearGradient
          colors={[colors.gray, colors.darkGray]}
          style={globalStyle.flex(1)}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <Navheader />
          <ScrollView contentContainerStyle={contentContainerStyle}>
            { this.props.children }
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

BaseLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  contentContainerStyle: PropTypes.object,
};
