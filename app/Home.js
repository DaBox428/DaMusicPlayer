import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import TrackPlayer from "react-native-track-player";
import { React, useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { wp, hp } from "../helpers/common";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import data from "../assets/data/library.json";
import ImageGrid from "../components/ImageGrid";
import { useRouter } from "expo-router";

const Home = ({ navigation }) => {
  getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);
  };

  useEffect(() => {
    getPermission();
  });
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);
  const paddingTop = top > 0 ? top + 10 : 30;

  const handleAlbumClick = (item) => {
    console.log(item);
    navigation.navigate("Songs", { album: item });
  };
  return (
    <View style={{ backgroundColor: "#000000" }}>
      <StatusBar></StatusBar>
      <Animated.View entering={FadeInUp.duration(1300)}>
        <ScrollView>
          <View style={(styles.container, { paddingTop })}>
            {/* Header */}
            <View>
              <Text style={styles.title}>DaMusicPayer</Text>
            </View>

            <View>
              {/* Searchbar */}
              <View style={styles.searchBar}>
                <View style={styles.searchIcon}>
                  <Feather name="search" size={27} color={"#46d0f2"}></Feather>
                </View>
                <TextInput
                  placeholder="Search..."
                  style={styles.searchInput}
                  onChangeText={(value) => setSearch(value)}
                  ref={searchInputRef}
                />
                {search && (
                  <Pressable style={styles.closeIcon}>
                    <Feather
                      name="x"
                      size={25}
                      color={"#1f757d"}
                      /* stroke-width={3} */
                    ></Feather>
                  </Pressable>
                )}
              </View>
            </View>
          </View>
          <View>
            {/* Album grid */}
            {data && (
              <ImageGrid
                albums={data}
                handleAlbumClick={handleAlbumClick}
              ></ImageGrid>
            )}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: { width: wp(100), height: hp(100), bottom: 0 },
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: hp(4),
    fontWeight: "600",
    padding: wp(5),
    color: "#46d0f2",
    marginHorizontal: wp(3),
  },
  searchBar: {
    marginHorizontal: wp(6),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffff66",
    backgroundColor: "#FFFFFF",
    marginBottom: wp(5),
    borderRadius: 32,
  },

  searchIcon: {
    padding: 15,
  },
  searchInput: {
    borderRadius: 29,
    paddingVertical: 10,
    fontSize: hp(3),
    flex: 1,
  },
  closeIcon: {
    padding: 11,
    margin: 3,
    color: "#7d7d7d",
    backgroundColor: "#d1d1d1",
    borderRadius: 100,
  },
});

export default Home;
