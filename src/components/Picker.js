import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

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
    />
  );
};

export default Picker;

const styles = StyleSheet.create({});
