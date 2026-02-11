export type ItemType = "todo" | "siker" | "program";

export type Item = {
  id: string;
  type: ItemType;
  title: string;
  date?: string;
  details?: string;
  completed?: boolean;
};
