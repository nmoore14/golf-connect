import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../../theme/ThemeProvider';

import { iTheme, iHeaderLayout } from '../../types/theme';
import { HeaderLayout } from '../../theme/Themes';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <View style={{...HeaderLayout, backgroundColor: context.theme.colors.background}}>
          <Text style={{...styles.title, color: context.theme.colors.primary}}>
            {title}
          </Text>
          <View style={styles.iconContainer}>
            <FontAwesome name='bell' size={24} color={ context.theme.colors.neutral } />
            <FontAwesome name='gear' size={24} color={ context.theme.colors.neutral } />
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default Header;
