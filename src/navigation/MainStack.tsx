import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}