import { GenreUpdateManyWithoutMoviesInput } from "./GenreUpdateManyWithoutMoviesInput";

export type MovieUpdateInput = {
  description?: string;
  Director?: string;
  genre?: GenreUpdateManyWithoutMoviesInput;
  mustWatchCount?: number | null;
  name?: string;
};
