import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import AnimatedCheckbox from "../../components/AnimatedCheckbox";
import FAB from "../../components/FAB";
import GlassCard from "../../components/GlassCard";
import GradientBackground from "../../components/GradientBackground";
import { useItems } from "../../context/ItemContext";

export default function TodoScreen() {
  const { items, toggleTodo } = useItems();
  const router = useRouter();

  const todos = items.filter((i) => i.type === "todo");

  return (
    <View style={{ flex: 1 }}>
      <GradientBackground />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GlassCard>
            <AnimatedCheckbox
              checked={item.completed}
              onPress={() => toggleTodo(item.id)}
            />
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </GlassCard>
        )}
      />

      <FAB onPress={() => router.push({ pathname: "/modal", params: { type: "todo" } })} />
    </View>
  );
}
