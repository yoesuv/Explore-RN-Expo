import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { avatarLink, loremShort } from "../constants";

export default function CardUser() {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatarLink }} style={styles.avatar} />
      <Text style={styles.name}>Yusuf Saifudin</Text>
      <Text numberOfLines={3} style={styles.bio}>
        {loremShort}
      </Text>
      <View style={styles.follow}>
        <TouchableOpacity style={styles.buttonFollow}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
        <View style={{ width: 16 }} />
        <TouchableOpacity style={styles.buttonSend}>
          <View>
            <Image
              source={require("../../assets/images/icon-send.png")}
              contentFit="cover"
              style={styles.iconSend}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
  },
  bio: {
    fontSize: 12,
    textAlign: "center",
    textOverflow: "ellipsis",
    color: "#414141",
    marginTop: 16,
  },
  follow: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonFollow: {
    flex: 1,
    backgroundColor: "#046BA5",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
  buttonSend: {
    backgroundColor: "#CDE1ED",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 24,
    height: 24,
  },
});
