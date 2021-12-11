import React from 'react';

// Importações do component estilizado
import { ThemeProvider } from 'styled-components/native';
import { Button } from './src/styled-components/Button';
import { Form } from './src/styled-components/Form/styles';
import theme from './src/global/styles/theme';

// Impotações do component não estilizado
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    // Exibição do fomulario estilizado
    <ThemeProvider theme={theme}>
      <Form>
        <Button title="Enviar Formulario"/>
      </Form>
    </ThemeProvider>
  );
}