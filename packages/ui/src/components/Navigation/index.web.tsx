import React from 'react';
import { NavLink } from '../NavLink/index.web';
import { View, StyleSheet } from 'react-native';

interface Props {
  isConnected: boolean;
  toggleLoginForm: () => any;
  toggleRegisterForm: () => any;
  logout: () => any;
  navigation: any;
}

export const Navigation: React.FC<Props> = ({
  isConnected,
  toggleLoginForm,
  toggleRegisterForm,
  navigation,
  logout,
}) => {
  if (isConnected) {
    return (
      <View style={styles.navigation}>
        <NavLink label="Recherche" isFirst onPress={() => navigation.navigate('Search')} />
        <NavLink label="Garde-manger" onPress={() => navigation.navigate('Pantries')} />
        <NavLink label="Mes recettes" onPress={() => navigation.navigate('Recipes')} />
        <NavLink label="Mes favoris" onPress={() => navigation.navigate('Favoris')} />
        <NavLink label="Historique" onPress={() => navigation.navigate('History')} />
        <NavLink label="Déconnexion" isLast onPress={logout} />
      </View>
    );
  }

  return (
    <View style={styles.navigation}>
      <NavLink label="Connexion" isFirst onPress={toggleLoginForm} />
      <NavLink label="Inscription" isLast onPress={toggleRegisterForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
  },
});
