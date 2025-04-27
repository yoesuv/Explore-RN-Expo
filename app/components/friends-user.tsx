import { View, Text, StyleSheet, FlatList } from "react-native";
import { Image } from "expo-image";
import { dataFriends } from "../constants";
import { ItemFriends } from "../app-types";

const avatarSize = 63;

const renderItem = ({ item }: { item: ItemFriends }) => (
  <View style={styles.itemContent}>
    <Image
      source={{ uri: item.avatar }}
      style={styles.avatar}
      contentFit="cover"
    />
  </View>
);

export default function FriendsUser() {
  return (
    <View>
      <Text style={styles.title}>Friends</Text>
      <View style={styles.wrapper}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          data={dataFriends}
          renderItem={renderItem}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#000",
  },
  itemContent: {
    marginEnd: 15,
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
  },
  wrapper: {
    width: "100%",
    marginTop: 13,
  },
});
