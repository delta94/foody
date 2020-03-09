import React, { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
import { Row } from '../../Grid/Row';
import { Text } from '../../Text';
import { useHover } from '../../../hooks/useHover';

interface Props {
  handleChangeFile: (event: Event) => void;
}

const DEFAULT_LABEL = 'Choisir un fichier';

export const Upload: React.FC<Props> = ({ handleChangeFile }) => {
  const [label, setLabel] = useState(DEFAULT_LABEL);

  const { onFocus, onBlur, itemStyles } = useHover(styles.label, styles.hover);
  const labelRef = useRef(null);

  const onChange = (event: any): void => {
    const fileName = event.target.files[0].name;

    if (fileName) {
      setLabel(fileName);
      handleChangeFile(event);
    }
  };

  return (
    <Row>
      <View style={styles.input}>
        <input id="upload" type="file" onChange={onChange} />
      </View>
      <TouchableOpacity
        // @ts-ignore
        onPress={() => labelRef.current.click()}
        // @ts-ignore
        onMouseOver={onFocus}
        onFocus={onFocus}
        onMouseOut={onBlur}
        onBlur={onBlur}
        style={itemStyles}>
        <label ref={labelRef} htmlFor="upload" style={{ cursor: 'pointer' }}>
          <Text>{label}</Text>
        </label>
      </TouchableOpacity>
    </Row>
  );
};

const styles = {
  input: css({
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)'
  }),
  label: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 6,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(0, 0, 0, .2)',
    transition: '.2s'
  }),
  hover: css({
    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderColor: 'rgba(0, 0, 0, .4)'
  }),
  remove: css({
    position: 'absolute',
    top: 0,
    right: 0
  })
};
