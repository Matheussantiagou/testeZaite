import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from '../global/theme';

const Picker = ({ listItems, selectedItem, ...props }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    selectedItem(value);
  }, [value]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={listItems}
      setOpen={setOpen}
      onSelectItem={item => setValue(item.value)}
      dropDownDirection="TOP"
      {...props}
      style={styles.picker}
    />
  );
};

export default Picker;

const styles = StyleSheet.create({
  picker: {
    marginVertical: 10,
    borderWidth: 0,
    backgroundColor: colors.gray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
