import React from 'react';
import {
  View, TextInput, TouchableHighlight, Text, Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import style from './style';
import globalStyle from '../../../assets/style/global';
import { fontSizes } from '../../../assets/fonts';
import colors from '../../../assets/style/colors';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputFocused: false,
      searchText: '',
    };
    this.textInput = React.createRef();
  }

  onStartSearch = () => {
    this.setState({ isInputFocused: true });
    this.textInput.current.focus();
  }

  onSearch = (event) => {
    this.setState({ searchText: event.target.value });
    if (this.props.onSearch) {
      this.props.onSearch(event.target.value);
    }
  }

  onClearSearch = () => {
    this.setState({
      isInputFocused: false,
      searchText: '',
    });
    Keyboard.dismiss();
  }

  render() {
    const { isInputFocused, searchText } = this.state;
    return (
      <View style={style.inuptWrapper}>
        <View style={style.inputBackground}>
          <TouchableHighlight
            onPress={this.onStartSearch}
            activeOpacity={0.7}
            underlayColor={'#0000'}
          >
            <View
              style={isInputFocused ? { display: 'none' } : style.inputPlaceholder}
            >
              <Icon
                name='search'
                size={fontSizes.winTitle}
                color={colors.darkGray}
              />
              <Text style={[style.placeholderText, globalStyle.ml(10)]}>
                Поиск
              </Text>
            </View>
          </TouchableHighlight>
          <TextInput
            ref={this.textInput}
            style={style.input}
            onChange={this.onSearch}
            onSubmitEditing={this.props.onSubmit}
            value={searchText}
          />
          <TouchableHighlight
            onPress={this.onClearSearch}
            activeOpacity={0.7}
            underlayColor={'#0000'}
            style={isInputFocused ? style.clearSearch : globalStyle.invisible}
          >
            <Icon
              name='x-circle'
              color={colors.darkGray}
              size={fontSizes.winTitle}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func,
  onSubmit: PropTypes.func,
};
