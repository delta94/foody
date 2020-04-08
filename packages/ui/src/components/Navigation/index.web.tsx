/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { css } from '@emotion/native';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';
// @ts-ignore
import { NavLink } from '../NavLink/index.web';
// @ts-ignore
import { Animated, LayoutChangeEvent } from 'react-native';
import { useSelector, useDispatch } from '@foody/core';
import { useMe } from '@foody/graphql';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Hamburger } from '../Hamburger';
import { Spacer } from '../Spacer';
import { ExitIcon } from '../Icon/Exit';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
  activeScreen: string;
  toggleLoginForm: () => void;
  toggleRegisterForm: () => void;
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
    label: 'Mes recettes favoris',
    screenName: 'Favoris'
  },
  {
    label: 'Historique',
    screenName: 'History'
  }
];

const HAMBURGER_HEIGHT = 68;

export const Navigation: React.FC<Props> = ({
  activeScreen,
  toggleLoginForm,
  toggleRegisterForm,
  navigation,
  logoutCallback
}) => {
  const [skipUseMe, setSkipUseMe] = useState(true);
  const [showNavigation, setShowNavigation] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [navStyles, setNavStyles] = useState([styles.navigation]);
  const isConnected = useSelector(
    (state: any): boolean => state.app.isConnected
  );
  const { isMobileAndTablet, isDesktop } = useMediaQuery();
  const dispatch = useDispatch();

  const toggleNav = () => setShowNavigation(!showNavigation);

  const navigationIsClose = isMobileAndTablet && !showNavigation;

  const navigationIsOpen = isMobileAndTablet && showNavigation;
  const translateY = useAnimation({
    type: 'spring',
    toValue: navigationIsOpen ? 0 : -navHeight
  });

  useEffect(() => {
    if (isConnected) {
      setSkipUseMe(false);
    }

    if (isMobileAndTablet && navigationIsClose) {
      setNavStyles([...navStyles, styles.tablet]);
    }

    if (isMobileAndTablet && navigationIsOpen) {
      setNavStyles([...navStyles, styles.active]);
    }

    if (isDesktop) {
      setNavStyles([styles.navigation]);
      setShowNavigation(false);
    }
  }, [
    isConnected,
    isMobileAndTablet && navigationIsClose,
    isMobileAndTablet && navigationIsOpen,
    isDesktop
  ]);

  useMe({
    skip: skipUseMe
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setNavHeight(height - HAMBURGER_HEIGHT);
  };

  if (isConnected) {
    return (
      <Animated.View
        style={[
          navStyles,
          {
            marginTop: isDesktop ? 0 : translateY
          }
        ]}
        onLayout={onLayout}>
        <Hamburger onPress={toggleNav} />
        {APP_SCREENS.map(({ label, screenName }: Screen, index: number) => (
          <NavLink
            key={index}
            label={label}
            isActive={activeScreen === screenName}
            onPress={() => navigation.navigate(screenName)}
          />
        ))}
        <Spacer width={10} />
        <ExitIcon
          onPress={() => {
            dispatch({ type: 'LOGOUT' });
            logoutCallback && logoutCallback();
          }}
        />
        <Hamburger onPress={toggleNav} />
      </Animated.View>
    );
  }

  return (
    <Animated.View
      style={[
        navStyles,
        {
          marginTop: isDesktop ? 0 : translateY
        }
      ]}
      onLayout={onLayout}>
      <NavLink label="Connexion" isFirst onPress={toggleLoginForm} />
      <NavLink label="Inscription" isLast onPress={toggleRegisterForm} />
      <Hamburger onPress={toggleNav} />
    </Animated.View>
  );
};

const styles = {
  navigation: css({
    flexDirection: 'row'
  }),
  tablet: css({
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'rgb(136, 16, 140)',
    padding: 20
  }),
  active: css({})
};
