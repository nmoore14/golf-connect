import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import { Golfer } from '../types/golfer';
import { iTheme } from '../types/theme';

import { Ionicons } from '@expo/vector-icons';

import GolferSearch from '../components/ui/Golfers/GolferSearch';
import GolferListItem from '../components/ui/Golfers/GolferListItem';

import rankings from '../data/rankings.json';

export default function Home() {
  const [queryText, setQueryText] = React.useState('');
  const [filteredGolfers, setFilteredGolfers] = React.useState<Golfer[]>([])

  const golfers = rankings.rankings;

  const onSearch = (query:string) => {
    setQueryText(query)

    const filteredGoflers: Golfer[] = golfers.filter((golfer) =>
      golfer.lastName.toLowerCase().includes(query.toLowerCase()) || golfer.firstName.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredGolfers(filteredGoflers);
  }

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
            <GolferSearch onSearch={ onSearch }/>
            <TouchableOpacity>
              <Ionicons name='filter' size={36} color={ context.theme.colors.accent } />
            </TouchableOpacity>
          </View>
          <FlatList
            data={ filteredGolfers.length > 0 ? filteredGolfers : golfers}
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
  title: {
    fontFamily: 'MavenPro-Bold',
  }
})
