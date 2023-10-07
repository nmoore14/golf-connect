export interface iTheme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    secondary: string;
    accent: string;
    alert: string;
    neutral: string;
    card: string;
    text: string;
    border: string;
  }
}

export interface iHeaderLayout {
  flexDirection: 'row';
  alignItems: 'center';
  justifyContent: 'space-between';
  padding: number;
  paddingTop: number;
}
