import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, Text } from 'react-native';
import data from '../openapi.json';

const Homepage = () => {
    console.log(data[0].name)
    return (
        <View style={styles.container} >
            <Image source={require('../img/countries.png')}/>
                <View style={styles.card}>
                    <Text>Afrique du sud</Text>
                </View>
        </View>
    );

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#B6D8F9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        height: 400,
        width: 400,
        borderRadius: 10,
    },
    // flag: {
    //     height:190,
    //     width:290,
    // }
});

export default Homepage;