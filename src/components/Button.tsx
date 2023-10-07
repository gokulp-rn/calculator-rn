import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../styles/colors';
import {KeyData} from '../types';

type Props = KeyData & {
  title: string;
  onPress: (keyData: KeyData) => void;
  size?: 'small' | 'large';
  theme?: 'primary' | 'secondary' | 'accent';
};

const Button: React.FC<Props> = ({
  title,
  size = 'small',
  theme = 'primary',
  onPress,
  ...keyData
}) => {
  const handleKeyOnPress = () => {
    onPress({...keyData});
  };
  return (
    <TouchableOpacity
      onPress={handleKeyOnPress}
      style={[
        styles.container,
        styles[`${theme}Button`],
        size === 'large' && styles.largeButton,
      ]}>
      <Text style={[styles.text, styles[`${theme}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 100,
    width: '20%',
    aspectRatio: 1,
    margin: 8,
  },
  largeButton: {
    width: '45%',
    aspectRatio: 2.25,
  },
  text: {
    fontSize: 36,
    paddingVertical: 8,
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.white,
  },
  accentText: {
    color: colors.vampireBlack,
  },
  primaryButton: {
    backgroundColor: colors.charcol,
  },
  secondaryButton: {
    backgroundColor: colors.saffron,
  },
  accentButton: {
    backgroundColor: colors.silver,
  },
});

export default Button;
