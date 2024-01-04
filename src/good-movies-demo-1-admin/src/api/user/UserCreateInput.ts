import { InputJsonValue } from "../../types";
import { UserMovieMappingWhereUniqueInput } from "../userMovieMapping/UserMovieMappingWhereUniqueInput";
import { UserSeriesMappingWhereUniqueInput } from "../userSeriesMapping/UserSeriesMappingWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  link?: string | null;
  password: string;
  roles: InputJsonValue;
  userMovieMapping?: UserMovieMappingWhereUniqueInput | null;
  userMovieMappings?: UserMovieMappingWhereUniqueInput | null;
  username: string;
  UserName: string;
  userSeriesMapping?: UserSeriesMappingWhereUniqueInput | null;
};
