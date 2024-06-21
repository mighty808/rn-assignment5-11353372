import { Image, Text, View, StyleSheet } from "react-native";

export default function Transaction () {
    return(
    <>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 30}}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>Transaction</Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 7, color: 'dodgerblue'}}>Sell All</Text>
        </View>

        <View>
            <View>
            <Image style={styles} source={require('../assets/upload.png')}/>
            </View>

            <View>
                <Text>Apple Store</Text>
                <Text>- $5,99</Text>
            </View>

            <View>
                <Text>Entertainment</Text>
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
    }
  });