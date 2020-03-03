import React from 'react';
// @ts-ignore
import { TouchableOpacity, View, Platform } from 'react-native';
import { css } from '@emotion/native';
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

const NATIVE_PLATFORMS = ['ios', 'android'];

export const Button: React.FC<Props> = ({
  label,
  customStyle,
  onPress,
  loading
}) => {
  const { onFocus, onBlur, itemStyles } = useHover(
    { ...styles.button, ...styles.buttonWeb },
    styles.hover
  );
  const isApp = NATIVE_PLATFORMS.includes(Platform.OS);

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        {isApp ? (
          <View style={styles.button}>
            <Text customStyle={styles.text}>{label}</Text>
          </View>
        ) : (
          <View
            // TODO: Create HOC component for over element
            onMouseOver={onFocus}
            onFocus={onFocus}
            onMouseOut={onBlur}
            onBlur={onBlur}
            style={[itemStyles, customStyle]}>
            <Text customStyle={styles.text}>{label}</Text>
          </View>
        )}
      </TouchableOpacity>
      {loading && (
        <View style={styles.loading}>
          <Loader />
        </View>
      )}
    </>
  );
};

const styles = {
  button: css({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#9b42da',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 6,
    paddingHorizontal: 20
  }),
  buttonWeb: css({
    display: 'flex',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .2)',
    transition: '.2s'
  }),
  hover: css({
    backgroundColor: '#51509c'
  }),
  text: css({
    fontSize: 16,
    fontWeight: 'bold'
  }),
  loading: css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .35)',
    borderRadius: 6
  })
};
