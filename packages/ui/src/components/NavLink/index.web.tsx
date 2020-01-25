import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { useHover } from '../../hooks/useHover';

interface Props {
  label: string;
  isFirst?: boolean;
  isLast?: boolean;
  onPress: () => void;
}

export const NavLink: React.FC<Props> = ({ label, isFirst, isLast, onPress }) => {
  const { itemStyles, onFocus, onBlur } = useHover(styles.item, styles.hover);

  return (
    <>
      {!isFirst && <Spacer width={20} />}
      <TouchableOpacity onPress={onPress} accessibilityRole="menuitem">
        <Text
          onMouseOver={onFocus}
          onFocus={onFocus}
          onMouseOut={onBlur}
          onBlur={onBlur}
          customStyle={itemStyles}
        >
          {label}
        </Text>
      </TouchableOpacity>
      {!isLast && <Spacer width={20} />}
    </>
  );
};

NavLink.defaultProps = {
  isFirst: false,
  isLast: false,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    fontSize: 18,
    cursor: 'pointer',
    opacity: 0.8,
    transition: '.2s',
  },
  hover: {
    opacity: 1,
  },
});
