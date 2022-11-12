import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";

export default function Navigation() {
  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          title: "MainScreen of this app",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        }}
      >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: "MainScreen of this app",
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: "PostScreen of this app",
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
