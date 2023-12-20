import { SortOrder } from "../../util/SortOrder";

export type AppOrderByInput = {
  categories?: SortOrder;
  createdAt?: SortOrder;
  dirName?: SortOrder;
  id?: SortOrder;
  keys?: SortOrder;
  updatedAt?: SortOrder;
};
