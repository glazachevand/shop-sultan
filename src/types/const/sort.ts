import { SortListType } from "types/filters";

export const SortList: SortListType[] = [
  {
    title: "Цена (по возрастанию)",
    value: "price_asc",
    sortProperties: ["price", "asc"],
    enTitle: "Price (ascending)",
  },
  {
    title: "Цена (по убыванию)",
    value: "price_desc",
    sortProperties: ["price", "desc"],
    enTitle: "Price (descending)",
  },
  {
    title: "Название (по возрастанию)",
    value: "brand_asc",
    sortProperties: ["brand", "asc"],
    enTitle: "Title (ascending)",
  },
  {
    title: "Название (по убыванию)",
    value: "brand_desc",
    sortProperties: ["brand", "desc"],
    enTitle: "Title (descending)",
  },
];
