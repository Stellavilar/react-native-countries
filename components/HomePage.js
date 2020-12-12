import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Homepage = () => {

    return (
        <View style={styles.container} >
            <Image source={require('../img/countries.png')}/>
        </View>
    );

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#B6D8F9',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Homepage;