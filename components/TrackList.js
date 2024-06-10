import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TrackListItem from "./TrackListItem";

const TrackList = ({ album }) => {
  console.log("album from tracklist ", album);
  return (
    <FlatList
      data={album}
      renderItem={(item) => <TrackListItem track={item}></TrackListItem>}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default TrackList;
