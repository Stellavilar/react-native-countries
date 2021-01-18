import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import data from '../openapi.json';

const Game = () => {

    //Get random flag from the array
    const getRandomFlag = (data) => {
        return data[Math.floor(Math.random()*data.length)]
    };
    //Pick up the first element of the array:
    const flag = getRandomFlag(data);
    
    //Shuffle array elements
    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            
        }
        return shuffle;
    };

    shuffle(data);

    return (
        <View style={styles.container}>
            <Text>Find the correct flag!</Text>
            <View>
                <Image 
                    source= {{ uri: flag.flag}} 
                    style={styles.flag}  
                />
                 {data.map((flags, index) =>
                    <View>
                        <Text>{flags.name}</Text>
                    </View>
                    ).slice(0,4)
                }
                <Text>{flag.name}</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#B6D8F9',
        height: '100%',
    },
    flag: {
        height: 190,
        width: '90%',
        borderRadius: 20,
    }
});

export default Game;