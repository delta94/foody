import React from 'react';
import { Modal } from '../Layout';

interface Props {
  isOpen: boolean;
  toggleModal: () => any;
}

export const ModalLogin: React.FC<Props> = ({ ...props }) => <Modal {...props}>Login form</Modal>;
