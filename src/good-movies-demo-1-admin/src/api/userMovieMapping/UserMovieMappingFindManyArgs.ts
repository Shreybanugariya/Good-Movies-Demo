import { UserMovieMappingWhereInput } from "./UserMovieMappingWhereInput";
import { UserMovieMappingOrderByInput } from "./UserMovieMappingOrderByInput";

export type UserMovieMappingFindManyArgs = {
  where?: UserMovieMappingWhereInput;
  orderBy?: Array<UserMovieMappingOrderByInput>;
  skip?: number;
  take?: number;
};
