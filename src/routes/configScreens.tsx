import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from '../screens/initialPage';
import LoginScreen from '../screens/login';
import ProviderContext from '../context/ContextApi';
import Home from '../screens/home/home';

const Stack = createNativeStackNavigator();

function AppConfigRoutes() {
  return (
    <NavigationContainer >
      <ProviderContext>
        <Stack.Navigator initialRouteName="initial"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="initial" component={InitialPage} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={Home} />

        </Stack.Navigator>
      </ProviderContext>
    </NavigationContainer>
  );
}

export default AppConfigRoutes;