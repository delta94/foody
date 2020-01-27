import React, { useState } from 'react';
import { View } from 'react-native';
// @ts-ignore
import { Modal, Logo, App, Text, NavLink, Spacer, Main, Title, Footer } from '@foody/ui';
import './app.css';

const MyApp: React.FC = () => {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const toggleLoginModal = () => setModalLoginIsOpen(!modalLoginIsOpen);

  return (
    <App>
      <Spacer height={50} />
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50 }}
      >
        <Logo />
        <View style={{ flexDirection: 'row' }}>
          <NavLink label="Connexion" isFirst onPress={toggleLoginModal} />
          <NavLink label="Inscription" isLast />
        </View>
      </View>
      <Spacer height={100} />
      <Modal isOpen={modalLoginIsOpen} toggleModal={toggleLoginModal}>
        Login form
      </Modal>
      <Main gutter>
        <Title title="Lorem ipsum dolor" />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente impedit
          maiores aspernatur culpa, vero amet accusamus corporis fugit nesciunt, nostrum nemo?
          Maxime corporis temporibus ducimus doloremque nemo dolorum esse.
        </Text>
      </Main>
      <Footer />
    </App>
  );
};

export default MyApp;
