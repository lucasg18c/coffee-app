import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes/Router";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { MD3Colors, ThemeProp } from "react-native-paper/lib/typescript/types";
import "./src/lang/i18n";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#925C44",
    secondary: "#FF6D31",
    background: "#47362F",
    tertiary: "#A4A4A4",
    surfaceVariant: "#281205",
    onSurface: "#FFFFFF",
    surface: "#3D2C25",
  } as MD3Colors,
} as ThemeProp;

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
}
