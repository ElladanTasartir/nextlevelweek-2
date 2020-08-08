import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favourites from '../pages/Favourites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  /* Já tem um NavigationContainer que chama esse nosso BottomTabs, então, não precisa de outro
  englobando essa nossa navegação, pois o mesmo só precisa aparecer uma vez */
  return (
    <Navigator>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="Favourites" component={Favourites} />
    </Navigator>
  );
}

export default StudyTabs;
