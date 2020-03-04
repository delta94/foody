// @ts-ignore
import { useMediaQuery as useMq } from 'react-responsive';

export const useMediaQuery = () => {
  const isMobile = useMq({ query: '(max-width: 640px)' });
  const isTablet = useMq({ query: '(max-width: 1200px)' });
  const isDesktop = useMq({ query: '(min-width: 1201px)' });

  return {
    isMobile,
    isTablet,
    isDesktop
  };
};
