import React, { useEffect, useState } from 'react';
import { NavLink } from '../NavLink/index.web';
import { View, StyleSheet } from 'react-native';
import { useMe } from '@foody/graphql';

interface Props {
  activeScreen: string;
  isConnected: boolean;
  toggleLoginForm: () => void;
  toggleRegisterForm: () => void;
  logout: () => void;
  logoutCallback?: () => void;
  navigation: any;
}

interface Screen {
  label: string;
  screenName: string;
  isFirst?: boolean;
}

const APP_SCREENS: Screen[] = [
  {
    label: 'Recherche',
    isFirst: true,
    screenName: 'Search',
  },
  {
    label: 'Garde-manger',
    screenName: 'Pantries',
  },
  {
    label: 'Mes recettes',
    screenName: 'Recipes',
  },
  {
    label: 'Mes favoris',
    screenName: 'Favoris',
  },
  {
    label: 'Historique',
    screenName: 'History',
  },
];

export const Navigation: React.FC<Props> = ({
  activeScreen,
  isConnected,
  toggleLoginForm,
  toggleRegisterForm,
  navigation,
  logout,
  logoutCallback,
}) => {
  const [skipUseMe, setSkipUseMe] = useState(true);

  useEffect(() => {
    if (isConnected) {
      setSkipUseMe(false);
    }
  });

  useMe({
    skip: skipUseMe,
  });

  if (isConnected) {
    return (
      <View style={styles.navigation}>
        {APP_SCREENS.map(({ label, screenName }: Screen, index) => (
          <NavLink
            key={index}
            label={label}
            isActive={activeScreen === screenName}
            onPress={() => navigation.navigate(screenName)}
          />
        ))}
        <NavLink
          label="Déconnexion"
          isLast
          onPress={() => {
            logout();
            logoutCallback && logoutCallback();
          }}
        />
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
