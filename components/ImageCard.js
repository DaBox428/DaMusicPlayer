import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { wp, hp } from "../helpers/common";

const ImageCard = ({ item, handleAlbumClick }) => {
  return (
    <Pressable
      style={[styles.imageWrapper]}
      onPress={() => handleAlbumClick(item.id)}
    >
      <Image style={styles.images} source={item.artwork} transition={1000} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.authors}>{item.artists}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  images: {
    height: 180,
    width: "100%",
    borderRadius: 10,
  },
  imageWrapper: {
    padding: wp(1),
    width: 180,
    height: "100%",
    borderRadius: 10,
    marginHorizontal: wp(4),
    marginVertical: wp(2),
  },
  title: {
    textAlign: "center",
    paddingTop: wp(2.5),
    alignContent: "center",
    color: "#46d0f2",
    fontWeight: "600",
    paddingBottom: wp(0),
    fontSize: wp(4),
  },
  authors: {
    textAlign: "center",
    paddingTop: wp(1),
    flex: 1,
    alignContent: "center",
    color: "#a8a8a8",
    fontWeight: "300",
  },
});

export default ImageCard;
