import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { loadPosts } from "../store/actions/post";
import { ActivityIndicator } from "react-native-paper";
import { THEME } from "../theme";

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const DATA = useSelector((state) => state.post.allPosts);
  const loading = useSelector((state) => state.post.loading);

  const openPostHandler = (post) => {
    navigation.push("PostScreen", {
      postId: post.id,
      date: post.date,
    });
  };
  useEffect(() => {
    navigation.setOptions({
      title: "My blog page",
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
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR}></ActivityIndicator>
      </View>
    );
  }
  return <PostList data={DATA} onOpen={openPostHandler} />;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "inter-regular",
  },
});
