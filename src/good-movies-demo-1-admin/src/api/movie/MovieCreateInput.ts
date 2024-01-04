import { GenreCreateNestedManyWithoutMoviesInput } from "./GenreCreateNestedManyWithoutMoviesInput";

export type MovieCreateInput = {
  description: string;
  Director: string;
  genre?: GenreCreateNestedManyWithoutMoviesInput;
  mustWatchCount?: number | null;
  name: string;
};
