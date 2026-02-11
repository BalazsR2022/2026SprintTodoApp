import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { useItems } from "../context/ItemContext";

export default function ModalScreen() {
  const { type } = useLocalSearchParams<{ type: any }>();
  const router = useRouter();
  const { addItem } = useItems();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  const save = () => {
    addItem({
      id: Date.now().toString(),
      type,
      title,
      date,
      details,
      completed: false,
    });

    router.back();
  };

  return (
    <BlurView intensity={60} style={styles.container}>
      <TextInput placeholder="Leírás" style={styles.input} onChangeText={setTitle} />
      <TextInput placeholder="Dátum" style={styles.input} onChangeText={setDate} />
      <TextInput placeholder="Részletek" style={styles.input} onChangeText={setDetails} />
      <Button title="Mentés" onPress={save} />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", gap: 10 },
  input: { backgroundColor: "#fff", padding: 12, borderRadius: 10 },
});
