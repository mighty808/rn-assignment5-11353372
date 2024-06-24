import React from 'react';
import { Image, Text, View, StyleSheet, FlatList } from "react-native";

export default function Transaction({ isDarkMode }) {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 30 }}>
                <Text style={[styles.transactionTitle, isDarkMode && styles.textDark]}>Transaction</Text>
                <Text style={[styles.sellAll]}>See All</Text>
            </View>

            <FlatList
                vertical
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.backside}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image style={styles.transactionlogos} source={item.image} />

                            <View style={{ marginLeft: 12 }}>
                                <Text style={[styles.company, isDarkMode && styles.textDark]}>{item.company}</Text>
                                <Text style={[styles.description, isDarkMode && styles.textDark]}>{item.description}</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[styles.money, isDarkMode && styles.textDark,
                                item.money === '$300' ? { color: isDarkMode ? '#1E90FF' : '#1E90FF' } : null,
                            ]}>{item.money}</Text>
                        </View>
                    </View>
                )}
            />
        </>
    );
}

const data = [
    { id: 1, company: "Apple Store", description: "Entertainment", money: "- $5.99", image: require('../assets/apple-logo.png') },
    { id: 2, company: "Spotify", description: "Music", money: "- $12.99", image: require('../assets/spotify (2).png') },
    { id: 3, company: "Money Transfer", description: "Transaction", money: "$300", image: require('../assets/download.png') },
    { id: 4, company: "Grocery", description: "Shopping", money: "- $88", image: require('../assets/shopping-cart.png') },
    { id: 5, company: "Apple Store", description: "Entertainment", money: "- $5,99", image: require('../assets/apple-logo.png') }
]

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    backside: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 20,
    },

    transactionlogos: {
        width: 50,
        height: 50,
    },

    company: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000', // Default color
    },

    description: {
        color: '#808080',
    },

    money: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000', // Default color
    },

    transactionTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000', // Default color
    },

    sellAll: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7,
        color: 'dodgerblue', // Keep this color constant
    },

    textDark: {
        color: '#fff',
    }
});
