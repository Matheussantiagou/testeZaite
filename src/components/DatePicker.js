import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ onSelect }) => {
  const [date, setDate] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onSelect(currentDate);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.selectButton}>
        <Text style={styles.textButton}>
          {date ? `${date.toLocaleDateString()}` : 'Selecione'}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          format="dd/MM/yyyy"
          style={styles.date}
          value={date || new Date()}
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {},
  selectButton: {
    backgroundColor: '#bababa',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    margin: 15,
  },
  textButton: {
    color: '#1a1a1a',

    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  date: {
    width: 200,
  },
});
