// @ts-ignore
import { connect } from 'react-redux';
// @ts-ignore
import { Navigation } from '@foody/ui';
import { Store } from '../../store/types';
import { logout } from '../../store/app/actions';
import { Dispatch } from 'redux';

const mapStateToProps = (state: Store) => {
  const { isConnected } = state.app;

  return { isConnected };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);
