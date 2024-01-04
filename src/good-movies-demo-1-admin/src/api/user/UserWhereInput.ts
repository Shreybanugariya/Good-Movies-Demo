import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserMovieMappingWhereUniqueInput } from "../userMovieMapping/UserMovieMappingWhereUniqueInput";
import { UserSeriesMappingWhereUniqueInput } from "../userSeriesMapping/UserSeriesMappingWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  userMovieMapping?: UserMovieMappingWhereUniqueInput;
  userMovieMappings?: UserMovieMappingWhereUniqueInput;
  username?: StringFilter;
  UserName?: StringFilter;
  userSeriesMapping?: UserSeriesMappingWhereUniqueInput;
};
