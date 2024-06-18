import React from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import TrackListItem from "./TrackListItem";
import { wp, hp } from "../helpers/common";

const TrackList = ({ album, onPressedTrack, currentSongPlaying }) => {
  return (
    <FlatList
      scrollEnabled={false}
      style={styles.flatlist}
      data={album}
      renderItem={(item) => (
        <TrackListItem
          track={item}
          onPressedTrack={onPressedTrack}
          currentSongPlaying={currentSongPlaying}
        ></TrackListItem>
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flexGrow: 1,
    paddingBottom: wp(15),
  },
});

export default TrackList;
