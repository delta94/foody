import React, { useEffect, useState } from 'react';
// @ts-ignore
import { css } from '@emotion/native';
// @ts-ignore
import { NavLink } from '../NavLink/index.web';
import { View } from 'react-native';
import { useSelector } from '@foody/core';
import { useMe } from '@foody/graphql';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface Props {
  activeScreen: string;
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
    screenName: 'Search'
  },
  {
    label: 'Garde-manger',
    screenName: 'Pantries'
  },
  {
    label: 'Mes recettes',
    screenName: 'Recipes'
  },
  {
    label: 'Mes favoris',
    screenName: 'Favoris'
  },
  {
    label: 'Historique',
    screenName: 'History'
  }
];

export const Navigation: React.FC<Props> = ({
  activeScreen,
  toggleLoginForm,
  toggleRegisterForm,
  navigation,
  logout,
  logoutCallback
}) => {
  const [skipUseMe, setSkipUseMe] = useState(true);
  const isConnected = useSelector(
    (state: any): boolean => state.app.isConnected
  );

  useEffect(() => {
    if (isConnected) {
      setSkipUseMe(false);
    }
  });

  useMe({
    skip: skipUseMe
  });

  const { isTablet } = useMediaQuery();

  return (
    <View style={[styles.navigation, isTablet ? styles.tablet : {}]}>
      {isConnected ? (
        <>
          {APP_SCREENS.map(({ label, screenName }: Screen, index: number) => (
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
        </>
      ) : (
        <>
          <NavLink label="Connexion" isFirst onPress={toggleLoginForm} />
          <NavLink label="Inscription" isLast onPress={toggleRegisterForm} />
        </>
      )}
    </View>
  );
};

const styles = {
  navigation: css({
    flexDirection: 'row'
  }),
  tablet: css({
    flexDirection: 'column',
    position: 'absolute',
    top: -40,
    right: 0,
    width: 300,
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    transform: [
      {
        translateX: '100%'
      }
    ]
  })
};
