import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../../Text';
import { Favoris } from '../Favoris';
import { useHover } from '../../../hooks/useHover';

interface Props {
  label: string;
  onPress: () => any;
  isActive: boolean;
}

export const Ingredient: React.FC<Props> = ({ label, onPress, isActive }) => {
  const [showFavorisButton, setShowFavorisButton] = useState(false);
  const { onFocus, onBlur, itemStyles } = useHover(styles.container, styles.hover);

  const focus = () => {
    onFocus();
    setShowFavorisButton(true);
  };

  const blur = () => {
    onBlur();
    setShowFavorisButton(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          // @ts-ignore
          onMouseOver={focus}
          onFocus={focus}
          onMouseOut={blur}
          onBlur={blur}
          style={[itemStyles, isActive ? styles.active : []]}
        >
          <Favoris isActive={showFavorisButton} ingredient={label} />
          <Text customStyle={{ margin: 'auto' }}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(155, 66, 218, .3)',
    paddingHorizontal: 10,
  },
  hover: {
    backgroundColor: '#9b42da',
  },
  active: {
    backgroundColor: '#9b42da',
  },
});
