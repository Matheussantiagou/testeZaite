import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { colors } from '../global/theme';
import { useState } from 'react';
import DefaultContainer from '../components/DefaultContainer';
import Picker from '../components/Picker';
import date from '../utils/date';
import { getDaysOfMonth, getMonthOfYear, getYears } from '../utils/date';
import RadioButton from '../components/RadioButton';

const UserScreen = ({ navigation }) => {
  const [name, setName] = React.useState(null);
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  console.log(name);
  console.log(day, month, year);
  const validateUser = () => {
    if (name.length <= 1) {
      Alert.alert('Nome inválido', 'O nome deve ter mais de 1 carácter');
    }
    if (name.length > 1 && day && month && year) {
      navigation.navigate('Final', { name, day, month, year, selectedColor });
    }
  };

  return (
    <DefaultContainer>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>Nome:</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
      </View>
      <View style={styles.subTittleContainer}>
        <Text style={styles.title}>Data de Nascimento:</Text>
      </View>
      <View style={styles.containerPicker}>
        <Picker
          containerStyle={styles.birthPicker}
          listItems={getDaysOfMonth()}
          placeholder="Dia"
          selectedItem={setDay}
        />
        <Picker
          containerStyle={styles.birthPicker}
          listItems={getMonthOfYear()}
          placeholder="Mes"
          selectedItem={setMonth}
        />
        <Picker
          containerStyle={styles.birthPicker}
          listItems={getYears()}
          placeholder="Ano"
          selectedItem={setYear}
        />
      </View>
      <View style={styles.radioSection}>
        <Text style={styles.title}>Cor Preferida</Text>
        <View style={styles.squareContainer}>
          <RadioButton
            color="blue"
            onPress={() => setSelectedColor('blue')}
            isSelected={selectedColor === 'blue'}
          />
          <RadioButton
            color="green"
            onPress={() => setSelectedColor('green')}
            isSelected={selectedColor === 'green'}
          />
          <RadioButton
            color="red"
            onPress={() => setSelectedColor('red')}
            isSelected={selectedColor === 'red'}
          />
          <RadioButton
            color="yellow"
            onPress={() => setSelectedColor('yellow')}
            isSelected={selectedColor === 'yellow'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={validateUser} style={styles.confirmButton}>
            <Text style={styles.confirmText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DefaultContainer>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  nameContainer: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.text,
  },

  input: {
    width: '100%',
    borderRadius: 10,
    paddingTop: 10,
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
  subTittleContainer: {
    width: '100%',

    marginBottom: 1,

    justifyContent: 'flex-start',
  },

  containerPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
    width: '100%',
  },

  birthPicker: {
    flex: 0.3,
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  radioSection: {
    width: '100%',
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
  buttonContainer: {
    marginTop: 12,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
});
