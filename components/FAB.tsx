import { Pressable, StyleSheet, Text } from "react-native";

export default function FAB({ onPress }: { onPress: () => void }) {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <Text style={styles.text}>＋</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 30,
    right: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ffffffcc",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  text: { fontSize: 28 },
});
