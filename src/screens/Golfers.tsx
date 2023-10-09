import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import { iTheme } from '../types/theme';

import { Ionicons } from '@expo/vector-icons';

import GolferListItem from '../components/ui/Golfers/GolferListItem';

import rankings from '../data/rankings.json';

type GolferProps = {
  lastName: string,
  firstName: string,
}

export default function Home() {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <SafeAreaView style={{
          ...styles.safeContainer,
          backgroundColor: context.theme.colors.background,
        }}>
          <View style={{
            ...styles.golfersHeader,
            backgroundColor: context.theme.colors.background,
          }}>
            <TouchableOpacity
              style={{
                ...styles.searchButton,
                backgroundColor: context.theme.colors.accent,
              }}
            >
              <Ionicons name='search' size={36} color={ context.theme.colors.background } />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='filter' size={36} color={ context.theme.colors.accent } />
            </TouchableOpacity>
          </View>
          <FlatList
            data={rankings.rankings}
            renderItem={
              ({item}) => <GolferListItem golfer={item}  />
            }
            keyExtractor={ (item, index) => index }
          />
        </SafeAreaView>
      )}
    </ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  golfersHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  searchButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 60,
    padding: 5,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  input: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 24,
    height: 50,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'MavenPro-Bold',
  }
})
