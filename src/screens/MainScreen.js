import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const MainScreen = ({ navigation }) => {

  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button
        title="Check 42 out"
        onPress={() => navigation.navigate("PostScreen")}
      />
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
