import React, { useState } from "react";
import { View, StyleSheet, Image, Button, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.9,
      allowsEditing: false,
      aspect: [16, 9],
    });
    setImage(img.uri);
    onPick(img.uri);
  };

  return (
    <View style={styles.wrapper}>
      <Button title="Сделать фото" onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    width: "90%",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
});
