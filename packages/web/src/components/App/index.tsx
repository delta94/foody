import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ModalRegister,
  Logo,
  App,
  Text,
  Spacer,
  Main,
  Title,
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
// @ts-ignore
import { ApolloProvider, apolloClient } from '@foody/graphql';
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

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={reduxStore}>
        <App>
          <Spacer height={50} />
          <View style={styles.header}>
            <Logo onPress={() => navigation.navigate('Search')} />
            <NavigationContainer
              toggleLoginForm={toggleLoginForm}
              toggleRegisterForm={toggleRegisterForm}
              navigation={navigation}
            />
          </View>
          <Spacer height={100} />
          <SceneView component={descriptor.getComponent()} navigation={descriptor.navigation} />
          <Footer />
          <ModalLoginFormContainer
            isOpen={loginFormIsOpen}
            toggleModal={toggleLoginForm}
            onCompleted={() => navigation.navigate('Search')}
          />
          <ModalRegister isOpen={registerFormIsOpen} toggleModal={toggleRegisterForm} />
        </App>
      </Provider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
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
