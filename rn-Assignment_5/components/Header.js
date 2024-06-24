import React from 'react';
import { Image, Text, View, StyleSheet } from "react-native";

export default function Header({ isDarkMode }) {
    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.logo} source={require('../assets/profilepic.jpeg')} />
                    <View style={{ alignContent: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={[styles.welcome, isDarkMode && styles.textDark]}>Welcome Back,</Text>
                        <Text style={[styles.name, isDarkMode && styles.textDark]}>Effah Aboagye</Text>
                    </View>
                </View>
                <View style={{ alignContent: 'center', justifyContent: 'center', }}>
                    <Image style={styles.search} source={require('../assets/magnifying-glass.png')} />
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

    logo: {
        height: 60,
        width: 60,
        borderRadius: 50
    },

    search: {
        height: 40,
        width: 40,
        borderRadius: 50
    },

    welcome: {
        fontSize: 22,
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    textDark: {
        color: '#fff',
    }
});
