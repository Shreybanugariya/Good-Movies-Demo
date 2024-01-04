import { VideoContentWhereInput } from "./VideoContentWhereInput";
import { VideoContentOrderByInput } from "./VideoContentOrderByInput";

export type VideoContentFindManyArgs = {
  where?: VideoContentWhereInput;
  orderBy?: Array<VideoContentOrderByInput>;
  skip?: number;
  take?: number;
};
