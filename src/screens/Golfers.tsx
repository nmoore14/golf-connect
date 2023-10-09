import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import { iTheme } from '../types/theme';

import rankings from '../data/rankings.json';

type GolferProps = {
  lastName: string,
  firstName: string,
}

const Golfer = ({lastName, firstName}: GolferProps) => (
  <SafeAreaView>
    <Text>{ lastName }, { firstName }</Text>
  </SafeAreaView>
)

export default function Home() {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <SafeAreaView style={{ backgroundColor: context.theme.colors.background, flex: 1 }}>
          <FlatList
            data={rankings.rankings}
            renderItem={
              ({item}) => <Golfer lastName={item.lastName} firstName={item.firstName} />
            }
            keyExtractor={ (item, index) => index }
          />
        </SafeAreaView>
      )}
    </ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'MavenPro-Bold',
  }
})
