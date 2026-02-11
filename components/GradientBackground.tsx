import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function GradientBackground() {
  return (
    <LinearGradient
      colors={["#cc919bff", "hsla(0, 0%, 100%, 1.00)","#e0dadaff" ]}
      style={StyleSheet.absoluteFill}
    />
  );
}
