import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../../../theme/ThemeProvider';
import { iTheme } from '../../../types/theme';

interface SearchProps {
  onSearch: (query: string) => void;
}

const GolferSearch: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <View style={styles.container}>
          <TextInput style={{
            ...styles.input,
            backgroundColor: context.theme.colors.backgroundAlt,
            color: context.theme.colors.primary,
          }} />
          <TouchableOpacity
            style={{
              ...styles.searchButton,
              backgroundColor: context.theme.colors.accent,
            }}
          >
            <Ionicons name='search' size={30} color={ context.theme.colors.background } />
          </TouchableOpacity>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 50,
    padding: 5,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  input: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 24,
    height: 43,
    width: 280,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default GolferSearch;
