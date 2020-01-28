import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Modal } from '../Layout';
import { Input } from '../../Input';
import { Title } from '../../Title';
import { View } from 'react-native';
import { Column } from '../../Grid/Column';
import { Spacer } from '../../Spacer';
import { Button } from '../../Button';
import { Text } from '../../Text';

interface Props {
  isOpen: boolean;
  toggleModal: () => any;
}

export const ModalLogin: React.FC<Props> = ({ ...props }) => {
  const { register, handleSubmit, control, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const onChange = args => ({
    value: args[0].nativeEvent.text,
  });

  return (
    <Modal {...props}>
      <Column>
        <Title title="Login" customStyle={{ color: 'black' }} spacer={20} theme="black" />
      </Column>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        <Column customStyle={{ flex: 1 }}>
          <Controller
            as={<Input label="Username" error={errors.username} />}
            control={control}
            name="username"
            onChange={onChange}
            rules={{ required: true }}
          />
        </Column>
        <Column customStyle={{ flex: 1 }}>
          <Controller
            as={<Input label="Password" error={errors.password} />}
            control={control}
            name="password"
            onChange={onChange}
            rules={{ required: true }}
          />
        </Column>
      </View>
      <Column customStyle={{ width: '50%' }}>
        <Button label="Sign in" onPress={handleSubmit(onSubmit)} />
        <Spacer height={10} />
      </Column>
    </Modal>
  );
};
