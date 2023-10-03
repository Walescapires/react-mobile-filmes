import { NavigationContainer } from '@react-navigation/native';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
import FilmesDetalhes from './screens/FilmesDetalhes';
import Atores from './screens/filmes/Atores';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesStack from './screens/filmes/FilmesStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Filmes"
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="movie-open" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Series"
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="desktop-mac" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Atores"
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="emoticon" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Configurações"
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="cog" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
