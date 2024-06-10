import { React, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

const TrackListItem = ({ track }) => {
  console.log("(TrackListItem Tracks", track.item);
  const [isActive, setIsActive] = useState();
  return (
    <TouchableHighlight>
      <View style={{ opacity: isActive ? 0.7 : 1 }}>
        <Text>{track.item}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({});

export default TrackListItem;
