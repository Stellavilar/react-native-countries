import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Informations = ({text, capital, people, population, area, flag, languages}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {text}
                </Text>
                <Image source={{ uri: flag }} style={styles.flag}/>
            </View>
            <View style={styles.infos}>
                <Text style={styles.textInfos}>
                    Capital: {capital}
                </Text>
                <Text style={styles.textInfos}>
                    Inhabitants: {people}
                </Text>
                <Text style={styles.textInfos}>
                    Number of inhabitants: {population.toLocaleString('en-US', {maximumFractionDigits:2})}
                </Text>
                <Text style={styles.textInfos}>
                    Area: {area.toLocaleString('en-US', {maximumFractionDigits:2}) + ' ' + 'km²'}
                </Text>
                <Text style={styles.textInfos}>
                    Languages: {languages + ' '}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        backgroundColor: '#B6D8F9',
        height: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '15%',
        padding: 15,
        alignItems:'center',
    },
    headerText: {
        fontFamily:'Trebuchet MS',
        fontSize: 22,
        fontWeight: 'bold',
    },
    flag :{
        height:'100%',
        width: 200,
        borderRadius: 15,
    },
    infos: {
        height:'40%',
        padding:30,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between'
    },
    textInfos: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',

    }


})
export default Informations;