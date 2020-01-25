import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavLink } from '@foody/ui/dist/components/NavLink/index.web';
import { Layout } from '@foody/ui';
import { View } from 'react-native';

storiesOf('Navigation', module)
  .add('Default', () => (
    <Layout>
      <View
        style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
        accessibilityRole="menubar"
      >
        <NavLink label="Connexion" onPress={() => console.log('test')} isFirst />
        <NavLink label="Inscription" onPress={() => console.log('test')} isLast />
      </View>
    </Layout>
  ))
  .add('Connected', () => (
    <Layout>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <NavLink label="Recherche" onPress={() => console.log('test')} isFirst />
        <NavLink label="Garde-manger" onPress={() => console.log('test')} />
        <NavLink label="Mes recettes" onPress={() => console.log('test')} />
        <NavLink label="Mes favoris" onPress={() => console.log('test')} />
        <NavLink label="Historique" onPress={() => console.log('test')} isLast />
      </View>
    </Layout>
  ));
