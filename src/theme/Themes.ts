import { iTheme } from "../types/theme";
import themeColors from "./themeColors";

export const Light:iTheme = {
  dark: false,
  colors: {
    primary: themeColors.primary800,
    background: themeColors.neutral50,
    secondary: themeColors.secondary800,
    accent: themeColors.accent600,
    error: themeColors.error600,
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
  },
}
