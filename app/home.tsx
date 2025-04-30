import { View, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

import CardUser from "./components/card-user";
import StatisticsUser from "./components/statistics-user";
import FriendsUser from "./components/friends-user";
import GalleryUser from "./components/gallery-user";
import AppButton from "./components/app-button";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <CardUser />
        <View style={styles.bottom}>
          <View style={{ height: 415 }}>
            <StatisticsUser />
          </View>
          <View style={styles.contentInfo}>
            <FriendsUser />
            <View style={styles.contentGallery}>
              <GalleryUser />
            </View>
          </View>
        </View>
        <View style={styles.viewLogout}>
          <AppButton
            onPress={() => {
              router.replace("/");
            }}
            title="Logout"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(9, 84, 115, 0.05)",
    flex: 1,
  },
  top: {
    flexDirection: "column",
  },
  bottom: {
    flexDirection: "row",
    marginTop: 24,
  },
  contentInfo: {
    flexDirection: "column",
    flex: 1,
    marginStart: 21,
  },
  contentGallery: {
    marginTop: 40,
    marginEnd: 16,
  },
  viewLogout: {
    height: 50,
    marginTop: 16,
    marginHorizontal: 16,
  },
});
