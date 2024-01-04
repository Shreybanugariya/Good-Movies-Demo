import { Genre as TGenre } from "../api/genre/Genre";

export const GENRE_TITLE_FIELD = "Name";

export const GenreTitle = (record: TGenre): string => {
  return record.Name?.toString() || String(record.id);
};
