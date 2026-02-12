import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useItems } from "../context/ItemContext";

export default function ModalScreen() {
  const { type, id } = useLocalSearchParams<any>();
  const router = useRouter();

  const { items, addItem, updateItem, deleteItem } = useItems();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (id) {
      const existing = items.find((i) => i.id === id);
      if (existing) {
        setTitle(existing.title);
        setDate(existing.date || "");
        setDetails(existing.details || "");
      }
    }
  }, [id, items]);

  const save = () => {
    if (id) {
      updateItem({
        id,
        type,
        title,
        date,
        details,
        completed: false,
      });
    } else {
      addItem({
        id: Date.now().toString(),
        type,
        title,
        date,
        details,
        completed: false,
      });
    }

    router.back();
  };

  const remove = () => {
    if (id) {
      deleteItem(id);
      router.back();
    }
  };

  return (
    <BlurView intensity={60} style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Leírás"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Dátum"
          style={styles.input}
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          placeholder="Részletek"
          style={styles.input}
          value={details}
          onChangeText={setDetails}
        />

        <Button title="Mentés" onPress={save} />

        {id && (
          <Button title="Törlés" onPress={remove} />
        )}
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  form: {
    gap: 12,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
  },
});
