import { UserMovieMapping as TUserMovieMapping } from "../api/userMovieMapping/UserMovieMapping";

export const USERMOVIEMAPPING_TITLE_FIELD = "id";

export const UserMovieMappingTitle = (record: TUserMovieMapping): string => {
  return record.id?.toString() || String(record.id);
};
