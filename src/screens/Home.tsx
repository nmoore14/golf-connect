import * as React from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import { iTheme } from '../types/theme'; // Import the iTheme type

import ThemeToggle from '../components/settings/ThemeToggle';

export default function Home() {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <View style={{ backgroundColor: context.theme.colors.background, flex: 1 }}>
          <Text style={{ color: context.theme.colors.primary, fontSize: 100, }}>Home</Text>
          <ThemeToggle />
        </View>
      )}
    </ThemeContext.Consumer>
  );
}
