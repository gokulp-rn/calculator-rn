import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';

type Props = {
  value: string;
};

const Display: React.FC<Props> = ({value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value || "0"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    paddingHorizontal: 8
  },
  text: {
    fontSize: 64,
    color: colors.white
  },
});

export default Display;
