import { connect } from 'react-redux';
import { Navigation } from '@foody/ui';
import { Store } from '../../store/types';
import { logout } from '../../store/app/actions';

const mapStateToProps = (state: Store) => {
  const { isConnected } = state.app;

  return { isConnected };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);
