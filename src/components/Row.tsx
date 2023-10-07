import React from 'react';
import { StyleSheet, View} from 'react-native';

const Row: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
});

export default Row;
