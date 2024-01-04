import { StringFilter } from "../../util/StringFilter";
import { VideoContentListRelationFilter } from "../videoContent/VideoContentListRelationFilter";

export type UserVideoContentMappingWhereInput = {
  id?: StringFilter;
  userId?: VideoContentListRelationFilter;
  videoContentId?: VideoContentListRelationFilter;
};
