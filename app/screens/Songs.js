import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import library from "../../assets/data/library.json";
import TrackList from "../../components/TrackList";
import { wp, hp } from "../../helpers/common";
import { Audio } from "expo-av";

const Songs = ({ route }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const playlist = [
    {
      name: "Comfort Fit - “Sorry”",
      uri: require("../../assets/files/katanaZero/KatanaZero(Ost-Version).mp3"),
    },
    {
      name: "Big Buck Bunny",
      uri: "https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3",
    },
  ];

  const onPlayPausePressed = async () => {
    console.log("Loading Sound");
    console.log(playlist[0].uri);
    const { sound } = await Audio.Sound.createAsync(playlist[0].uri, {
      shouldPlay: true,
    });

    console.log(sound);

    await sound.playAsync();
  };
  const albumID = route.params["album"];

  let albumObj = library.find((o) => o.id === albumID);

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.AlbumDetails}>
        <View>
          <TouchableHighlight onPress={onPlayPausePressed}>
            <Text>Play</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View>
        <TrackList album={albumObj.tracks}></TrackList>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  AlbumDetails: {
    marginTop: hp(15),
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scroll: {
    marginHorizontal: wp(4),
  },
});

export default Songs;
