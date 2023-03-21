import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    height: 200,
    borderWidth: 3,
    borderColor: 'black',
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    top: 50,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});

export default BoxScreen;
