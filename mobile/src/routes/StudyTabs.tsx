import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TeacherList from '../pages/TeacherList';
import Favourites from '../pages/Favourites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  /* Já tem um NavigationContainer que chama esse nosso BottomTabs, então, não precisa de outro
  englobando essa nossa navegação, pois o mesmo só precisa aparecer uma vez */
  return (
    <Navigator
      tabBarOptions={{
        style: {
          /* É um tipo de boxShadow do Android */
          elevation: 0,
          /* Do IOS */
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        /* 
        inactive: aba inativa
        active: aba ativa
        backgroundColor: cor de fundo no momento
        tintColor: cor do texto  
        */
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
      <Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
