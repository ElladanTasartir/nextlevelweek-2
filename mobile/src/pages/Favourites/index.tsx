import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favourites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((res) => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);

        setFavorites(favoritedTeachers);
      }
    });
  }

  /*  
  useFocusEffect vem do react-navigation
  É um método que funciona igual o useEffect, porém, é ativado não toda vez
  em que a tela é montada, mas sim, quando a tela recebe uma nevagação para ela
  Já que com navigation bottom tabs o componetne é construído apenas uma vez e depois
  recebe navegações nele
  */

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
}

export default Favourites;
