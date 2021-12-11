import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Props {
    title: string;
}

export function Button({ title }: Props) {
    return (
        <TouchableOpacity style={styles.containerButton}>
            <Text style={styles.titleButton}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        width: '100%',
        backgroundColor: '#F0F2F5',
        borderRadius: 5,
        alignItems: 'center',
        padding: '18px',
    },
    titleButton: {
        fontSize: 14,
        color: '#FFFFFF',
    }
});