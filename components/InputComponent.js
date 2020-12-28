import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


const InputComponent = ({data}) => {
    //Input value
    const [ inputValue, setInputValue ] = useState('');

    //Display results
    const [ display, setDisplayed ] = useState(false);
    
    //Input event on change
    const handleChange = text => {
        setInputValue(text);
        setDisplayed(true);
    };

    // //get filtered countries on input change
    const filteredCountries = data.filter( country => country.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    useEffect(() => {
        if( inputValue === '') {
            setDisplayed(false)
        }else{
            setDisplayed(true)
        }
    }, [inputValue]);

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
                filteredCountries.map((country, index ) => 
                <TouchableOpacity onPress={() => Actions.infos({
                    text: country.name,
                    capital: country.capital,
                    population: country.population,
                    area: country.area,
                    people: country.demonym,
                    languages: country.languages.map((language)=> language.name),
                    flag: country.flag
                }) }>
                    <View style={styles.listContainer} >
                        <Text  
                            key={index} 
                            style={styles.item}
                        >
                            {country.name}
                        </Text>
                    </View>
               </TouchableOpacity> ).slice(0,5)
               
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
        alignItems: 'center',
    },

    searchIcon: {
        padding: 5,
    },

    input: {
        height: 50,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        padding:10,
        backgroundColor: '#fff',
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
        fontSize: 16,
        height: 35,
        color:'black',
    },

    listContainer: {
        width: 240,
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        marginLeft:50
    }
})

export default InputComponent;