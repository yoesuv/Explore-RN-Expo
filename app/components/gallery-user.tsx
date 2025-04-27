import { FlatList, Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ItemGallery } from "../app-types";
import { dataGallery } from "../constants";

const gPadding = 10;

const renderItem = ({ item, index }: { item: ItemGallery; index: number }) => (
  <View
    style={index % 2 === 0 ? styles.imageContainer1 : styles.imageContainer2}
  >
    <Image
      source={{ uri: item.image }}
      style={styles.image}
      contentFit="cover"
    />
  </View>
);

export default function GalleryUser() {
  return (
    <View style={{ height: 250 }}>
      <Text style={styles.title}>Gallery</Text>
      <View style={styles.wrapper}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={dataGallery}
          renderItem={renderItem}
          numColumns={2}
          scrollEnabled={true}
          horizontal={false}
          showsVerticalScrollIndicator={false}
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
  imageContainer1: {
    flex: 1,
    marginEnd: gPadding / 2,
    marginBottom: gPadding,
  },
  imageContainer2: {
    flex: 1,
    marginStart: gPadding / 2,
    marginBottom: gPadding,
  },
  image: {
    width: "100%",
    height: 117,
    borderRadius: 12,
  },
  wrapper: {
    marginTop: 13,
    width: "100%",
    height: "100%",
  },
});
