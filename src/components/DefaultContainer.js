import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../global/theme';

export default function DefaultContainer({ children }) {
  return (
    <View style={styles.page}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[colors.primaryLight, colors.primary]}
        style={styles.header}>
        <Image
          source={{
            uri: 'https://thqueiroz-develop.netlify.app/images/react.png',
          }}
          style={styles.logo}
        />
      </LinearGradient>

      <View style={styles.body}>
        <View style={styles.tittleContainer}>
          <Text style={styles.title}>Teste App</Text>
        </View>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
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
