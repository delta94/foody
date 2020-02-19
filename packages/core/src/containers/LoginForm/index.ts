// @ts-ignore
import { connect } from 'react-redux';
// @ts-ignore
import { ModalLogin } from '@foody/ui';
import { receiveJwt } from '../../store/app/actions';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  receiveJwt: (jwt: string) => {
    dispatch(receiveJwt(jwt));
  },
});

export const ModalLoginFormContainer = connect<null, void>(null, mapDispatchToProps)(ModalLogin);
