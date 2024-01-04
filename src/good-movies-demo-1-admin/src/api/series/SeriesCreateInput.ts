import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GenreCreateNestedManyWithoutSeriesItemsInput } from "./GenreCreateNestedManyWithoutSeriesItemsInput";
import { Decimal } from "decimal.js";
import { UserSeriesMappingWhereUniqueInput } from "../userSeriesMapping/UserSeriesMappingWhereUniqueInput";

export type SeriesCreateInput = {
  descption: string;
  director: UserWhereUniqueInput;
  genre?: GenreCreateNestedManyWithoutSeriesItemsInput;
  mustWatchCount: number;
  name: string;
  rating: Decimal;
  userSeriesMapping?: UserSeriesMappingWhereUniqueInput | null;
};
