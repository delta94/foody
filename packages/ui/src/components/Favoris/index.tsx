import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => any;
}

export const Favoris: React.FC<Props> = ({ onPress }) => (
  <TouchableOpacity style={styles.favoris} onPress={onPress}>
    <View />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  favoris: {
    position: 'absolute',
    top: 10,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'white',
    zIndex: 2,
  },
});
