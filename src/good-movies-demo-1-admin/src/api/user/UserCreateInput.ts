import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserMovieMappingWhereUniqueInput } from "../userMovieMapping/UserMovieMappingWhereUniqueInput";
import { UserSeriesMappingWhereUniqueInput } from "../userSeriesMapping/UserSeriesMappingWhereUniqueInput";
import { SeriesWhereUniqueInput } from "../series/SeriesWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  link?: string | null;
  movies?: MovieWhereUniqueInput | null;
  password: string;
  roles: InputJsonValue;
  userMovieMapping?: UserMovieMappingWhereUniqueInput | null;
  userMovieMappings?: UserMovieMappingWhereUniqueInput | null;
  username: string;
  UserName: string;
  userSeriesMapping?: UserSeriesMappingWhereUniqueInput | null;
  webseries?: SeriesWhereUniqueInput | null;
};
