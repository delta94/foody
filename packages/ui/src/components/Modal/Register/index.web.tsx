import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Modal } from '../Layout';
import { Input } from '../../Forms/Input';
import { Title } from '../../Title';
import { View } from 'react-native';
import { Column } from '../../Grid/Column';
import { Spacer } from '../../Spacer';
import { Button } from '../../Button';
import { REGISTER, useMutation } from '@foody/graphql';
import { useMediaQuery } from '../../../hooks';
import { Row } from '../../Grid/Row';

interface Props {
  isOpen: boolean;
  toggleModal: () => any;
  onCompleted: () => any;
}

export const ModalRegister: React.FC<Props> = ({ ...props }) => {
  const { handleSubmit, control, errors } = useForm();
  const onChange = (event: any) => ({
    value: event[0].nativeEvent.text
  });

  const onError = (error: any): any => console.log(error);
  const onCompleted = (): any => {
    props.toggleModal();
    props.onCompleted();
  };

  const [registerr] = useMutation(REGISTER, {
    onError,
    onCompleted
  });

  const onSubmit = (variables: Record<string, any>): any =>
    registerr({ variables });

  const { isMobileAndTablet } = useMediaQuery();

  return (
    <Modal {...props}>
      <Column>
        <Title
          title="Inscription"
          customStyle={{ color: 'black' }}
          spacer={20}
          theme="black"
        />
      </Column>
      <Row direction={isMobileAndTablet ? 'column' : 'row'}>
        <Column customStyle={{ flex: 1 }}>
          <Controller
            as={<Input label="Prénom" error={errors.username} />}
            control={control}
            name="username"
            onChange={onChange}
            rules={{ required: true }}
          />
        </Column>
        <Column customStyle={{ flex: 1 }}>
          <Controller
            as={<Input label="Email" error={errors.email} />}
            control={control}
            name="email"
            onChange={onChange}
            rules={{ required: true }}
          />
        </Column>
      </Row>
      <Column customStyle={{ width: '100%' }}>
        <Controller
          as={<Input label="Mot de passe" error={errors.password} />}
          control={control}
          name="password"
          onChange={onChange}
          rules={{ required: true }}
        />
      </Column>
      <View style={{ width: '100%' }}>
        <Column customStyle={{ width: isMobileAndTablet ? '100%' : '30%' }}>
          <Button label="Valider" onPress={handleSubmit(onSubmit)} />
          <Spacer height={10} />
        </Column>
      </View>
    </Modal>
  );
};
