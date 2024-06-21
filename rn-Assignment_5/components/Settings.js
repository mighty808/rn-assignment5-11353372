import { Image, Text, View, StyleSheet,  } from "react-native";

export default function Settings () {
    return(
    <>
       <View style={[styles.container]}>
        <Text style={styles.name}>Language</Text>
        <Image style={styles.right} source={require('../assets/right.png')}/>
       </View>

       <View style={styles.container}>
        <Text style={styles.name}>My Profile</Text>
        <Image style={styles.right} source={require('../assets/right.png')}/>
       </View>

       <View style={styles.container}>
        <Text style={styles.name}>Contact Us</Text>
        <Image style={styles.right} source={require('../assets/right.png')}/>
       </View>

       <View style={styles.container}>
        <Text style={styles.name}>Change Password</Text>
        <Image style={styles.right} source={require('../assets/right.png')}/>
       </View>

       <View style={styles.container}>
        <Text style={styles.name}>Privacy Policy</Text>
        <Image style={styles.right} source={require('../assets/right.png')}/>
       </View>
    </>
        
    
    
    );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 20
    },

    name: {
        fontSize: 20,
    }, 

    right: {
        width: 30,
        height: 30  
    }
  });