import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GenreListRelationFilter } from "../genre/GenreListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MovieWhereInput = {
  description?: StringFilter;
  Director?: UserWhereUniqueInput;
  genre?: GenreListRelationFilter;
  id?: StringFilter;
  mustWatchCount?: IntNullableFilter;
  name?: StringFilter;
};
