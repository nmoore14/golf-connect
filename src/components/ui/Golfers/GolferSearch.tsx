import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../../../theme/ThemeProvider';
import { iTheme } from '../../../types/theme';

interface SearchProps {
  onSearch: (query: string) => void;
}

const GolferSearch: React.FC<SearchProps> = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');

  const width = useSharedValue(0);

  const handleSearch = (query:string) => {
    onSearch(query);
  };

  const toggleSearch = () => {
    if (width.value === 0) {
      setShowSearch(true);
      width.value = withSpring(280, {
        mass: 1,
        damping: 100,
        stiffness: 305,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      });
    } else {
      setShowSearch(false);
      width.value = withSpring(0, {
        mass: 1,
        damping: 100,
        stiffness: 305,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      });
    }
  }

  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <Animated.View style={styles.container}>
          <Animated.View style={{ width }} >
            <TextInput style={{
                ...styles.input,
                backgroundColor: context.theme.colors.backgroundAlt,
                color: context.theme.colors.primary,
              }}
              onChangeText={ (text) => handleSearch(text) }
            />
          </Animated.View>
          <TouchableOpacity
            style={{
              ...styles.searchButton,
              backgroundColor: context.theme.colors.accent,
            }}
            onPress={ () => toggleSearch() }
          >
            <Ionicons name={ showSearch ? 'close' : 'search' } size={30} color={ context.theme.colors.background } />
          </TouchableOpacity>
        </Animated.View>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    padding: 5,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  input: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 24,
    width: '100%',
    height: 43,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default GolferSearch;
