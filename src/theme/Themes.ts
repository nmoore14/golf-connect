import { iTheme, iHeaderLayout } from "../types/theme";
import themeColors from "./themeColors";

export const Light:iTheme = {
  dark: false,
  colors: {
    primary: themeColors.primary800,
    background: themeColors.neutral50,
    secondary: themeColors.secondary500,
    accent: themeColors.accent600,
    error: themeColors.error600,
    neutral: themeColors.neutral500,
  },
}

export const Dark:iTheme = {
  dark: true,
  colors: {
    primary: themeColors.neutral200,
    background: themeColors.primary950,
    secondary: themeColors.secondary700,
    accent: themeColors.accent500,
    error: themeColors.error400,
    neutral: themeColors.neutral200,
  },
}

export const HeaderLayout:iHeaderLayout = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 16,
  paddingTop: 65,
}
