import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '../Button';

export function Form() {
    return (
        <View style={styles.container}>
            <Button title="Enviar Formulario"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F2F5',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});