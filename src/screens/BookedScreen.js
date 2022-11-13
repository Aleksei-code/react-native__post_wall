import React, { useEffect } from "react";
import { DATA } from "../data";
import { PostList } from "../components/PostList";
import { Item } from "react-navigation-header-buttons";
import { HeaderButtons } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const BookedScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions(
      {
        title: "My bookmarks",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
              title="Toggle Drawer"
              iconName="ios-menu"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
      },

      []
    );
  });
  const openPostHandler = (post) => {
    navigation.push("PostScreen", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };
  const data = DATA.filter((post) => post.booked);
  return <PostList data={data} onOpen={openPostHandler} />;
};
