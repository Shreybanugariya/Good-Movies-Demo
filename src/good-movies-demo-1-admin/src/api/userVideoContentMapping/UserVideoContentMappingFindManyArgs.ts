import { UserVideoContentMappingWhereInput } from "./UserVideoContentMappingWhereInput";
import { UserVideoContentMappingOrderByInput } from "./UserVideoContentMappingOrderByInput";

export type UserVideoContentMappingFindManyArgs = {
  where?: UserVideoContentMappingWhereInput;
  orderBy?: Array<UserVideoContentMappingOrderByInput>;
  skip?: number;
  take?: number;
};
