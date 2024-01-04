import { UserSeriesMapping as TUserSeriesMapping } from "../api/userSeriesMapping/UserSeriesMapping";

export const USERSERIESMAPPING_TITLE_FIELD = "id";

export const UserSeriesMappingTitle = (record: TUserSeriesMapping): string => {
  return record.id?.toString() || String(record.id);
};
