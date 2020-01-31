import React from 'react';
import { Text } from '../Text';
import { StyleSheet } from 'react-native';
import { Spacer } from '../Spacer';

interface Props {
  title: string;
  spacer?: number | null;
  customStyle?: {
    [key: string]: any;
  };
  theme?: string;
}

export const Title: React.FC<Props> = ({ title, spacer, customStyle, ...props }) => (
  <>
    <Text customStyle={[styles.title, customStyle]} {...props}>
      {title}
    </Text>
    {spacer && <Spacer height={spacer} />}
  </>
);

Title.defaultProps = {
  spacer: 25,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 47,
  },
});
