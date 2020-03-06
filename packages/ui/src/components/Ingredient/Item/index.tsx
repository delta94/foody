import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../../Text';
import { Favoris } from '../Favoris';
import { useHover } from '../../../hooks/useHover';
import { Spacer } from '../../Spacer';

interface Props {
  label: string;
  onPress: () => any;
  isActive: boolean;
}

export const Ingredient: React.FC<Props> = ({ label, onPress, isActive }) => {
  const { onFocus, onBlur, itemStyles } = useHover(
    styles.container,
    styles.hover
  );
  const isWeb = Platform.OS === 'web';

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          // @ts-ignore
          onMouseOver={onFocus}
          onFocus={onFocus}
          onMouseOut={onBlur}
          onBlur={onBlur}
          style={[
            itemStyles,
            isWeb ? styles.web : {},
            isActive ? styles.active : {}
          ]}>
          <Text customStyle={{ margin: 'auto' }}>{label}</Text>
          <Spacer width={5} />
          <Favoris ingredient={label} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(155, 66, 218, .3)',
    paddingHorizontal: 10
  },
  web: {
    // @ts-ignore
    transition: '.2s'
  },
  hover: {
    backgroundColor: '#9b42da'
  },
  active: {
    backgroundColor: '#9b42da'
  }
});
