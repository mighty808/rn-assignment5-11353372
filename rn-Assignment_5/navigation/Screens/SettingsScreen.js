import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import Settings from '../../components/Settings';
import { DarkModeContext } from '../../DarkModeContext';

export default function HomeScreen({ navigation }) {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Header isDarkMode={isDarkMode} />
      <Settings isDarkMode={isDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#000",
  },
});
