import React, { ReactNode } from 'react';
import { iTheme } from '../types/theme';
import { Light, Dark } from './Themes';
import { useColorScheme } from 'react-native';

// Define the shape of the context value
interface ThemeContextValue {
  theme: iTheme;
  setTheme: React.Dispatch<React.SetStateAction<iTheme>>;
}

// Create the context with an initial value (empty object)
export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: Light, // Provide an initial theme value if needed
  setTheme: () => {}, // Provide a dummy function if needed
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const colorTheme = colorScheme === 'light' ? Light : Dark

  const [theme, setTheme] = React.useState<iTheme>(colorTheme);

  // Create the context value object
  const contextValue: ThemeContextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
