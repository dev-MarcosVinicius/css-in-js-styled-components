import { ThemeProvider } from 'styled-components/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from './src/components/Form/Button';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Button title="Enviar Formulario"/>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
