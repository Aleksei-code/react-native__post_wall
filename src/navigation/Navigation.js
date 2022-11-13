import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const PostNavigator = createStackNavigator();
const BookedNavigator = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function Post() {
  return (
    <PostNavigator.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        title: "MainScreen of this app",
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
      }}
    >
      <PostNavigator.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: "MainScreen of this app",
        }}
      />
      <PostNavigator.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          title: "PostScreen of this app",
        }}
      />
    </PostNavigator.Navigator>
  );
}

function Booked() {
  return (
    <BookedNavigator.Navigator
      initialRouteName="BookedScreen"
      screenOptions={{
        title: "MainScreen of this app",
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
      }}
    >
      <BookedNavigator.Screen
        name="BookedScreen"
        component={BookedScreen}
        options={{
          title: "MainScreen of this app",
        }}
      />
      <BookedNavigator.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          title: "PostScreen of this app",
        }}
      />
    </BookedNavigator.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="PostNavigator"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Posts") {
              iconName = focused ? "ios-albums" : "ios-albums";
            } else if (route.name === "Booked") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <BottomTab.Screen
          name="Posts"
          component={Post}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name="Booked"
          component={Booked}
          options={{ headerShown: false }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
