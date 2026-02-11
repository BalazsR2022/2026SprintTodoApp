import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

export default function GlassCard({ children }: any) {
  return (
    <BlurView intensity={40} tint="light" style={styles.card}>
      {children}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    borderRadius: 16,
    overflow: "hidden",
  },
});
