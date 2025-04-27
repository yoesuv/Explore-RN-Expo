import { Text, View, StyleSheet } from "react-native";

export default function StatisticsUser() {
  return (
    <View style={styles.content}>
      <View style={styles.contentText}>
        <Text style={styles.title}>10K</Text>
        <Text style={styles.subtitle}>Likes</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.contentText}>
        <Text style={styles.title}>641</Text>
        <Text style={styles.subtitle}>Following</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.contentText}>
        <Text style={styles.title}>2.1K</Text>
        <Text style={styles.subtitle}>Followers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    backgroundColor: "#B93E45",
    borderRadius: 20,
    marginStart: 16,
    paddingHorizontal: 35,
    paddingVertical: 43,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  contentText: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 13,
    color: "#fff",
  },
  divider: {
    width: "100%",
    backgroundColor: "#fff",
    height: 1,
  },
});
