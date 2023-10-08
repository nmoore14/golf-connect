import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import { iTheme } from '../types/theme'; // Import the iTheme type

import ThemeToggle from '../components/settings/ThemeToggle';

export default function Settings({ navigation }) {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <View style={{ backgroundColor: context.theme.colors.background, flex: 1 }}>
          <Text style={{ ...styles.title, color: context.theme.colors.primary, fontSize: 100, }}>Settings</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <ThemeToggle />
        </View>
      )}
    </ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'MavenPro-Bold',
  }
})
