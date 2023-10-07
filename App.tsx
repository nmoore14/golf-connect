import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ThemeProvider from './src/theme/ThemeProvider';

import Home from './src/screens/Home';
import Golfers from './src/screens/Golfers';
import Leagues from './src/screens/Leagues';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
