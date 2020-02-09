// @ts-ignore
import { connect } from 'react-redux';
// @ts-ignore
import { ModalLogin } from '@foody/ui';
import { ReceiveUserAction } from '../../store/app/types';
import { receiveUser, loginSuccess } from '../../store/app/actions';

interface DispatchProps {
  receiveUser: (props: ReceiveUserAction) => any;
}

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  receiveUser: ({ jwt, user }: ReceiveUserAction) => {
    dispatch(receiveUser(jwt, user));
    dispatch(loginSuccess());
  },
});

export const ModalLoginFormContainer = connect<null, DispatchProps>(
  null,
  mapDispatchToProps
)(ModalLogin);
