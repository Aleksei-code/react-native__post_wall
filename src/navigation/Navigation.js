import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { BottomNavigation } from "react-native-paper";

const PostNavigator = createStackNavigator();
const BookedNavigator = createStackNavigator();
let iOSBottomTab, AndroidBottomTab;

const ScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
};

const MainNavigator = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: THEME.MAIN_COLOR,
          drawerLabelStyle: {
            fontFamily: "inter-bold",
          },
        }}
      >
        <MainNavigator.Screen name="Posts" component={Render} />
        <MainNavigator.Screen name="About" component={AboutScreenNavigator} />
        <MainNavigator.Screen name="Create" component={CreateScreenNavigator} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

const AboutNavigator = createStackNavigator();

function AboutScreenNavigator() {
  return (
    <AboutNavigator.Navigator screenOptions={ScreenOptions}>
      <AboutNavigator.Screen name="AboutScreen" component={AboutScreen} />
    </AboutNavigator.Navigator>
  );
}

const CreatePostNavigator = createStackNavigator();

function CreateScreenNavigator() {
  return (
    <CreatePostNavigator.Navigator screenOptions={ScreenOptions}>
      <CreatePostNavigator.Screen
        name="CreateScreen"
        component={CreateScreen}
      />
    </CreatePostNavigator.Navigator>
  );
}

function Render() {
  if (Platform.OS === "android") {
    AndroidBottomTab = createMaterialBottomTabNavigator();
    return (
      <AndroidBottomTab.Navigator
        initialRouteName="PostNavigator"
        activeTintColor="#000"
        shifting="true"
        barStyle={{
          backgroundColor: THEME.MAIN_COLOR,
        }}
        activeColor="white"
        inactiveColor="gray"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "All") {
              iconName = "ios-albums";
              size = 20;
            } else if (route.name === "Favourites") {
              iconName = "ios-star";
              size = 20;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <AndroidBottomTab.Screen
          name="All"
          component={Post}
          options={{ headerShown: false }}
        />
        <AndroidBottomTab.Screen
          name="Favourites"
          component={Booked}
          options={{ headerShown: false }}
        />
      </AndroidBottomTab.Navigator>
    );
  } else if (Platform.OS === "ios") {
    iOSBottomTab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <iOSBottomTab.Navigator
          initialRouteName="PostNavigator"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "All") {
                iconName = focused ? "ios-albums" : "ios-albums";
                size = 20;
              } else if (route.name === "Favourites") {
                iconName = focused ? "ios-star" : "ios-star";
                size = 20;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <iOSBottomTab.Screen
            name="All"
            component={Post}
            options={{ headerShown: false }}
          />
          <iOSBottomTab.Screen
            name="Favourites"
            component={Booked}
            options={{ headerShown: false }}
          />
        </iOSBottomTab.Navigator>
      </NavigationContainer>
    );
  }
}

function Post() {
  return (
    <PostNavigator.Navigator
      initialRouteName="MainScreen"
      screenOptions={ScreenOptions}
    >
      <PostNavigator.Screen name="MainScreen" component={MainScreen} />
      <PostNavigator.Screen name="PostScreen" component={PostScreen} />
    </PostNavigator.Navigator>
  );
}

function Booked() {
  return (
    <BookedNavigator.Navigator
      initialRouteName="BookedScreen"
      screenOptions={ScreenOptions}
    >
      <BookedNavigator.Screen name="BookedScreen" component={BookedScreen} />
      <BookedNavigator.Screen name="PostScreen" component={PostScreen} />
    </BookedNavigator.Navigator>
  );
}

export default function Navigation() {
  return MyDrawer();
}
