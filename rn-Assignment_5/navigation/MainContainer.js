import React, { useContext } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DarkModeProvider, DarkModeContext } from '../DarkModeContext';

// Screens
import HomeScreen from './Screens/HomeScreen';
import CardsScreen from './Screens/CardsScreen';
import SettingsScreen from './Screens/SettingsScreen';
import StatisticsScreen from './Screens/StatisticsScreen';

// Screen names
const homeName = "Home";
const cardsName = "Cards";
const statisticsName = "Statistics";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  const { isDarkMode } = useContext(DarkModeContext);
  const MyTheme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === cardsName) {
              iconName = focused ? 'card' : 'card-outline';
            } else if (rn === statisticsName) {
              iconName = focused ? 'analytics' : 'analytics-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={cardsName} component={CardsScreen} />
        <Tab.Screen name={statisticsName} component={StatisticsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const AppWrapper = () => (
  <DarkModeProvider>
    <MainContainer />
  </DarkModeProvider>
);

export default AppWrapper;
