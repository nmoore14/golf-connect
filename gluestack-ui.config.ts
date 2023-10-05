// gluestack-ui.config.ts
import {
  config as defaultConfig,
  createConfig,
} from '@gluestack-ui/themed';

export const config = createConfig({
	...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      primary0: '#ffffff',
      primary50: '#eeeff0',
      primary100: '#d7dedf',
      primary200: '#bdcfd1',
      primary300: '#a2c0c5',
      primary400: '#87b2b9',
      primary500: '#6ca4ac',
      primary600: '#56919a',
      primary700: '#4a7980',
      primary800: '#3e5f64',
      primary900: '#314649',
      primary950: '#132022',
    }
  },
  themes: {
    ...defaultConfig.theme.themes,
    light: {
      colors: {
        $primary: '$colors.$primary950',
      },
    },
    dark: {
      colors: {
        $primary: '$colors.$primary50',
      },
    },
  }
});

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal ui config
declare module "@gluestack-ui/themed" {
  interface UIConfig extends ConfigType {}
}
