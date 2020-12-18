import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, Text } from 'react-native';
import data from '../openapi.json';

const Homepage = () => {
   
    return (
        <View style={styles.container} >
            <Image source={require('../img/countries.png')}/>
            <View style={{ width: 500 }}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 400, width: 500 }} >
                    {
                    data.map((flags, index) => (
                        <View style={styles.card}>
                            <Image 
                                key={index}
                                source= {{ uri: flags.flag}}
                                style={styles.flag}
                            />
                            <View style={styles.infos}>
                                <Text key={flags.name} style={styles.text}>{flags.name}</Text>
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
        width: 440,
        height: 300,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginRight: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#B6D8F9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color:'black',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    infos: {
        backgroundColor: 'white',
        width: 440,
        height: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    }
});


export default Homepage;