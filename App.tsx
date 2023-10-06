import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { GluestackUIProvider, Text, Box, Theme, config } from '@gluestack-ui/themed';

import Home from './src/screens/Home';
import Golfers from './src/screens/Golfers';
import Leagues from './src/screens/Leagues';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={ config.theme }>
      <Theme name="light">
        <Box width="100%" height="100%" justifyContent='flex-start'>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName='Home'
              screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveColor: 'gray',
              })}
            >
              <Tab.Screen
                name='Golfers'
                component={ Golfers }
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={ focused ? 'ios-calendar' : 'ios-calendar-outline' } size={ size } color={ color } />
                  ),
                }}
              />
              <Tab.Screen
                name='Leagues'
                component={ Leagues }
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={ focused ? 'ios-calendar' : 'ios-calendar-outline' } size={ size } color={ color } />
                  ),
                }}
              />
              <Tab.Screen
                name='Home'
                component={ Home }
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={ focused ? 'ios-calendar' : 'ios-calendar-outline' } size={ size } color={ color } />
                  ),
                }}
              />
              <Tab.Screen
                name='Profile'
                component={ Profile }
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={ focused ? 'ios-calendar' : 'ios-calendar-outline' } size={ size } color={ color } />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </Box>
      </Theme>
    </GluestackUIProvider>
  );
}
