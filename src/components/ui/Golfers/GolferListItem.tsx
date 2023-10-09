import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeProvider';
import { iTheme } from '../../../types/theme';

type GolferProps = {
  lastName: string,
  firstName: string,
  rank: number,
  previousRank: number,
  events: number,
  totalPoints: number,
  avgPoints: number,
  pointsLost: number,
  pointsGained: number,
}

type GolferListItemProps = {
  golfer: GolferProps,
}

const GolferListItem: React.FC<GolferListItemProps> = ({ golfer }) => {
  return (
    <ThemeContext.Consumer>
      {(context: { theme: iTheme }) => (
        <View style={{
          ...styles.container,
          backgroundColor: context.theme.colors.backgroundAlt,
        }}>
          <Text style={{
            ...styles.title,
            color: context.theme.colors.primary
          }}>
            {golfer.lastName}, {golfer.firstName}
          </Text>
          <Text style={{
            ...styles.description,
            color: context.theme.colors.primary
          }}>
            Rank: {golfer.rank}
          </Text>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
  },
});

export default GolferListItem;