import { VideoContentWhereInput } from "./VideoContentWhereInput";

export type VideoContentListRelationFilter = {
  every?: VideoContentWhereInput;
  some?: VideoContentWhereInput;
  none?: VideoContentWhereInput;
};
