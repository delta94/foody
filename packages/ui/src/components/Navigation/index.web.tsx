import React, { useEffect, useState } from 'react';
// @ts-ignore
import { css } from '@emotion/native';
// @ts-ignore
import { NavLink } from '../NavLink/index.web';
import { View } from 'react-native';
import { useSelector } from '@foody/core';
import { useMe } from '@foody/graphql';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Hamburger } from '../Hamburger';

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
  const [showNavigation, setShowNavigation] = useState(false);
  const [navStyles, setNavStyles] = useState([styles.navigation]);
  const isConnected = useSelector(
    (state: any): boolean => state.app.isConnected
  );
  const { isTablet, isDesktop } = useMediaQuery();

  const navigationIsClose = isTablet && !showNavigation;
  const navigationIsOpen = isTablet && showNavigation;

  useEffect(() => {
    if (isConnected) {
      setSkipUseMe(false);
    }

    if (isTablet && navigationIsClose) {
      setNavStyles([...navStyles, styles.tablet]);
    }

    if (isTablet && navigationIsOpen) {
      setNavStyles([...navStyles, styles.active]);
    }

    if (isDesktop) {
      setNavStyles([styles.navigation]);
      setShowNavigation(false);
    }
  });

  useMe({
    skip: skipUseMe
  });

  const toggleNavigation = () => setShowNavigation(!showNavigation);

  if (isConnected) {
    return (
      <>
        <Hamburger onPress={toggleNavigation} />
        <View style={navStyles}>
          {/* TODO: Create overlay for close navigation */}
          <Hamburger onPress={toggleNavigation} />
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
            isLast={!navigationIsOpen}
            onPress={() => {
              logout();
              logoutCallback && logoutCallback();
            }}
          />
        </View>
      </>
    );
  }

  return (
    <>
      <Hamburger onPress={toggleNavigation} />
      <View style={navStyles}>
        <NavLink label="Connexion" isFirst onPress={toggleLoginForm} />
        <NavLink label="Inscription" isLast onPress={toggleRegisterForm} />
      </View>
    </>
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
  }),
  active: css({
    transform: [
      {
        translateX: 0
      }
    ]
  })
};
