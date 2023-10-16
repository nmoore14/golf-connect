import { useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { iTheme } from './src/types/theme';
import ThemeProvider, { ThemeContext } from './src/theme/ThemeProvider';
import { StatusBar } from 'expo-status-bar';
import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';

import Tabs from './src/screens/Tabs';

import Settings from './src/screens/Settings';

let appFonts = {
  'MavenPro-Bold': require('./assets/fonts/MavenPro-Bold.ttf'),
  'MavenPro-Medium': require('./assets/fonts/MavenPro-Medium.ttf'),
  'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
};

const Stack = createNativeStackNavigator();

const pubClerkKey = Constants.expoConfig?.extra?.clerkPublishableKey

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
    <ClerkProvider publishableKey={ pubClerkKey }>
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
                <Stack.Screen name='Main' component={Tabs} />
                <Stack.Screen name='Settings' component={Settings} />
              </Stack.Navigator>
            </NavigationContainer>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </ClerkProvider>
  );
}
