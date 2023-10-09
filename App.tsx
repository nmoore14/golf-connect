import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { iTheme } from './src/types/theme';
import ThemeProvider, { ThemeContext } from './src/theme/ThemeProvider';
import { StatusBar } from 'expo-status-bar';

import { HeaderLayout } from './src/theme/Themes';

import Home from './src/screens/Home';
import Golfers from './src/screens/Golfers';
import Leagues from './src/screens/Leagues';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';

let appFonts = {
  'MavenPro-Bold': require('./assets/fonts/MavenPro-Bold.ttf'),
  'MavenPro-Medium': require('./assets/fonts/MavenPro-Medium.ttf'),
  'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={({ route, navigation }) => ({
            tabBarActiveTintColor: context.theme.colors.accent,
            tabBarInactiveColor: context.theme.colors.neutral,
            header: () => {
              return (
                <View style={{...HeaderLayout, backgroundColor: context.theme.colors.background}}>
                  <Text style={{...styles.title, color: context.theme.colors.primary}}>
                    Golf Connect
                  </Text>
                  <View style={styles.iconContainer}>
                    <FontAwesome name='bell' size={24} color={ context.theme.colors.neutral } />
                    <FontAwesome
                      name='gear'
                      size={24}
                      color={ context.theme.colors.neutral }
                      onPress={() => navigation.push('Settings')}
                    />
                  </View>
                </View>
              )
            },
          })}
        >
          <Tab.Screen
            name='Golfers'
            component={ Golfers }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5 name='golf-ball' size={ focused ? size * 1.25 : size } color={ color } />
              ),
            }}
          />
          <Tab.Screen
            name='Leagues'
            component={ Leagues }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5 name='trophy' size={ focused ? size * 1.25 : size } color={ color } />
              ),
            }}
          />
          <Tab.Screen
            name='Home'
            component={ Home }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5 name='home' size={ focused ? size * 1.25 : size } color={ color } />
              ),
            }}
          />
          <Tab.Screen
            name='Profile'
            component={ Profile }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5 name='user-alt' size={ focused ? size * 1.25 : size } color={ color } />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </ThemeContext.Consumer>
  )
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(appFonts);
    setFontsLoaded(true);
  }

  _loadFontsAsync();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {(context: { theme: iTheme }) => (
          <NavigationContainer theme={context.theme as any}>
            <StatusBar style={ context.theme.dark ? 'light' : 'dark' } />
            <Stack.Navigator
              screenOptions={() => ({
                tabBarShowLabel: false,
                tabBarActiveTintColor: context.theme.colors.accent,
                tabBarInactiveColor: context.theme.colors.neutral,
                headerShown: false,
              })}
            >
              <Stack.Screen name='Main' component={MainTabs} />
              <Stack.Screen name='Settings' component={Settings} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'MavenPro-Medium',
    fontSize: 35,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});
