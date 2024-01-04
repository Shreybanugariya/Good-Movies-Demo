import { GenreUpdateManyWithoutVideoContentsInput } from "./GenreUpdateManyWithoutVideoContentsInput";
import { Decimal } from "decimal.js";
import { UserVideoContentMappingWhereUniqueInput } from "../userVideoContentMapping/UserVideoContentMappingWhereUniqueInput";

export type VideoContentUpdateInput = {
  description?: string | null;
  itemPrice?: GenreUpdateManyWithoutVideoContentsInput;
  mustWatchCount?: number | null;
  name?: string | null;
  rating?: Decimal | null;
  userVideoContentMapping?: UserVideoContentMappingWhereUniqueInput | null;
  videoContentMapping?: UserVideoContentMappingWhereUniqueInput | null;
};
