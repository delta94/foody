import React from 'react';
import { TouchableOpacity } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
// @ts-ignore
import { useMediaQuery } from 'react-responsive';
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
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <>
      {isMobile && isFirst && <Spacer height={10} />}
      {!isFirst && <Spacer width={20} />}
      <TouchableOpacity onPress={onPress} accessibilityRole="menuitem">
        <Text
          onMouseOver={onFocus}
          onFocus={onFocus}
          onMouseOut={onBlur}
          onBlur={onBlur}
          customStyle={[
            itemStyles,
            isActive ? styles.active : {},
            isMobile ? styles.mobile : {}
          ]}>
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
  mobile: css({
    paddingVertical: 11,
    paddingHorizontal: 30
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
