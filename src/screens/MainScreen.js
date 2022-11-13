import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FlatList } from "react-native-gesture-handler";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { Post } from "../components/Post";
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.push("PostScreen", {
      postId: post.id,
      date: post.date,
    }); // react-native 6
  };
  useEffect(() => {
    navigation.setOptions({
      title: "The Main Page",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Toggle Drawer"
            iconName="ios-menu"
            onPress={() => console.log("Pressed")}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName="md-camera"
            onPress={() => console.log("pressed photo")}
          />
        </HeaderButtons>
      ),
    }); //react native 6
  }, []);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
