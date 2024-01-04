import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UserMovieMappingWhereInput = {
  id?: StringFilter;
  movieId?: UserListRelationFilter;
  userId?: UserListRelationFilter;
};
