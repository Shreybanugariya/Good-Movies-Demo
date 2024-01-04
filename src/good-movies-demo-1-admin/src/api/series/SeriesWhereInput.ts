import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GenreListRelationFilter } from "../genre/GenreListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { UserSeriesMappingWhereUniqueInput } from "../userSeriesMapping/UserSeriesMappingWhereUniqueInput";

export type SeriesWhereInput = {
  descption?: StringFilter;
  director?: UserWhereUniqueInput;
  genre?: GenreListRelationFilter;
  id?: StringFilter;
  mustWatchCount?: IntFilter;
  name?: StringFilter;
  rating?: DecimalFilter;
  userSeriesMapping?: UserSeriesMappingWhereUniqueInput;
};
