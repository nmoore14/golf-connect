import { iTheme, iHeaderLayout } from "../types/theme";
import themeColors from "./themeColors";

export const Light:iTheme = {
  dark: false,
  colors: {
    primary: themeColors.primary800,
    background: themeColors.neutral0,
    backgroundAlt: themeColors.neutral50,
    secondary: themeColors.secondary500,
    accent: themeColors.accent600,
    alert: themeColors.alert600,
    neutral: themeColors.neutral500,
    card: themeColors.neutral0,
    text: themeColors.primary800,
    border: themeColors.neutral100,
  },
}

export const Dark:iTheme = {
  dark: true,
  colors: {
    primary: themeColors.neutral200,
    background: themeColors.primary950,
    backgroundAlt: themeColors.primary900,
    secondary: themeColors.secondary700,
    accent: themeColors.accent500,
    alert: themeColors.alert400,
    neutral: themeColors.neutral200,
    card: themeColors.primary950,
    text: themeColors.neutral200,
    border: themeColors.primary800,
  },
}

export const HeaderLayout:iHeaderLayout = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 16,
  paddingTop: 65,
}
