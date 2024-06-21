import Header from '../../components/Header';

import { StyleSheet, View } from 'react-native';
import Settings from '../../components/Settings';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <Header />
      <Settings />
      </View>
        
    );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },

});