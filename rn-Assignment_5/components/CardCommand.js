import React from 'react';
import { Image, Text, View, StyleSheet } from "react-native";

export default function CardCommand({ isDarkMode }) {
    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 25 }}>
                <Image style={styles.card} source={require('../assets/Card.png')} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', columnGap: 35 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.CardCommand} source={require('../assets/top (2).png')} />
                    <Text style={[styles.text, isDarkMode && styles.textDark]}>Sent</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.CardCommand} source={require('../assets/down-arrow.png')} />
                    <Text style={[styles.text, isDarkMode && styles.textDark]}>Receive</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.CardCommand} source={require('../assets/dollar.png')} />
                    <Text style={[styles.text, isDarkMode && styles.textDark]}>Loan</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.CardCommand} source={require('../assets/upload.png')} />
                    <Text style={[styles.text, isDarkMode && styles.textDark]}>Topup</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    CardCommand: {
        height: 50,
        width: 50,
        marginBottom: 15,
        marginTop: 15,
        opacity: 0.7
    },

    text: {
        color: '#000', // Default color
    },

    textDark: {
        color: '#fff',
    }
});
