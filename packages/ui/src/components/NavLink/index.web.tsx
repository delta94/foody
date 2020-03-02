import React from 'react';
import { TouchableOpacity } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { useHover } from '../../hooks/useHover';

interface Props {
  isActive?: undefined | null | boolean;
  label: string;
  isFirst?: boolean;
  isLast?: boolean;
  onPress: () => void;
}

export const NavLink: React.FC<Props> = ({
  isActive,
  label,
  isFirst,
  isLast,
  onPress
}) => {
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
          customStyle={[itemStyles, isActive ? styles.active : {}]}>
          {label}
        </Text>
      </TouchableOpacity>
      {!isLast && <Spacer width={20} />}
    </>
  );
};

NavLink.defaultProps = {
  isFirst: false,
  isLast: false
};

const styles = {
  item: css({
    fontSize: 18,
    cursor: 'pointer',
    opacity: 0.8,
    transition: '.2s'
  }),
  hover: css({
    opacity: 1
  }),
  active: css({
    opacity: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'white'
  })
};
