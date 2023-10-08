import React, { useContext } from 'react';
import { Switch } from 'react-native';
import { ThemeContext } from '../../theme/ThemeProvider';
import { Light, Dark } from '../../theme/Themes';

const ThemeToggle:React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    // Toggle between Light and Dark themes
    const newTheme = theme === Light ? Dark : Light;
    setTheme(newTheme);
  };

  return (
    <Switch
      value={theme === Dark}
      onValueChange={toggleTheme}
    />
  );
};

export default ThemeToggle;
