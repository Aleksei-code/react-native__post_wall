import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { DATA } from "../data";
import { PostList } from "../components/PostList";
import { CreateScreen } from "./CreateScreen";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.push("PostScreen", {
      postId: post.id,
      date: post.date,
    });
  };
  useEffect(() => {
    navigation.setOptions({
      title: "The Main Page",
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

  return <PostList data={DATA} onOpen={openPostHandler} />;
};
