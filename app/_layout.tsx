import { Stack } from "expo-router";
import { ItemProvider } from "../context/ItemContext";

export default function RootLayout() {
  return (
    <ItemProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </ItemProvider>
  );
}
