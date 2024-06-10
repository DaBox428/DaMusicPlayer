import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard.js";
const ImageGrid = ({ albums, handleAlbumClick }) => {
  return (
    <FlashList
      data={albums}
      numColumns={2}
      estimatedItemSize={200}
      renderItem={({ item }) => (
        <ImageCard item={item} handleAlbumClick={handleAlbumClick}></ImageCard>
      )}
    ></FlashList>
  );
};

const styles = StyleSheet.create({
  ImageGrid: {
    color: "#ffffff",
  },
});

export default ImageGrid;
