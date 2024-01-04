import { UserSeriesMappingWhereInput } from "./UserSeriesMappingWhereInput";
import { UserSeriesMappingOrderByInput } from "./UserSeriesMappingOrderByInput";

export type UserSeriesMappingFindManyArgs = {
  where?: UserSeriesMappingWhereInput;
  orderBy?: Array<UserSeriesMappingOrderByInput>;
  skip?: number;
  take?: number;
};
