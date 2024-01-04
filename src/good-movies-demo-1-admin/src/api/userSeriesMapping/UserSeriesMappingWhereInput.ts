import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { SeriesListRelationFilter } from "../series/SeriesListRelationFilter";

export type UserSeriesMappingWhereInput = {
  id?: StringFilter;
  userId?: UserListRelationFilter;
  webSeriesId?: SeriesListRelationFilter;
};
