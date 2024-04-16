import { createDrawerNavigator } from "@react-navigation/drawer";
import BuscarCaronasNovas from "../Telas/BuscarCaronasNovas";
import Historico from "../Telas/Historico";
import AceitarCaronas from "../Telas/AceitarCaronas"


const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
  return (
    <Drawer.Navigator 
      screenOptions={{
        drawerStatusBarAnimation: 'slide',
        drawerStyle: {
          backgroundColor: '#203864',
          width: 250,
        },
        drawerLabelStyle: {
          color: '#FFFF',
          fontSize: 19
        },
        drawerActiveBackgroundColor: '#E57A4B', 
        headerStyle: {
          backgroundColor: '#203864', // Cor de fundo do cabeçalho
        },
        headerTintColor: '#E57A4B',
      }}
    >
      <Drawer.Screen
        name="Buscar Carona"
        component={BuscarCaronasNovas}
      /> 
      <Drawer.Screen
        name="Aceitar Caronas"
        component={AceitarCaronas}
      /> 
      <Drawer.Screen
        name="Histórico"
        component={Historico}
      /> 
      {/* <Drawer.Screen
        name="Perfil do Usuário"
        component={BuscarCaronasNovas}
      /> 
      <Drawer.Screen
        name="Dados do Veículo"
        component={BuscarCaronasNovas}
      /> 
    <Drawer.Screen
        name="Sair"
        component={Navegator}
        options={{ headerShown: false }} 
      />*/}
    </Drawer.Navigator>
  );
}
