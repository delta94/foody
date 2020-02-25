import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ModalRegister,
  Logo,
  App,
  Spacer,
  Footer,
  // @ts-ignore
} from '@foody/ui';
// @ts-ignore
import {
  initializeWebStore,
  Provider,
  ModalLoginFormContainer,
  NavigationContainer,
} from '@foody/core';
import {
  createNavigator,
  SwitchRouter,
  SceneView,
  // @ts-ignore
} from '@react-navigation/core';
// @ts-ignore
import { createBrowserApp } from '@react-navigation/web';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import Pantries from '../../screens/Pantries';
import Favoris from '../../screens/Favoris';
import Recipes from '../../screens/Recipes';
import History from '../../screens/History';
import './index.css';

const reduxStore = initializeWebStore();

// @ts-ignore
const MyApp: React.FC = ({ descriptors, navigation }) => {
  const [loginFormIsOpen, setShowLoginForm] = useState(false);
  const toggleLoginForm = () => setShowLoginForm(!loginFormIsOpen);
  const [registerFormIsOpen, setShowRegisterForm] = useState(false);
  const toggleRegisterForm = () => setShowRegisterForm(!registerFormIsOpen);

  const activeKey = navigation.state.routes[navigation.state.index].key;
  const descriptor = descriptors[activeKey];

  const logoutCallback = () => {
    localStorage.removeItem('apollo-cache-persist');
    return navigation.navigate('Home');
  };

  return (
    <Provider store={reduxStore}>
      <App>
        <Spacer height={40} />
        <View style={styles.header}>
          <Logo onPress={() => navigation.navigate('Search')} />
          <NavigationContainer
            toggleLoginForm={toggleLoginForm}
            toggleRegisterForm={toggleRegisterForm}
            navigation={navigation}
            logoutCallback={logoutCallback}
          />
        </View>
        <Spacer height={80} />
        <View style={styles.content}>
          <SceneView component={descriptor.getComponent()} navigation={descriptor.navigation} />
          <Spacer height={100} />
          <Footer />
        </View>
        <ModalLoginFormContainer
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
    </Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
  },
});

const AppNavigator = createNavigator(
  MyApp,
  SwitchRouter({
    Home,
    Search,
    Pantries,
    Favoris,
    Recipes,
    History,
  }),
  {}
);

const MyAppNavigator = createBrowserApp(AppNavigator);

export default MyAppNavigator;
