import React, { useContext } from 'react';
import { Image, Text, View, StyleSheet, Switch } from "react-native";
import { DarkModeContext } from '../DarkModeContext';

export default function Settings({ isDarkMode }) {
  const { toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <Text style={[styles.name, isDarkMode && styles.textDark]}>Language</Text>
        <Image style={styles.right} source={require('../assets/right.png')} />
      </View>

      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <Text style={[styles.name, isDarkMode && styles.textDark]}>My Profile</Text>
        <Image style={styles.right} source={require('../assets/right.png')} />
      </View>

      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <Text style={[styles.name, isDarkMode && styles.textDark]}>Contact Us</Text>
        <Image style={styles.right} source={require('../assets/right.png')} />
      </View>

      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <Text style={[styles.name, isDarkMode && styles.textDark]}>Change Password</Text>
        <Image style={styles.right} source={require('../assets/right.png')} />
      </View>

      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <Text style={[styles.name, isDarkMode && styles.textDark]}>Privacy Policy</Text>
        <Image style={styles.right} source={require('../assets/right.png')} />
      </View>

      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <Text style={[styles.name, isDarkMode && styles.textDark]}>Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
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
    margin: 20,
  },
  containerDark: {
    backgroundColor: "#000",
  },
  name: {
    fontSize: 20,
    color: "#000", // Default color
  },
  textDark: {
    color: "#fff",
  },
  right: {
    width: 30,
    height: 30,
  }
});
