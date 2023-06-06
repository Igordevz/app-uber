import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from '../screens/initialPage';

const Stack = createNativeStackNavigator();

function AppConfigRoutes() {
  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName="initial" screenOptions={{headerShown: false}}>
        <Stack.Screen name="initial" component={InitialPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppConfigRoutes;