import { UserVideoContentMapping as TUserVideoContentMapping } from "../api/userVideoContentMapping/UserVideoContentMapping";

export const USERVIDEOCONTENTMAPPING_TITLE_FIELD = "id";

export const UserVideoContentMappingTitle = (
  record: TUserVideoContentMapping
): string => {
  return record.id?.toString() || String(record.id);
};
