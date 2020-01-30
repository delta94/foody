import { connect } from 'react-redux';
import { Navigation } from '@foody/ui';
import { Store } from '../../store/types';

const mapStateToProps = (state: Store) => {
  const { isConnected } = state.app;

  return { isConnected };
};

export const NavigationContainer = connect(mapStateToProps)(Navigation);
