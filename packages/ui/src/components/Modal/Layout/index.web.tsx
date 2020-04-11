import React, { useEffect } from 'react';
// @ts-ignore
import { css } from '@emotion/native';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
  ScrollView
} from 'react-native';
import { Text } from '../../Text';
import { CloseIcon } from '../../Icon/Close';
import { useMediaQuery } from '../../../hooks';

export interface ModalProps {
  isOpen: boolean;
  toggleModal: () => any;
  children: any;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  toggleModal,
  children
}) => {
  const { isDesktop } = useMediaQuery();
  const width = new Animated.Value(0);
  const maxWidth = isDesktop ? 1200 : 700;
  const borderRadius = new Animated.Value(maxWidth);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      Animated.timing(width, {
        toValue: maxWidth,
        duration: 600
      }).start();
      Animated.timing(borderRadius, {
        toValue: 0,
        duration: 600
      }).start();
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <View
      style={[styles.container, { pointerEvents: isOpen ? 'auto' : 'none' }]}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            width,
            height: width,
            borderRadius: isDesktop ? '50%' : borderRadius
          }
        ]}>
        <Overlay isOpen={isOpen} onPress={toggleModal} />
        <ScrollView style={[styles.modal, isOpen ? styles.isOpen : {}]}>
          <Text customStyle={{ color: 'black' }}>{children}</Text>
          <View style={styles.close}>
            <TouchableOpacity onPress={toggleModal}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animated.View>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  }),
  animatedContainer: css({
    maxWidth: '100vw',
    margin: 'auto',
    overflow: 'hidden'
  }),
  modal: css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    zIndex: 2,
    maxWidth: 700,
    width: '100vw',
    maxHeight: '80vh',
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
