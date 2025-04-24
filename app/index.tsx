import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface Item {
  id: number;
  name: string;
  position: string;
  avatar: string;
}

const avatarLink =
  "https://st2.depositphotos.com/2703645/7304/v/450/depositphotos_73040253-stock-illustration-male-avatar-icon.jpg";

const data: Item[] = [
  { id: 1, name: "John Doe", position: "Mobile Developer", avatar: avatarLink },
  {
    id: 2,
    name: "Jane Doe",
    position: "Fullstack Developer",
    avatar: avatarLink,
  },
  {
    id: 3,
    name: "Bob Smith",
    position: "Backend Developer",
    avatar: avatarLink,
  },
];

const renderItem = ({ item }: { item: Item }) => (
  <View style={styles.card}>
    <View style={styles.content}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.position}>{item.position}</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  card: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  position: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  followButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2196F3",
  },
  followButtonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
