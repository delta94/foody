// TODO: add types
// @ts-ignore
import { connect } from 'react-redux';
// @ts-ignore
import { Navigation } from '@foody/ui';
import { Store } from '../../store/types';
import { logout } from '../../store/app/actions';

const mapStateToProps = (state: Store) => {
  const { isConnected } = state.app;

  return { isConnected };
};

const mapDispatchToProps = (dispatch: Function) => ({
  logout: () => dispatch(logout()),
});

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);
