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
import { THEME } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../store/mainSlice";

export const PostScreen = ({ route, navigation }) => {
  let DATA = useSelector((state) => state.main.data); //receive
  const dispatch = useDispatch();

  const { date, postId } = route.params; //react native 0.6
  const post = DATA.find((p) => p.id === postId);
  const iconName = post.booked === true ? "ios-star" : "ios-star-outline";

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

  useEffect(() => {
    navigation.setOptions({
      title: "Post from " + new Date(date).toLocaleDateString(),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="IconPhoto"
            iconName={iconName}
            onPress={() => dispatch(addToFavorites(postId))}
          />
        </HeaderButtons>
      ),
    });
  }, [DATA]);

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
