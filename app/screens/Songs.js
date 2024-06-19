import Slider from "@react-native-community/slider";
import React, { useEffect, useState, createContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import library from "../../assets/data/library";
import Animated, { FadeInUp } from "react-native-reanimated";
import TrackList from "../../components/TrackList";
import { wp, hp } from "../../helpers/common";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { Feather } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import millisToMinutes from "../../helpers/millisToMinutes";

const Songs = ({ route }) => {
  const [songPlaying, setsongPlaying] = useState(null);
  const [songPlayingId, setsongPlayingId] = useState(0);
  const [soundObj, setSoundObj] = useState(null);
  const [soundStatus, setsoundStatus] = useState(null);

  const [positionMilis, setPositionMillis] = useState(null);

  const [playbackInstanceDuration, setPlaybackInstanceDuration] =
    useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const albumID = route.params["album"];
  let albumObj = library.find((o) => o.id === albumID);

  const onPlaybackStatusUpdate = async (playbackStatus) => {
    console.log("just finished statuing updating, ", playbackStatus);
    setIsPlaying(playbackStatus.isPlaying);
    if (playbackStatus.didJustFinish) {
      getNextSong();
    }

    if (playbackStatus.isLoaded) {
      setPlaybackInstanceDuration(playbackStatus.durationMillis);
      setPositionMillis(playbackStatus.positionMillis);
    }
  };

  const getNextSong = async () => {
    const playlistLenght = albumObj.tracks.length;

    if (soundObj == null) {
      if (playlistLenght == songPlayingId) {
      } else {
        console.log(
          "changing song to nextone, ",
          albumObj.tracks[+songPlayingId + 1].name
        );

        const playbackObj = new Audio.Sound();

        playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        setSoundObj(playbackObj);

        const status = await playbackObj.loadAsync(
          albumObj.tracks[+songPlayingId + 1].uri,
          {
            shouldPlay: true,
          }
        );
        setsongPlaying(albumObj.tracks[+songPlayingId + 1].name);
        setsongPlayingId(songPlayingId);
        setIsPlaying(true);
        setsoundStatus(status);
      }
    }
  };

  useEffect(() => {
    console.log("use effect triggered");
    const playbackObj = new Audio.Sound();

    playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setSoundObj(playbackObj);

    return () => {
      setIsPlaying(false);
      soundObj.unloadAsync();
    };
  }, []);

  const onPressedTrack = async (track, trackId) => {
    if (soundStatus != null) {
      if (track === songPlaying) {
        if (soundStatus.isPlaying) {
          const status = soundObj.setStatusAsync({ shouldPlay: !isPlaying });
          setsoundStatus(status);
          setIsPlaying(!isPlaying);
        } else {
        }
      } else {
        soundObj.unloadAsync();
        const status = soundObj.loadAsync(albumObj.tracks[trackId].uri, {
          shouldPlay: true,
        });
        setsoundStatus(status);
        setsongPlaying(track);
        setsongPlayingId(trackId);
        setIsPlaying(true);
      }
    } else {
      const playerStatus = await soundObj.loadAsync(
        albumObj.tracks[trackId].uri,
        {
          shouldPlay: true,
        }
      );

      setsoundStatus(() => playerStatus);
      setIsPlaying(true);
      setsongPlaying(() => track);
      setsongPlayingId(() => trackId);
      console.log("arranca aca", soundObj, " ", soundStatus);
    }
  };

  const onPlayPausePressed = async () => {
    if (soundStatus != null) {
      const status = soundObj.setStatusAsync({ shouldPlay: !isPlaying });
      setsoundStatus(status);
      setIsPlaying(!isPlaying);
    } else {
      const playerStatus = await soundObj.loadAsync(albumObj.tracks[0].uri, {
        shouldPlay: true,
      });
      setsoundStatus(playerStatus);
      setIsPlaying(true);
      setsongPlaying(albumObj.tracks[0].name);
      setsongPlayingId(albumObj.tracks[0].id);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#000000" }}>
      <View style={styles.AlbumDetails}>
        <Animated.View>
          <Image
            style={styles.image}
            source={albumObj.artwork}
            transition={1000}
          />
        </Animated.View>
        <Text style={styles.title}>{albumObj.title}</Text>
        <Text style={styles.author}>{albumObj.artists}</Text>
      </View>

      <View>
        <Slider
          style={{ width: wp(90), height: 40, marginHorizontal: wp(4) }}
          minimumValue={0}
          value={positionMilis}
          maximumValue={playbackInstanceDuration}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#rgba(255,255,255,0.9)"
          thumbTintColor={"#429ad5"}
        />
        <View style={styles.minutesCounter}>
          <Text style={{ color: "#ffffff" }}>
            {millisToMinutes(positionMilis)}
          </Text>
          <Text style={{ color: "#ffffff" }}>
            {millisToMinutes(playbackInstanceDuration)}
          </Text>
        </View>
      </View>
      <View style={styles.PlayButtons}>
        <TouchableHighlight onPress={onPlayPausePressed}>
          <Feather name="chevrons-left" size={30} color={"#46d0f2"}></Feather>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPlayPausePressed}>
          <Feather
            name={isPlaying ? "pause-circle" : "play-circle"}
            size={50}
            color={"#46d0f2"}
          ></Feather>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPlayPausePressed}>
          <Feather name="chevrons-right" size={30} color={"#46d0f2"}></Feather>
        </TouchableHighlight>
      </View>

      <TrackList
        album={albumObj.tracks}
        onPressedTrack={onPressedTrack}
        currentSongPlaying={songPlaying}
      ></TrackList>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  AlbumDetails: {
    marginTop: hp(10),
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    height: hp(40),
    width: wp(80),
    borderRadius: 10,
  },

  title: {
    color: "#ffffff",
    marginVertical: wp(3),
    fontSize: 20,
  },
  author: {
    color: "rgba(255,255,255,0.6)",
  },

  minutesCounter: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: wp(8),
  },

  PlayButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: wp(5),
    marginHorizontal: wp(30),
  },
});

export default Songs;
