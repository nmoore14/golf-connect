import { GluestackUIProvider, Text, Box, Theme, config } from '@gluestack-ui/themed';

export default function App() {
  return (
    <GluestackUIProvider config={ config.theme }>
      <Theme name="light">
        <Box width="100%" height="100%" justifyContent='center' alignItems='center'>
          <Text color='$primary800'>Open up App.tsx to start building your wifes dreams!</Text>
        </Box>
      </Theme>
    </GluestackUIProvider>
  );
}
