import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color="#867a9cff" />
          ),
        }}
      />

      <Tabs.Screen name="todo" options={{ href: null }} />
      <Tabs.Screen name="sikerek" options={{ href: null }} />
      <Tabs.Screen name="programok" options={{ href: null }} />
    </Tabs>
  );
}
