import { StringFilter } from "../../util/StringFilter";
import { GenreListRelationFilter } from "../genre/GenreListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MovieWhereInput = {
  description?: StringFilter;
  Director?: StringFilter;
  genre?: GenreListRelationFilter;
  id?: StringFilter;
  mustWatchCount?: IntNullableFilter;
  name?: StringFilter;
};
