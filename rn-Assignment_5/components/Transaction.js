import { Image, Text, View, StyleSheet, FlatList } from "react-native";

export default function Transaction () {
    return(
    <>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 30}}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>Transaction</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 7, color: 'dodgerblue'}}>Sell All</Text>
        </View>

        <View>

        </View>
        <FlatList 
            vertical
            data={data}
            renderItem={({ item }) => (

        <View style={styles.backside}>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
            <Image style={styles.transactionlogos} source={item.image}/>

            <View style={{marginLeft: 12}}>
                <Text style={styles.company}>{item.company}</Text>
                <Text style={styles.discription}>{item.discription}</Text>
            </View>
            </View>       

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.money, 
                item.money === '$300' ? { color: '#1E90FF' } : null,
            ]}>{item.money}</Text>
            </View>

        </View>

            )}/>
    </>
        
    
    
    );
}

const data = [
    {id: 1, company: "Apple Store", discription: "Entertainment", money: "- $5.99", image: require('../assets/apple-logo.png')},

    {id: 2, company: "Spotify", discription: "Music", money: "- $12.99", image: require('../assets/spotify (2).png')},

    {id: 3, company: "Money Transfer", discription: "Transaction", money: "$300", image: require('../assets/download.png')},

    {id: 4, company: "Grocery", discription: "Shopping", money: "- $88", image: require('../assets/shopping-cart.png')},

    {id: 5, company: "Apple Store", discription: "Entertainment", money: "- $5,99", image: require('../assets/apple-logo.png')}
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

    company:{
        fontSize: 18,
        fontWeight: 'bold',
    },

    discription: {
        color: '#808080'
    },

    money: {
        fontSize: 20,
        fontWeight: 'bold'
    }
  });