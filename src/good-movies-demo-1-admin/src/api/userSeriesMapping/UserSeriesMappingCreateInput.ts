import { UserCreateNestedManyWithoutUserSeriesMappingsInput } from "./UserCreateNestedManyWithoutUserSeriesMappingsInput";
import { SeriesCreateNestedManyWithoutUserSeriesMappingsInput } from "./SeriesCreateNestedManyWithoutUserSeriesMappingsInput";

export type UserSeriesMappingCreateInput = {
  userId?: UserCreateNestedManyWithoutUserSeriesMappingsInput;
  webSeriesId?: SeriesCreateNestedManyWithoutUserSeriesMappingsInput;
};
