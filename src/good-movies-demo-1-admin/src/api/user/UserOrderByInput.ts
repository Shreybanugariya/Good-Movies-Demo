import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userMovieMappingId?: SortOrder;
  userMovieMappingsId?: SortOrder;
  username?: SortOrder;
  UserName?: SortOrder;
  userSeriesMappingId?: SortOrder;
};
