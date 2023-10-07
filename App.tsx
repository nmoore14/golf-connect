import { useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { iTheme } from './src/types/theme';
import ThemeProvider, { ThemeContext } from './src/theme/ThemeProvider';

import Header from './src/components/ui/Header';

import Home from './src/screens/Home';
import Golfers from './src/screens/Golfers';
import Leagues from './src/screens/Leagues';
import Profile from './src/screens/Profile';

let customFonts = {
  'MavenPro-Bold': require('./assets/fonts/MavenPro-Bold.ttf'),
  'MavenPro-Medium': require('./assets/fonts/MavenPro-Medium.ttf'),
  'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
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
            <Tab.Navigator
              initialRouteName='Home'
              screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarActiveTintColor: context.theme.colors.accent,
                tabBarInactiveColor: context.theme.colors.neutral,
                header: () => {
                  return <Header title='Golf Connect'/>
                },
              })}
            >
              <Tab.Screen
                name='Golfers'
                component={ Golfers }
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <FontAwesome5 name='golf-ball' size={ size } color={ color } />
                  ),
                }}
              />
              <Tab.Screen
                name='Leagues'
                component={ Leagues }
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <FontAwesome5 name='trophy' size={ size } color={ color } />
                  ),
                }}
              />
              <Tab.Screen
                name='Home'
                component={ Home }
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <FontAwesome5 name='home' size={ size } color={ color } />
                  ),
                }}
              />
              <Tab.Screen
                name='Profile'
                component={ Profile }
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <FontAwesome5 name='user-alt' size={ size } color={ color } />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
