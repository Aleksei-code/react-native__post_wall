import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ route, navigation }) => {
  const { date, postId } = route.params; //react native 6

  const removeHandler = () => {
    Alert.alert("Delete Post", "Are you sure you want to delete this post?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => console.log("OK Pressed"),
      },
    ]);
  };

  const post = DATA.find((p) => p.id === postId);

  useEffect(() => {
    navigation.setOptions({
      title: "Post from " + new Date(date).toLocaleDateString(),
    }); //react native 6
  });

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: { width: "100%", height: 200 },
  text: {},
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "inter-regular",
  },
});
