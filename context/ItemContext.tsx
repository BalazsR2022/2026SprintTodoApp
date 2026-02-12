import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Item } from "../types";

type ItemContextType = {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
  deleteItem: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const ItemContext = createContext<ItemContextType | null>(null);

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("app_items", JSON.stringify(items));
  }, [items]);

  const loadItems = async () => {
    const data = await AsyncStorage.getItem("app_items");
    if (data) setItems(JSON.parse(data));
  };

  const addItem = (item: Item) => {
    setItems((prev) => [...prev, item]);
  };

  const updateItem = (updated: Item) => {
    setItems((prev) =>
      prev.map((i) => (i.id === updated.id ? updated : i))
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleTodo = (id: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : i
      )
    );
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        updateItem,
        deleteItem,
        toggleTodo,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error("ItemContext hiányzik");
  return ctx;
};
