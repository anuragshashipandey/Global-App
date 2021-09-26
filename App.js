import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";

import Header from "./components/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "./RootNavigation";
import Footer from "./components/Footer";
import NewsDetail from "./components/NewsDetail";
import About from "./components/About";
import Quote from "./components/Quote";
import Catalog from "./components/Catalog";
import CatalogDetail from "./components/CatalogDetail";
const Stack = createStackNavigator();

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Globalmantics" headerMode="screen">
          <Stack.Screen
            name="Globomantics"
            component={HomePage}
            options={{
              header: () => <Header headerDisplay="Globomantics" />,
            }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              header: () => <Header headerDisplay="Globomantics" />,
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              header: () => <Header headerDisplay="Globomantics" />,
            }}
          />
          <Stack.Screen
            name="Quote"
            component={Quote}
            options={{
              header: () => <Header headerDisplay="Get a Quote" />,
            }}
          />
          <Stack.Screen
            name="Catalog"
            component={Catalog}
            options={{
              header: () => <Header headerDisplay="Globomantics Robotics" />,
            }}
          />
          <Stack.Screen
            name="CatalogDetail"
            component={CatalogDetail}
            options={{
              header: () => <Header headerDisplay="Product Information" />,
            }}
          />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
