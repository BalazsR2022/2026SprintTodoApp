import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function AnimatedCheckbox({ checked, onPress }: any) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(checked ? 1.2 : 1);
  }, [checked]);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={style}>
        <Text style={{ fontSize: 20 }}>{checked ? "☑️" : "⬜"}</Text>
      </Animated.View>
    </Pressable>
  );
}
