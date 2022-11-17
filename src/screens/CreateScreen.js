import React, { useEffect, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { createPost } from "../store/mainSlice";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      title: "Create post",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Toggle Drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName="md-camera"
            onPress={() => navigation.navigate("Create")}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View style={styles.center}>
      <Text>CreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
