import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Modal } from '../Layout';
import { Input } from '../../Forms/Input';
import { Title } from '../../Title';
import { Column } from '../../Grid/Column';
import { Spacer } from '../../Spacer';
import { Button } from '../../Button';
import { useMutation, LOGIN } from '@foody/graphql';
import { useDispatch } from '@foody/core';
import { useMediaQuery } from '../../../hooks';
import { Row } from '../../Grid/Row';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  onCompleted: () => void;
}

interface Login {
  login: {
    jwt: string;
  };
}

export const ModalLogin: React.FC<Props> = ({ ...props }) => {
  const { handleSubmit, control, errors } = useForm();
  const dispatch = useDispatch();

  const onChange = (event: any) => ({
    value: event[0].nativeEvent.text
  });

  const onError = (error: any): void => console.log(error);
  const onCompleted = ({ login }: Login): void => {
    dispatch({ type: 'RECEIVE_JWT', jwt: login.jwt });
    props.toggleModal();
    props.onCompleted();
  };

  const [login] = useMutation(LOGIN, {
    onError,
    onCompleted
  });

  const { isMobileAndTablet } = useMediaQuery();

  const onSubmit = (variables: Record<string, any>): void =>
    // @ts-ignore
    login({ variables });

  return (
    <Modal {...props}>
      <Column>
        <Title
          title="Connexion"
          customStyle={{ color: 'black' }}
          spacer={20}
          theme="black"
        />
      </Column>
      <Row>
        <Column customStyle={{ flex: isMobileAndTablet ? '0 0 100%' : 1 }}>
          <Controller
            as={<Input label="Email" error={errors.identifier} />}
            control={control}
            name="identifier"
            keyboardType="email-address"
            onChange={onChange}
            rules={{ required: true }}
          />
        </Column>
        <Column customStyle={{ flex: isMobileAndTablet ? '0 0 100%' : 1 }}>
          <Controller
            as={<Input label="Mot de passe" error={errors.password} />}
            control={control}
            name="password"
            secureTextEntry
            onChange={onChange}
            rules={{ required: true }}
          />
        </Column>
      </Row>
      <Column customStyle={{ width: isMobileAndTablet ? '100%' : '30%' }}>
        <Button label="Connexion" onPress={handleSubmit(onSubmit)} />
        <Spacer height={10} />
      </Column>
    </Modal>
  );
};
