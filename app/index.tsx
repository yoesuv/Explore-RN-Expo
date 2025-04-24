import { Text, View, Image, Button, FlatList, StyleSheet } from "react-native";

interface Item {
  id: number;
  name: string;
}

const data: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
];

const renderItem = ({ item }: { item: Item }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{item.name}</Text>
  </View>
);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
});
