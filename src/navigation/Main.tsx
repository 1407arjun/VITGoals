import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../views/Home"

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Main
