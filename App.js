const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginPassageiro from "./screens/LoginPassageiro";
import CentralPassageiro from "./screens/CentralPassageiro";
import CadastroPassageiro from "./screens/CadastroPassageiro";
import EdicaoPassageiro from "./screens/EdicaoPassageiro";
import HistoricoPassageiro from "./screens/HistoricoPassageiro";
import MenuPassageiro from "./components/MenuPassageiro";
import SelecionarDestino from "./components/SelecionarDestino";
import ConfirmarDestino from "./components/ConfirmarDestino";
import ConfirmandoDestino from "./components/ConfirmandoDestino";
import PerfilPassageiro from "./screens/PerfilPassageiro";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "JuliusSansOne-Regular": require("./assets/fonts/JuliusSansOne-Regular.ttf"),
    "Syncopate-Bold": require("./assets/fonts/Syncopate-Bold.ttf"),
    "Sunflower-Medium": require("./assets/fonts/Sunflower-Medium.ttf"),
    "Sunflower-Bold": require("./assets/fonts/Sunflower-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoginPassageiro"
              component={LoginPassageiro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CentralPassageiro"
              component={CentralPassageiro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroPassageiro"
              component={CadastroPassageiro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EdicaoPassageiro"
              component={EdicaoPassageiro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoricoPassageiro"
              component={HistoricoPassageiro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilPassageiro"
              component={PerfilPassageiro}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
