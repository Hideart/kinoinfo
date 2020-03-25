import React from 'react';
import { ScrollView, View } from 'react-native';

import BaseLayout from '../../layout';
import CardBook from '../../common/card-book';
import Rating from '../../common/rating';
import globalStyle from '../../../assets/style/global';
import style from './style';

export default class MainPage extends React.Component {
  render = () => (
    <BaseLayout>
      <Rating />
      <ScrollView style={globalStyle.p(10)}>
        <View style={style.cardGroup}>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={true}
              isPopular={false}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={true}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={true}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={true}
              isPopular={false}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={false}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={true}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={false}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={false}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка и бла блу бли бла'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка asd asdasd a asdasdasda asdasdasdasd asdas'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={false}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={false}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={false}
            />
          </View>
          <View style={globalStyle.w('50%')}>
            <CardBook
              title='Тестовая книжка'
              description='Тестовое описание странной книги на главной странице и оно длиннее заголовка'
              views={1543}
              rating={4.6}
              isNew={false}
              isPopular={false}
            />
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  )
}
