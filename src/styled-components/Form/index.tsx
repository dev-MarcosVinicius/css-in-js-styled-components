import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { Button } from '../Button';
import { Fields } from './styles';
import theme from '../../global/styles/theme';

export function Form() {
  return (
    <ThemeProvider theme={theme}>
      <Fields>
        <Button title="Enviar Formulario"/>
      </Fields>
    </ThemeProvider>
  );
}