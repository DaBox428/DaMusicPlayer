import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import library from "../../assets/data/library.json";
import TrackList from "../../components/TrackList";

const Songs = ({ route }) => {
  const albumID = route.params["album"];

  let albumObj = library.find((o) => o.id === albumID);

  return (
    <ScrollView>
      <View>
        <TrackList album={albumObj.tracks}></TrackList>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Songs;
