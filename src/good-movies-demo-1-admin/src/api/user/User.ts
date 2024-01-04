import { JsonValue } from "type-fest";
import { UserMovieMapping } from "../userMovieMapping/UserMovieMapping";
import { UserSeriesMapping } from "../userSeriesMapping/UserSeriesMapping";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  link: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userMovieMapping?: UserMovieMapping | null;
  userMovieMappings?: UserMovieMapping | null;
  username: string;
  UserName: string;
  userSeriesMapping?: UserSeriesMapping | null;
};
