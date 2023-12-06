import { SortListType } from "types/filters";

export const SortList: SortListType[] = [
  { title: "Цена (по возрастанию)", value: "price_asc", sortProperties: ["price", "asc"] },
  { title: "Цена (по убыванию)", value: "price_desc", sortProperties: ["price", "desc"] },
  { title: "Название (по возрастанию)", value: "brand_asc", sortProperties: ["brand", "asc"] },
  { title: "Название (по убыванию)", value: "brand_desc", sortProperties: ["brand", "desc"] },
];
