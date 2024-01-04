import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { GenreListRelationFilter } from "../genre/GenreListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { UserVideoContentMappingWhereUniqueInput } from "../userVideoContentMapping/UserVideoContentMappingWhereUniqueInput";

export type VideoContentWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: GenreListRelationFilter;
  mustWatchCount?: IntNullableFilter;
  name?: StringNullableFilter;
  rating?: DecimalNullableFilter;
  userVideoContentMapping?: UserVideoContentMappingWhereUniqueInput;
  videoContentMapping?: UserVideoContentMappingWhereUniqueInput;
};
