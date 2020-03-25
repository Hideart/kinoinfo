import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './style';
import globalStyles from '../../../assets/style/global';
import colors from '../../../assets/style/colors';

const posterImage = require('../../../assets/img/poster.jpg');

export default class InfoCard extends React.Component {
  render() {
    const {
      onPress,
      title,
      description,
      style,
      producer,
      releaseDate,
    } = this.props;
    return (
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.7}
        underlayColor={'#0000'}
        style={style}
      >
        <LinearGradient
          style={styles.popularCard}
          colors={[colors.gray, colors.darkGray]}
          start={{ x: 0.5, y: -0.2 }}
          end={{ x: 0.5, y: 1 }}
        >
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <Image style={styles.poster} source={posterImage} />
            <View style={{ flexDirection: 'column', paddingLeft: 10, width: '60%' }}>
              <Text style={[styles.cardTitle, globalStyles.mb(7)]}>
                {title}
              </Text>
              <Text style={styles.info}>
                {producer}
              </Text>
              <Text style={styles.info}>
                {moment(releaseDate).format('LL')}
              </Text>
              <Text style={styles.cardDescription} numberOfLines={5}>
                {description}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableHighlight>
    );
  }
}

InfoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
  producer: PropTypes.string,
  releaseDate: PropTypes.string,
};
