import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import { iTheme } from '../types/theme'; // Import the iTheme type

export default function Home() {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <View style={{ backgroundColor: context.theme.colors.background, flex: 1 }}>
          <Text style={{ ...styles.title, color: context.theme.colors.primary, fontSize: 100, }}>Home</Text>
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
