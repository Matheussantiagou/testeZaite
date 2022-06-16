import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../global/theme';

const RadioButton = ({ color = 'black', isSelected = false, ...props }) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={[styles.square, { backgroundColor: color }]} />
      <View style={styles.circle}>
        {isSelected && (
          <View style={[styles.indicator, { backgroundColor: color }]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  square: {
    backgroundColor: 'green',
    width: 35,
    height: 35,
    borderRadius: 7,
  },

  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    backgroundColor: colors.grayDark,
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },
  indicator: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: colors.black,
  },
});
