import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";

export function AppRoutes() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}