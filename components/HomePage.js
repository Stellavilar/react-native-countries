import React from 'react';
import { StyleSheet, Image, View, ScrollView, Text  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import InputComponent from './InputComponent';
import data from '../openapi.json';

const Homepage = () => {
   
    return (
        <View style={styles.container} >
            <Image source={require('../img/countries.png')}/>
            <InputComponent data={data}/>
            <View style={{ width: '100%' }}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 400, width: '100%' }} >
                    {
                    data.map((flags, index) => (
                        <TouchableOpacity 
                            key={flags.name}
                            style={styles.card}
                            onPress={() => Actions.infos({
                                text: flags.name,
                                capital: flags.capital,
                                population: flags.population,
                                area: flags.area,
                                people: flags.demonym,
                                languages: flags.languages.map((language)=> language.name),
                                flag: flags.flag
                            }) }
                            >
                            <Image 
                                key={index}
                                source= {{ uri: flags.flag}}
                                style={styles.flag}
                                
                            />
                            <View style={styles.infos} key={flags.name}>
                                <Text style={styles.text} key={flags.name}  >{flags.name}</Text>
                            </View>
                        </TouchableOpacity >
                    ))
                    }
                </ScrollView>
            </View>
        </View>
    
    );

};

const styles = StyleSheet.create ({

    flag: {
        width: 400,
        height: 230,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop:30,
        marginRight:30,
    },
    container: {
        display: 'flex',
        backgroundColor: '#B6D8F9',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    text: {
        fontSize: 22,
        color:'white',
        fontFamily:'Trebuchet MS',
        textAlign: 'center',
        marginTop: 8,
    
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    infos: {
        backgroundColor: '#6d8193',
        width: 400,
        height: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    }
});


export default Homepage;