import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Post } from "./Post";
import { useSelector } from "react-redux";

export const PostList = ({ data, onOpen }) => {
  // return (
  //   <View style={styles.wrapper}>
  //     <Text style={styles.noItemsText}>Nothing to see here</Text>
  //     <Text>Nothing to see here</Text>
  //     <Text>Nothing to see here</Text>
  //     <Text>Nothing to see here</Text>
  //   </View>
  // );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItemsText: {
    fontFamily: "inter-bold",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
  },
});
