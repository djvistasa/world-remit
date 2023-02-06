import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      lightGray: string;
      primary: string;
      white: string;
      textGrey: string;
    };
  }
}
