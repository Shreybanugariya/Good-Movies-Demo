import { UserUpdateManyWithoutUserSeriesMappingsInput } from "./UserUpdateManyWithoutUserSeriesMappingsInput";
import { SeriesUpdateManyWithoutUserSeriesMappingsInput } from "./SeriesUpdateManyWithoutUserSeriesMappingsInput";

export type UserSeriesMappingUpdateInput = {
  userId?: UserUpdateManyWithoutUserSeriesMappingsInput;
  webSeriesId?: SeriesUpdateManyWithoutUserSeriesMappingsInput;
};
