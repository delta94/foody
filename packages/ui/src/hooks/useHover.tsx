import * as React from 'react';

interface Props {
  onFocus: () => any;
  onBlur: () => any;
  itemStyles: {
    [key: string]: any;
  };
}

export const useHover = (styles: any, hover: any): Props => {
  const [itemStyles, setStyles] = React.useState([styles]);
  const onFocus = () => setStyles([...itemStyles, hover]);
  const onBlur = () => setStyles([styles]);

  return {
    onFocus,
    onBlur,
    itemStyles,
  };
};
