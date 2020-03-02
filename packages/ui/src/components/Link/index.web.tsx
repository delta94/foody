import React from 'react';
// @ts-ignore
import { css } from '@emotion/native';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';

interface Props {
  label: string;
  onPress: () => any;
}

export const Link: React.FC<Props> = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text customStyle={styles}>{label}</Text>
  </TouchableOpacity>
);

const styles = css({
  borderBottomWidth: 2,
  borderColor: 'white'
});
