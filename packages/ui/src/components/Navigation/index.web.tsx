import React from 'react';
import { NavLink } from '../NavLink/index.web';
import { View, StyleSheet } from 'react-native';

interface Props {
  isConnected: boolean;
  toggleLoginForm: () => any;
  toggleRegisterForm: () => any;
}

export const Navigation: React.FC<Props> = ({
  isConnected,
  toggleLoginForm,
  toggleRegisterForm,
}) => {
  if (isConnected) {
    return (
      <View style={styles.navigation}>
        <NavLink label="Recherche" isFirst onPress={() => console.log('on press')} />
        <NavLink label="Garde-manger" onPress={() => console.log('on press')} />
        <NavLink label="Mes recettes" onPress={() => console.log('on press')} />
        <NavLink label="Mes favoris" onPress={() => console.log('on press')} />
        <NavLink label="Historique" isLast onPress={() => console.log('on press')} />
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
