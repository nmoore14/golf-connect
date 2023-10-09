import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import { iTheme } from '../types/theme'; // Import the iTheme type

import { Ionicons } from '@expo/vector-icons';

import ThemeToggle from '../components/settings/ThemeToggle';

export default function Settings({ navigation }:any) {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <View style={{ backgroundColor: context.theme.colors.background, flex: 1, paddingTop: 65, }}>
          <View style={{
            ...styles.settingHeader,
            backgroundColor: context.theme.colors.background,
          }}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack() }
            >
              <Ionicons name='arrow-back' size={36} color={ context.theme.colors.accent } />
            </TouchableOpacity>
            <Text style={{
              ...styles.title,
              color: context.theme.colors.primary}}>
              Settings
            </Text>
          </View>
          <ScrollView style={{
            ...styles.settingsList,
            backgroundColor: context.theme.colors.background,
          }}>
            <View style={{
              ...styles.settingListItem,
              backgroundColor: context.theme.colors.background,
              borderTopWidth: 2,
              borderTopColor: context.theme.colors.backgroundAlt,
            }}>
              <Text style={{
                ...styles.settingsTitle,
                color: context.theme.colors.primary,
              }}>
                Dark Mode
              </Text>
              <ThemeToggle />
            </View>
          </ScrollView>
        </View>
      )}
    </ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  settingHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Align icon and text vertically
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontFamily: 'MavenPro-Bold',
    fontSize: 50,
  },
  settingsList: {
    paddingHorizontal: 15,
  },
  settingListItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  settingsTitle: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 30,
  },
})
