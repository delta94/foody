import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ModalLogin,
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
import './index.css';

const MyApp: React.FC = () => {
  const [loginFormIsOpen, setShowLoginForm] = useState(false);
  const toggleLoginForm = () => setShowLoginForm(!loginFormIsOpen);

  const [registerFormIsOpen, setShowRegisterForm] = useState(false);
  const toggleRegisterForm = () => setShowRegisterForm(!registerFormIsOpen);

  return (
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
      <ModalLogin isOpen={loginFormIsOpen} toggleModal={toggleLoginForm} />
      <ModalRegister isOpen={registerFormIsOpen} toggleModal={toggleRegisterForm} />
    </App>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  navigation: {
    flexDirection: 'row',
  },
});

export default MyApp;
