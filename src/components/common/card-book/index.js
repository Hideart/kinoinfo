import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import style from './style';
import globalStyle from '../../../assets/style/global';
import colors from '../../../assets/style/colors';
import { fontSizes } from '../../../assets/fonts';

export default class CardBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  componentDidMount() {
    const { title, description } = this.props;
    let shortDesc = description;
    if (description.trim() && description.length > 100) {
      const shortString = description.substring(0, 100);
      shortDesc = `${shortString.substring(0, shortString.lastIndexOf(' '))}...`;
    }
    let shortTitle = title;
    if (title.trim() && title.length > 27) {
      const shortString = title.substring(0, 27);
      shortTitle = `${shortString.substring(0, shortString.lastIndexOf(' '))}...`;
    }
    this.setState({
      description: shortDesc,
      title: shortTitle,
    });
  }

  _onCardPress = () => {
    console.log('TODO: Card press');
  }

  cardBody = () => {
    const { isPopular } = this.props;
    if (isPopular) {
      return (
        <LinearGradient
          style={style.popularCard}
          colors={[colors.gray, colors.darkGray]}
          start={{ x: 0.5, y: -0.2 }}
          end={{ x: 0.5, y: 1 }}
        >
          <Text style={[style.cardTitle, globalStyle.mb(7)]}>
            {this.state.title}
          </Text>
          <Text style={style.cardRating}>
            {this.props.rating}
          </Text>
          <View style={[style.cardViews, globalStyle.mb(5)]}>
            <Icon
              name='book-open'
              color={colors.white}
              size={fontSizes.smaller}
              style={globalStyle.mr(7)}
            />
            <Text style={style.cardViewsLabel}>
              {this.props.views}
            </Text>
          </View>
          <Text style={style.cardDescription}>
            {this.state.description}
          </Text>
        </LinearGradient>
      );
    }
    return (
      <View style={style.card}>
          <Text style={[style.cardTitle, globalStyle.mb(7)]}>
            {this.state.title}
          </Text>
          <Text style={style.cardRating}>
            {this.props.rating}
          </Text>
          <View style={[style.cardViews, globalStyle.mb(5)]}>
            <Icon
              name='book-open'
              color={colors.white}
              size={fontSizes.smaller}
              style={globalStyle.mr(7)}
            />
            <Text style={style.cardViewsLabel}>
              {this.props.views}
            </Text>
          </View>
          <Text style={style.cardDescription}>
            {this.state.description}
          </Text>
        </View>
    );
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.onCardPress}
        activeOpacity={0.7}
        underlayColor={'#0000'}
      >
        {this.cardBody()}
      </TouchableHighlight>
    );
  }
}

CardBook.propTypes = {
  isNew: PropTypes.bool,
  isPopular: PropTypes.bool,
  rating: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  views: PropTypes.number,
};
