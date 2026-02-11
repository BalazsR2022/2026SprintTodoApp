import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import FAB from "../../components/FAB";
import GlassCard from "../../components/GlassCard";
import GradientBackground from "../../components/GradientBackground";
import { useItems } from "../../context/ItemContext";

export default function Programok() {
  const { items } = useItems();
  const router = useRouter();

  const list = items.filter((i) => i.type === "program");

  return (
    <View style={{ flex: 1 }}>
      <GradientBackground />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GlassCard>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </GlassCard>
        )}
      />

      <FAB onPress={() => router.push({ pathname: "/modal", params: { type: "program" } })} />
    </View>
  );
}
