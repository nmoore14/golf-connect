import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { iTheme } from '../types/theme';
import { ThemeContext } from '../theme/ThemeProvider';

import { HeaderLayout } from '../theme/Themes';

import Home from './Home';
import Golfers from './Golfers';
import Leagues from './Leagues';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Tabs() {
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
            name='Home'
            component={ Home }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5
                  name='home'
                  size={ focused ? size * 1.25 : size }
                  color={ color }
                />
              ),
            }}
          />
          <Tab.Screen
            name='Leagues'
            component={ Leagues }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5
                  name='trophy'
                  size={ focused ? size * 1.25 : size }
                  color={ color }
                />
              ),
            }}
          />
          <Tab.Screen
            name='Golfers'
            component={ Golfers }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5
                  name='golf-ball'
                  size={ focused ? size * 1.25 : size }
                  color={ color }
                />
              ),
            }}
          />
          <Tab.Screen
            name='Profile'
            component={ Profile }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5
                  name='user-alt'
                  size={ focused ? size * 1.25 : size }
                  color={ color }
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </ThemeContext.Consumer>
  )
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
