import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Modal } from '../Layout';
import { Input } from '../../Forms/Input';
import { Title } from '../../Title';
import { View, StyleSheet } from 'react-native';
import { Column } from '../../Grid/Column';
import { Spacer } from '../../Spacer';
import { Button } from '../../Button';
import { useMutation, LOGIN } from '@foody/graphql';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  receiveJwt: (jwt: string) => void;
  onCompleted: () => void;
}

export const ModalLogin: React.FC<Props> = ({ receiveJwt, ...props }) => {
  const { handleSubmit, control, errors } = useForm();
  const onChange = (event: Event) => ({
    value: event[0].nativeEvent.text,
  });

  const onError = (error: any): void => console.log(error);
  const onCompleted = ({ login }): void => {
    receiveJwt(login.jwt);
    props.toggleModal();
    props.onCompleted();
  };

  const [login] = useMutation(LOGIN, {
    onError,
    onCompleted,
  });

  const onSubmit = (variables: Record<string, any>): void => login({ variables });

  return (
    <Modal {...props}>
      <Column>
        <Title title="Login" customStyle={{ color: 'black' }} spacer={20} theme="black" />
      </Column>
      <View style={styles.container}>
        <Column customStyle={styles.column}>
          <Controller
            as={<Input label="Identifier" error={errors.identifier} />}
            control={control}
            name="identifier"
            onChange={onChange}
            rules={{ required: true }}
          />
        </Column>
        <Column customStyle={styles.column}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  column: {
    flex: 1,
  },
});
