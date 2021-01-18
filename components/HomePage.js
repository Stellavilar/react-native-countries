import React from 'react';
import { StyleSheet, Image, View, ScrollView, Text, Dimensions  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import InputComponent from './InputComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../openapi.json';

//get windows width:
const screenWidth = Dimensions.get('window').width;

const Homepage = () => {

    //reverse array values
    const mixedData = data.reverse();

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={require('../img/countries.png')}/>
                <TouchableOpacity 
                    style={styles.game}
                    onPress={() => Actions.game()}
                    >
                    <Text style={styles.button}>Let's play!</Text>
                </TouchableOpacity>
            </View>
            <InputComponent data={data}/>
            <View style={{ width: '100%' }}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 400, width: screenWidth }} >
                    {
                    mixedData.map((flags, index) => (
                        <TouchableOpacity 
                            key={flags.name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: screenWidth
                            }}
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

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        width: screenWidth,
        alignItems: 'center',
        height: '20%',
        flex: 1
    },
    flag: {
        width: screenWidth,
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
        height: '100%',
    },
    text: {
        fontSize: 22,
        color:'white',
        fontFamily:'Trebuchet MS',
        textAlign: 'center',
        marginTop: 8,
    },
    infos: {
        backgroundColor: '#6d8193',
        width: screenWidth,
        height: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    game: {
        marginRight: 20,
        borderRadius: 8,
        backgroundColor:'#6bbc76',
        width: 120,
        height: 50,
    },
    button: {
        color: 'white',
        fontSize: 18,
        padding: 10, 
    },
});


export default Homepage;