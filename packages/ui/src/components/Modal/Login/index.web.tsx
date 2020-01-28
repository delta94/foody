import React from 'react';
import { Modal } from '../Layout';
import { Input } from '../../Input';
import { Title } from '../../Title';
import { View } from 'react-native';
import { Column } from '../../Grid/Column';
import { Spacer } from '../../Spacer';
import { Button } from '../../Button';

interface Props {
  isOpen: boolean;
  toggleModal: () => any;
}

export const ModalLogin: React.FC<Props> = ({ ...props }) => (
  <Modal {...props}>
    <Column>
      <Title title="Login" customStyle={{ color: 'black' }} spacer={20} theme="black" />
    </Column>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Column customStyle={{ flex: 1 }}>
        <Input label="Username" />
      </Column>
      <Column customStyle={{ flex: 1 }}>
        <Input label="Password" />
      </Column>
    </View>
    <Column customStyle={{ width: '50%' }}>
      <Button label="Sign in" />
      <Spacer height={10} />
    </Column>
  </Modal>
);
