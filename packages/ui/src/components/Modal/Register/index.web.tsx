import React from 'react';
import { Modal } from '../Layout';

interface Props {
  isOpen: boolean;
  toggleModal: () => any;
}

export const ModalRegister: React.FC<Props> = ({ ...props }) => (
  <Modal {...props}>Register form</Modal>
);
