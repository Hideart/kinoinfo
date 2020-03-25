import React from 'react';
import { View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import Navheader from '../common/navheader';
import colors from '../../assets/style/colors';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={[colors.gray, colors.darkGray]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <Navheader />
          { this.props.children }
        </LinearGradient>
      </View>
    );
  }
}

BaseLayout.propTypes = {
  children: PropTypes.element,
};
