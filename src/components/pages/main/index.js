import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import BaseLayout from '../../layout/base';
import InfoCard from '../../common/info-card';
import { fetchApi } from '../../../utils/api';
import colors from '../../../assets/style/colors';

export default class MainPage extends React.Component {
  state = {
    filmList: [],
    loading: true,
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetchApi('https://swapi.co/api/films');
    this.setState({
      filmList: response.result.results,
    });
    this.setState({ loading: false });
  }

  render() {
    const { filmList, loading } = this.state;
    return (
      <BaseLayout contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        {loading ? (
          <View style={{
            flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center',
          }}>
            <ActivityIndicator color={colors.lightBlue} size="large" />
          </View>
        ) : (
          filmList.map((el) => (
            <InfoCard
              key={el.url}
              style={{ marginVertical: 10 }}
              title={`Episode ${el.episode_id}:\n${el.title}`}
              description={el.opening_crawl}
              producer={el.producer}
              releaseDate={el.release_date}
            />
          ))
        )}
      </BaseLayout>
    );
  }
}
