import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../Text';

interface Props {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, onPress }) => {
  const [buttonStyles, setStyles] = React.useState([styles.button]);
  const onFocus = () => setStyles([...buttonStyles, styles.hover]);
  const onBlur = () => setStyles([styles.button]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      onMouseOver={onFocus}
      onFocus={onFocus}
      onMouseOut={onBlur}
      onBlur={onBlur}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 100,
    shadowColor: 'rgba(0, 0, 0, .1)',
    shadowOffset: { width: 0, height: 28 },
    shadowOpacity: 0.8,
    shadowRadius: 43,
    transition: '.3s',
  },
  hover: {
    backgroundColor: 'red',
  },
});
