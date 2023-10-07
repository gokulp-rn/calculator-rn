import React from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyType} from '../constants';
import Row from './Row';
import Button from './Button';
import { KeyData } from '../types';

type Props = {
  onPressKey: (keyData: KeyData) => void;
};

const Keypad: React.FC<Props> = ({onPressKey}) => {
  return (
    <View style={styles.container}>
      <Row>
        <Button
          title="AC"
          type={KeyType.clear}
          onPress={onPressKey}
          theme="accent"
        />
        <Button
          title="+/-"
          type={KeyType.sign}
          onPress={onPressKey}
          theme="accent"
        />
        <Button
          title="%"
          type={KeyType.percentage}
          onPress={onPressKey}
          theme="accent"
        />
        <Button
          title="÷"
          type={KeyType.divide}
          onPress={onPressKey}
          theme="secondary"
        />
      </Row>
      <Row>
        <Button title="7" value="7" type={KeyType.digit} onPress={onPressKey} />
        <Button title="8" value="8" type={KeyType.digit} onPress={onPressKey} />
        <Button title="9" value="9" type={KeyType.digit} onPress={onPressKey} />
        <Button
          title="×"
          type={KeyType.multiply}
          onPress={onPressKey}
          theme="secondary"
        />
      </Row>
      <Row>
        <Button title="4" value="4" type={KeyType.digit} onPress={onPressKey} />
        <Button title="5" value="5" type={KeyType.digit} onPress={onPressKey} />
        <Button title="6" value="6" type={KeyType.digit} onPress={onPressKey} />
        <Button
          title="−"
          type={KeyType.substract}
          onPress={onPressKey}
          theme="secondary"
        />
      </Row>
      <Row>
        <Button title="1" value="1" type={KeyType.digit} onPress={onPressKey} />
        <Button title="2" value="2" type={KeyType.digit} onPress={onPressKey} />
        <Button title="3" value="3" type={KeyType.digit} onPress={onPressKey} />
        <Button
          title="+"
          type={KeyType.add}
          onPress={onPressKey}
          theme="secondary"
        />
      </Row>
      <Row>
        <Button
          title="0"
          value='0'
          type={KeyType.digit}
          onPress={onPressKey}
          size="large"
        />
        <Button title="." type={KeyType.dot} onPress={onPressKey} />
        <Button
          title="="
          type={KeyType.evaluate}
          onPress={onPressKey}
          theme="secondary"
        />
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Keypad;
