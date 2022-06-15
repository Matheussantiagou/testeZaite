import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Picker from './src/components/Picker';
import { getDaysOfMonth, getMonthOfYear, getYears } from './src/utils/date';

export default function App() {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const isTodayDate = () => {
    if (day && month && year) {
      const today = new Date().toLocaleDateString();
      const selectedDate = new Date(year, month, day).toLocaleDateString();

      console.log({ today, selectedDate });
      const isDateValid = selectedDate === today;
      if (isDateValid) {
        Alert.alert('Data Valida');
      } else {
        Alert.alert('Data Inválida', 'Selecione a data de hoje');
      }
    } else {
      Alert.alert('Data Inválida', 'Selecione a data de hoje');
    }
  };

  return (
    <View style={styles.page}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#6f38a6', '#490091']}
        style={styles.header}>
        <Image
          source={{
            uri: 'https://thqueiroz-develop.netlify.app/images/react.png',
          }}
          style={styles.logo}
        />
      </LinearGradient>
      <View style={styles.body}>
        <Picker
          listItems={getDaysOfMonth()}
          placeholder="Dia"
          selectedItem={value => setDay(value)}
        />
        <Picker
          listItems={getMonthOfYear()}
          placeholder="Mes"
          selectedItem={value => setMonth(value)}
        />
        <Picker
          listItems={getYears()}
          placeholder="Ano"
          selectedItem={value => setYear(value)}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={isTodayDate} style={styles.confirmButton}>
            <Text style={styles.confirmText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#7f34c9',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 2,
    //borderWidth: 1,
  },

  page: {
    flex: 1,
  },
  confirmButton: {
    backgroundColor: '#7f34c9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  confirmText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  errorMessage: {
    color: '#f00',
    fontSize: 17,
    fontWeight: 'bold',
  },
  errorMessageContainer: {
    borderWidth: 1,
  },
  logo: {
    width: 130,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 65,
  },
  dropdown: {
    top: 1,
    zIndex: -1,
    backgroundColor: '#fff',
  },
});
