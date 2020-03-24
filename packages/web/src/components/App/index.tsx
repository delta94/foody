import React, { useState } from 'react';
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

  return (
    <App>
      <Spacer height={40} />
      <Header
        goToSearchScreen={() => navigation.navigate('Search')}
        activeScreen={activeKey}
        toggleLoginForm={toggleLoginForm}
        toggleRegisterForm={toggleRegisterForm}
        navigation={navigation}
        logoutCallback={logoutCallback}
      />
      <Spacer height={isDesktop ? 80 : 40} />
      <View style={styles.content}>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50
  },
  content: {
    flex: 1,
    paddingHorizontal: 30
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
