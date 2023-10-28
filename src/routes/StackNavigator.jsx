import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Details } from "../screens"

const { Screen, Navigator } = createNativeStackNavigator()

export function StackNavigator() {
    return (
        <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="Details" component={Details} />
        </Navigator>
    )
}