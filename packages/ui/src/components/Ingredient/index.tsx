import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../Text';

export const Ingredient = ({ label, onPress, isActive }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, isActive ? styles.active : []]}>
      <Text customStyle={{ margin: 'auto' }}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 30,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(155, 66, 218, .3)',
    paddingHorizontal: 10,
  },
  active: {
    backgroundColor: '#9b42da',
  },
});
