import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  Id?: SortOrder;
  id?: SortOrder;
  mustWatchCount?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
