import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../global/theme';
import DefaultContainer from '../components/DefaultContainer';

const Final = ({ route, navigation }) => {
  const { name, day, month, year, selectedColor } = route.params;

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(year, month, day);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  return (
    <DefaultContainer>
      <View style={styles.container}>
        <Text style={[styles.title, { color: selectedColor }]}>{name}</Text>
        <Text style={[styles.title, { color: selectedColor }]}>
          Tem {calculateAge()} anos
        </Text>
      </View>
    </DefaultContainer>
  );
};

export default Final;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
