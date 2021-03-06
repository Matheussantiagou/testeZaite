import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import Picker from '../components/Picker';
import { getDaysOfMonth, getMonthOfYear, getYears } from '../utils/date';
import { colors } from '../global/theme';
import DefaultContainer from '../components/DefaultContainer';

export default function MyApp({ navigation }) {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const isTodayDate = () => {
    if (day && month && year) {
      const today = new Date().toLocaleDateString();
      const selectedDate = new Date(year, month, day).toLocaleDateString();

      //console.log({ today, selectedDate });
      const isDateValid = selectedDate === today;
      if (isDateValid) {
        Alert.alert('Data Válida', 'Você selecionou a data corretamente!', [
          {
            text: 'Continuar',
            onPress: () => navigation.navigate('User'),
          },
        ]);
      } else {
        Alert.alert('Data Inválida', 'Selecione a data de hoje');
      }
    } else {
      Alert.alert('Data Inválida', 'Selecione a data de hoje');
    }
  };

  return (
    <DefaultContainer>
      <View style={styles.subTittleContainer}>
        <Text style={styles.SubTittle}>Data de Hoje:</Text>
      </View>
      <Picker
        listItems={getDaysOfMonth()}
        placeholder="Dia"
        selectedItem={setDay}
        zIndex={3000}
        zIndexInverse={1000}
      />
      <Picker
        listItems={getMonthOfYear()}
        placeholder="Mes"
        selectedItem={setMonth}
        zIndex={2000}
        zIndexInverse={2000}
      />
      <Picker
        listItems={getYears()}
        placeholder="Ano"
        selectedItem={setYear}
        zIndex={1000}
        zIndexInverse={3000}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={isTodayDate} style={styles.confirmButton}>
          <Text style={styles.confirmText}>OK</Text>
        </TouchableOpacity>
      </View>
    </DefaultContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    borderWidth: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittleContainer: {
    backgroundColor: colors.background,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 60,
    width: 175,
    transform: [{ translateY: -30 }],
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTittleContainer: {
    alignItems: 'flex-start',

    width: '100%',
  },
  SubTittle: {
    fontSize: 20,
    color: 'black',
    paddingBottom: 10,
    fontWeight: 'bold',
  },

  body: {
    flex: 2,
    paddingHorizontal: 50,
    alignItems: 'center',
    backgroundColor: colors.background,
    //borderWidth: 1,
  },

  page: {
    flex: 1,
  },
  confirmButton: {
    backgroundColor: colors.primary,

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

  logo: {
    width: 130,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 65,
  },

  buttonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    width: '100%',
    marginTop: 10,
  },
});
