import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
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
          <View>
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
          <View style={ styles.golferActions }>
            <Ionicons name="information-circle-outline" size={32} color={ context.theme.colors.secondary } />
            <AntDesign name='staro' size={32} color={ context.theme.colors.border } />
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  golferActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default GolferListItem;
