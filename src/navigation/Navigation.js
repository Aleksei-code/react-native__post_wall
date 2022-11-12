import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

export default function Navigation() {
  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: "MainScreen of this app",
          }}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{
            title: "Some postScreen",
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
