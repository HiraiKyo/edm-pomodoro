/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const PrimitiveColors = {
  gray: {
    50: "#f2f2f2",
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    420: "#949494", /* Non-text contrasted requirement 3:1 to white background*/
    500: "#7f7f7f",
    536: "#767676", /* Text contrasted requirement 4.5:1 to both white and black background */
    600: "#666666", /* Non-text contrasted requirement 3:1 to black background */
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a"
  },
  teal: {
    50: "#effefc",
    100: "#c8fff7",
    200: "#90ffee",
    300: "#51f7e5",
    400: "#1de4d5",
    500: "#05c7bb",
    600: "#00a19a",
    700: "#05807c",
    800: "#0a6563",
    900: "#0e5352",
    950: "#003233"
  },
  indigo: {
    50: "#f9f5ff",
    100: "#e8e9ff",
    200: "#d5d9ff",
    300: "#b3b8ff",
    400: "#888bfd",
    500: "#6666ff",
    600: "#4835f2",
    700: "#3923de",
    800: "#2f1dba",
    900: "#291a98",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f9f5ff",
    100: "#f0e7ff",
    200: "#e4d4ff",
    300: "#cfb2ff",
    400: "#b180ff",
    500: "#8a3ffc",
    600: "#7c2df0",
    700: "#691cd3",
    800: "#5a1dac",
    900: "#4b198a",
    950: "#2e1065"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  }
}

export const Colors = {
  light: {
    text: PrimitiveColors.gray[700],
    textsub: PrimitiveColors.gray[536],
    background: '#fff',
    backgroundsub: PrimitiveColors.gray[50],
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: PrimitiveColors.indigo[800],
    secondary: PrimitiveColors.indigo[600],
    tertiary: PrimitiveColors.indigo[950],
    accent: PrimitiveColors.fuchsia[500],
    accent2: PrimitiveColors.violet[500],
    accent3: PrimitiveColors.teal[500]
  },
  dark: {
    text: PrimitiveColors.gray[100],
    textsub: PrimitiveColors.gray[536],
    background: "#000",
    backgroundsub: PrimitiveColors.gray[900],
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary: PrimitiveColors.indigo[400],
    secondary: PrimitiveColors.indigo[200],
    tertiary: PrimitiveColors.indigo[600],
    accent: PrimitiveColors.fuchsia[500],
    accent2: PrimitiveColors.violet[500],
    accent3: PrimitiveColors.teal[500]
  },
};
