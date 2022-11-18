import React, { useEffect, useReducer, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { createPost } from "../store/mainSlice";
import { ScrollView } from "react-native-gesture-handler";
import { THEME } from "../theme";
import { PhotoPicker } from "../components/photoPicker";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [newPostText, setNewPostText] = useState("");
  const [imgRef, imgRefChange] = useState();

  const postCreationHandler = () => {
    const post = {
      id: new Date().toJSON(),
      text: newPostText,
      img: imgRef,
      date: new Date().toJSON(),
    };
    dispatch(createPost(post));
    setNewPostText("");
    navigation.navigate("MainScreen");
  };

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

  const photoPickerHandler = (uri) => {
    imgRefChange(uri);
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback>
        <View style={styles.center}>
          <Text style={styles.text}>Create new post</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNewPostText}
            value={newPostText}
            placeholder="Type in text of your post"
            multiline={true}
            autoCorrect={false}
          ></TextInput>
          <PhotoPicker onPick={photoPickerHandler} />
          <Button
            style={styles.button}
            title="Create new post"
            onPress={() => postCreationHandler()}
            disabled={!newPostText || !imgRef}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontFamily: "inter-regular",
    fontSize: 16,
    width: "90%",
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: "90%",
    height: 200,
    marginBottom: 15,
  },
  text: {
    fontFamily: "inter-bold",
    fontSize: 20,
    marginBottom: 15,
    marginTop: 10,
  },
  button: { color: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR },
});
