import CardCommand from '../../components/CardCommand';
import Header from '../../components/Header';
import Transaction from '../../components/Transaction';

import { StyleSheet, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <Header />
      <CardCommand />
      <Transaction />
      </View>
        
    );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },

});