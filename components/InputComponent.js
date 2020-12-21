import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputComponent = () => {
    return (
        <TextInput 
            style={styles.input}
        />

    )
};
const styles = StyleSheet.create ({
    input: {
        height: 50,
        width: 240,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        padding:10,
        marginBottom: 80,
    }
})

export default InputComponent;