import * as React from 'react';

export const useHover = (styles, hover) => {
  const [itemStyles, setStyles] = React.useState([styles]);
  const onFocus = () => setStyles([...itemStyles, hover]);
  const onBlur = () => setStyles([styles]);

  return {
    onFocus,
    onBlur,
    itemStyles,
  };
};
