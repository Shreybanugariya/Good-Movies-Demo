import { VideoContentWhereUniqueInput } from "./VideoContentWhereUniqueInput";
import { VideoContentUpdateInput } from "./VideoContentUpdateInput";

export type UpdateVideoContentArgs = {
  where: VideoContentWhereUniqueInput;
  data: VideoContentUpdateInput;
};
