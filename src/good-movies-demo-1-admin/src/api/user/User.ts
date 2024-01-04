import { Movie } from "../movie/Movie";
import { JsonValue } from "type-fest";
import { UserMovieMapping } from "../userMovieMapping/UserMovieMapping";
import { UserSeriesMapping } from "../userSeriesMapping/UserSeriesMapping";
import { Series } from "../series/Series";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  link: string | null;
  movies?: Movie | null;
  roles: JsonValue;
  updatedAt: Date;
  userMovieMapping?: UserMovieMapping | null;
  userMovieMappings?: UserMovieMapping | null;
  username: string;
  UserName: string;
  userSeriesMapping?: UserSeriesMapping | null;
  webseries?: Series | null;
};
