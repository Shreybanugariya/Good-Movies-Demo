import { SortOrder } from "../../util/SortOrder";

export type VideoContentOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  mustWatchCount?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  userVideoContentMappingId?: SortOrder;
  videoContentMappingId?: SortOrder;
};
