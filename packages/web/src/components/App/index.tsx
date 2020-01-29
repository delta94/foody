import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ModalRegister,
  Logo,
  App,
  Text,
  NavLink,
  Spacer,
  Main,
  Title,
  Footer,
  // @ts-ignore
} from '@foody/ui';
// @ts-ignore
import { initializeWebStore, Provider, ModalLoginFormContainer } from '@foody/core';
// @ts-ignore
import { ApolloProvider, apolloClient } from '@foody/graphql';
import './index.css';

const reduxStore = initializeWebStore();

const MyApp: React.FC = () => {
  const [loginFormIsOpen, setShowLoginForm] = useState(false);
  const toggleLoginForm = () => setShowLoginForm(!loginFormIsOpen);

  const [registerFormIsOpen, setShowRegisterForm] = useState(false);
  const toggleRegisterForm = () => setShowRegisterForm(!registerFormIsOpen);

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={reduxStore}>
        <App>
          <Spacer height={50} />
          <View style={styles.header}>
            <Logo />
            <View style={styles.navigation}>
              <NavLink label="Connexion" isFirst onPress={toggleLoginForm} />
              <NavLink label="Inscription" isLast onPress={toggleRegisterForm} />
            </View>
          </View>
          <Spacer height={100} />
          <Main gutter>
            <Title title="Lorem ipsum dolor" />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente impedit
              maiores aspernatur culpa, vero amet accusamus corporis fugit nesciunt, nostrum nemo?
              Maxime corporis temporibus ducimus doloremque nemo dolorum esse.
            </Text>
          </Main>
          <Footer />
          <ModalLoginFormContainer isOpen={loginFormIsOpen} toggleModal={toggleLoginForm} />
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
  navigation: {
    flexDirection: 'row',
  },
});

export default MyApp;
