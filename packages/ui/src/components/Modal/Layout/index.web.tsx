import React, { useEffect } from 'react';
import { Text } from '../../Text';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

interface Props {
  isOpen: boolean;
  toggleModal: () => any;
  title: string;
  children: any;
  onToggle?: () => any;
}

export const Modal: React.FC = ({ isOpen, toggleModal, children }) => {
  useEffect(() => {
    if (isOpen) {
      // @ts-ignore
      document.body.style.overflow = 'hidden';
    } else {
      // @ts-ignore
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <View style={[styles.container, { pointerEvents: isOpen ? 'auto' : 'none' }]}>
      <Overlay isOpen={isOpen} onPress={toggleModal} />
      <View style={[styles.modal, isOpen ? styles.isOpen : {}]}>
        <Text customStyle={{ color: 'black' }}>{children}</Text>
        <View style={styles.close}>
          <TouchableOpacity onPress={toggleModal}>
            <Text customStyle={{ color: 'black' }}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Overlay = ({ isOpen, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={[styles.overlay, isOpen ? styles.isOpen : {}]} />
  </TouchableHighlight>
);

Modal.defaultProps = {
  isOpen: false,
};

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  modal: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 560,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    opacity: 0,
    transition: '.2s',
    margin: 'auto',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
    transition: '.2s',
    opacity: 0,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  isOpen: {
    opacity: 1,
  },
});
