import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GenreCreateNestedManyWithoutMoviesInput } from "./GenreCreateNestedManyWithoutMoviesInput";

export type MovieCreateInput = {
  description: string;
  Director: UserWhereUniqueInput;
  genre?: GenreCreateNestedManyWithoutMoviesInput;
  mustWatchCount?: number | null;
  name: string;
};
