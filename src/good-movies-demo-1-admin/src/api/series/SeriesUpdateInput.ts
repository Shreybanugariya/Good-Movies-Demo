import { GenreUpdateManyWithoutSeriesItemsInput } from "./GenreUpdateManyWithoutSeriesItemsInput";
import { Decimal } from "decimal.js";
import { UserSeriesMappingWhereUniqueInput } from "../userSeriesMapping/UserSeriesMappingWhereUniqueInput";

export type SeriesUpdateInput = {
  descption?: string;
  director?: string | null;
  genre?: GenreUpdateManyWithoutSeriesItemsInput;
  mustWatchCount?: number;
  name?: string;
  rating?: Decimal;
  userSeriesMapping?: UserSeriesMappingWhereUniqueInput | null;
};
