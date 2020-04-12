import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ModalRegister,
  App,
  Spacer,
  Footer,
  Header,
  ModalLogin,
  AddToHomeScreen
  // @ts-ignore
} from '@foody/ui';
// @ts-ignore
import { useMediaQuery } from '@foody/ui';
import {
  createNavigator,
  SwitchRouter,
  SceneView
  // @ts-ignore
} from '@react-navigation/core';
// @ts-ignore
import { createBrowserApp } from '@react-navigation/web';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import Pantries from '../../screens/Pantries';
import Favoris from '../../screens/Favoris';
import History from '../../screens/History';
import './index.css';
// @ts-ignore
import { useSelector } from '@foody/core';

// @ts-ignore
const MyApp: React.FC = ({ descriptors, navigation }) => {
  const [loginFormIsOpen, setShowLoginForm] = useState(false);
  const toggleLoginForm = () => setShowLoginForm(!loginFormIsOpen);
  const [registerFormIsOpen, setShowRegisterForm] = useState(false);
  const toggleRegisterForm = () => setShowRegisterForm(!registerFormIsOpen);

  const activeKey = navigation.state.routes[navigation.state.index].key;
  const descriptor = descriptors[activeKey];

  const logoutCallback = (): void => {
    localStorage.removeItem('apollo-cache-persist');
    return navigation.navigate('Home');
  };

  const { isDesktop } = useMediaQuery();

  const jwt = useSelector((s: any) => s.app.jwt);

  useEffect(() => {
    if (jwt === null) {
      navigation.navigate('Home');
    }
  }, [jwt]);

  return (
    <App>
      <Header
        goToSearchScreen={() => navigation.navigate('Search')}
        activeScreen={activeKey}
        toggleLoginForm={toggleLoginForm}
        toggleRegisterForm={toggleRegisterForm}
        navigation={navigation}
        logoutCallback={logoutCallback}
      />
      <Spacer height={isDesktop ? 80 : 20} />
      <View style={[styles.content, { paddingHorizontal: isDesktop ? 30 : 5 }]}>
        <SceneView
          component={descriptor.getComponent()}
          navigation={descriptor.navigation}
        />
        <AddToHomeScreen />
        <Spacer height={100} />
        <Footer />
      </View>
      <ModalLogin
        isOpen={loginFormIsOpen}
        toggleModal={toggleLoginForm}
        onCompleted={() => navigation.navigate('Search')}
      />
      <ModalRegister
        isOpen={registerFormIsOpen}
        toggleModal={toggleRegisterForm}
        onCompleted={() => {
          toggleRegisterForm();
          toggleLoginForm();
        }}
      />
    </App>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1
  }
});

const AppNavigator = createNavigator(
  MyApp,
  SwitchRouter({
    Home,
    Search,
    Pantries,
    Favoris,
    History
  }),
  {}
);

const MyAppNavigator = createBrowserApp(AppNavigator);

export default MyAppNavigator;
