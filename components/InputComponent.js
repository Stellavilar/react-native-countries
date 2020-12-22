import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


const InputComponent = ({data}) => {
    //Input value
    const [ inputValue, setInputValue ] = useState('');

    //Get countries names on array
    const countries = data.map((d)=> d.name);

    //Display results
    const [ display, setDisplayed ] = useState(false);
    
    const handleChange = text => {
        setInputValue(text);
        setDisplayed(true);
    };

    const filteredCountries = countries.filter( country => country.toLowerCase().includes(inputValue.toLowerCase())
    ).slice(0,5);

    useEffect(() => {
        if( inputValue === '') {
            setDisplayed(false)
        }else{
            setDisplayed(true)
        }
    }, [inputValue])

    return (
        <View style={styles.container}>
            <View style={styles.inputArea}>
                <Icon name="search" size={30} color='gray' style={styles.searchIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder="Search Country..."
                    onChangeText={handleChange}
                    value={inputValue}
                />
            </View>
            { display ? 
                <Text style={styles.item}>
                    {filteredCountries}
                    {/* {inputValue.split(' ').map((country) => country && filteredCountries).join(' ')}                 */}
                </Text>
            : null
            }
    </View>
    )
};
const styles = StyleSheet.create ({

    container: {
        display: 'flex',
        flexDirection:'column',
    },

    inputArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchIcon: {
        padding: 10,
        // marginBottom: 50
    },

    input: {
        height: 50,
        width: 240,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
        padding:10,
        backgroundColor: '#fff',
        // marginBottom: 50
    },

    results: {
        width: 240,
        height: 90,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        marginLeft:50

    },
    item: {
        backgroundColor: 'red'
    }
})

export default InputComponent;