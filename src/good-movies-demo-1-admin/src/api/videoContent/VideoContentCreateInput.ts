import { GenreCreateNestedManyWithoutVideoContentsInput } from "./GenreCreateNestedManyWithoutVideoContentsInput";
import { Decimal } from "decimal.js";
import { UserVideoContentMappingWhereUniqueInput } from "../userVideoContentMapping/UserVideoContentMappingWhereUniqueInput";

export type VideoContentCreateInput = {
  description?: string | null;
  itemPrice?: GenreCreateNestedManyWithoutVideoContentsInput;
  mustWatchCount?: number | null;
  name?: string | null;
  rating?: Decimal | null;
  userVideoContentMapping?: UserVideoContentMappingWhereUniqueInput | null;
  videoContentMapping?: UserVideoContentMappingWhereUniqueInput | null;
};
