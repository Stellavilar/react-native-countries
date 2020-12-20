import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, Text } from 'react-native';
import data from '../openapi.json';

const Homepage = () => {
   
    return (
        <View style={styles.container} >
            <Image source={require('../img/countries.png')}/>
            <View style={{ width: '100%' }}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 400, width: '100%' }} >
                    {
                    data.map((flags, index) => (
                        <View style={styles.card}>
                            <Image 
                                key={index}
                                source= {{ uri: flags.flag}}
                                style={styles.flag}
                                
                            />
                            <View style={styles.infos} key={flags.name}>
                                <Text style={styles.text}>{flags.name}</Text>
                            </View>
                        </View>
                    ))
                    }
                </ScrollView>
            </View>
        </View>
    
    );

};

const styles = StyleSheet.create ({

    flag: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#B6D8F9',
        alignItems: 'center',
        justifyContent: 'center',
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