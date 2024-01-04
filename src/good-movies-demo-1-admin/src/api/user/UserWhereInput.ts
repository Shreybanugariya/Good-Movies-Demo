import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserMovieMappingWhereUniqueInput } from "../userMovieMapping/UserMovieMappingWhereUniqueInput";
import { UserSeriesMappingWhereUniqueInput } from "../userSeriesMapping/UserSeriesMappingWhereUniqueInput";
import { SeriesWhereUniqueInput } from "../series/SeriesWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  movies?: MovieWhereUniqueInput;
  userMovieMapping?: UserMovieMappingWhereUniqueInput;
  userMovieMappings?: UserMovieMappingWhereUniqueInput;
  username?: StringFilter;
  UserName?: StringFilter;
  userSeriesMapping?: UserSeriesMappingWhereUniqueInput;
  webseries?: SeriesWhereUniqueInput;
};
