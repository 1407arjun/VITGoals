import { StatusBar } from "expo-status-bar"
import { Layout, Text } from "@ui-kitten/components"

const Home = () => {
    return (
        <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text category="h1">HOME</Text>
            <StatusBar style="auto" />
        </Layout>
    )
}

export default Home
