import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  Director?: SortOrder;
  id?: SortOrder;
  mustWatchCount?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
