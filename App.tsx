import { NavigationContainer } from "@react-navigation/native"

import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"

import MainStack from "./src/navigation/Main"

const App = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </ApplicationProvider>
    )
}

export default App
