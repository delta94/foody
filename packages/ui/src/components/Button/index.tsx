import React from 'react';
// @ts-ignore
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../Text';
import { useHover } from '../../hooks/useHover';
import { Loader } from '../Loader';

interface Props {
  label?: string;
  customStyle?: {
    [key: string]: any;
  };
  onPress: () => any;
  loading?: boolean;
}

export const Button: React.FC<Props> = ({ label, customStyle, onPress, loading }) => {
  const { onFocus, onBlur, itemStyles } = useHover(styles.button, styles.hover);

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text
          onMouseOver={onFocus}
          onFocus={onFocus}
          onMouseOut={onBlur}
          onBlur={onBlur}
          customStyle={[itemStyles, customStyle]}
        >
          {label}
        </Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loading}>
          <Loader />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#9b42da',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 6,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .2)',
    transition: '.2s',
  },
  hover: {
    backgroundColor: '#51509c',
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .35)',
    borderRadius: 6,
  },
});
