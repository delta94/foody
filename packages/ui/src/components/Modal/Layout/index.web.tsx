import React, { useEffect } from 'react';
// @ts-ignore
import { css } from '@emotion/native';
import { View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Text } from '../../Text';
import { CloseIcon } from '../../Icon/Close';

interface Props {
  isOpen: boolean;
  toggleModal: () => any;
  title: string;
  children: any;
  onToggle?: () => any;
}

export const Modal: React.FC<Props> = ({ isOpen, toggleModal, children }) => {
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
    <View
      style={[styles.container, { pointerEvents: isOpen ? 'auto' : 'none' }]}>
      <Overlay isOpen={isOpen} onPress={toggleModal} />
      <View style={[styles.modal, isOpen ? styles.isOpen : {}]}>
        <Text customStyle={{ color: 'black' }}>{children}</Text>
        <View style={styles.close}>
          <TouchableOpacity onPress={toggleModal}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

interface OverlayProps {
  isOpen: boolean;
  onPress: () => any;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={[styles.overlay, isOpen ? styles.isOpen : {}]} />
  </TouchableHighlight>
);

Modal.defaultProps = {
  isOpen: false
};

const styles = {
  container: css({
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 10
  }),
  modal: css({
    position: 'relative',
    zIndex: 2,
    maxWidth: 700,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 25,
    opacity: 0,
    transition: '.2s',
    margin: 'auto'
  }),
  overlay: css({
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
    transition: '.2s',
    opacity: 0
  }),
  close: css({
    position: 'absolute',
    top: 20,
    right: 20
  }),
  isOpen: css({
    opacity: 1
  })
};
