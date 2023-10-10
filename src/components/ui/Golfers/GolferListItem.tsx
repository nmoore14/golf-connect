import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeProvider';
import { Golfer } from '../../../types/golfer';
import { iTheme } from '../../../types/theme';

type GolferListItemProps = {
  golfer: Golfer,
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
            ...styles.golferTitle,
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
  golferTitle: {
    fontFamily: 'MavenPro-Medium',
    fontSize: 28,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
  },
});

export default GolferListItem;
