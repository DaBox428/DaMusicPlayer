import { React, useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { wp, hp } from "../helpers/common";

const TrackListItem = ({ track, onPressedTrack, currentSongPlaying }) => {
  let isActiveTrack = false;

  isActiveTrack = currentSongPlaying == track.item.name;

  const styles = StyleSheet.create({
    SongText: {
      color: isActiveTrack ? "#46d0f2" : "#ffffff",
      fontSize: 16,
      fontWeight: "500",
      maxWidth: "90%",
      paddingLeft: wp(5),
      paddingVertical: wp(2),
      backgroundColor: "rgba(255,255,255,0.2)",
      borderRadius: 10,
      marginHorizontal: wp(5),
      marginVertical: wp(1),
    },
  });

  return (
    <TouchableHighlight
      onPress={() => onPressedTrack(track.item.name, track.item.id)}
    >
      <Text style={styles.SongText}>
        {track.item.id} - {track.item.name}
      </Text>
    </TouchableHighlight>
  );
};

export default TrackListItem;
