import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GenreUpdateManyWithoutMoviesInput } from "./GenreUpdateManyWithoutMoviesInput";

export type MovieUpdateInput = {
  description?: string;
  Director?: UserWhereUniqueInput;
  genre?: GenreUpdateManyWithoutMoviesInput;
  mustWatchCount?: number | null;
  name?: string;
};
