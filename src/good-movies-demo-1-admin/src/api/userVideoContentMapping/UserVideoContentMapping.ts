import { VideoContent } from "../videoContent/VideoContent";

export type UserVideoContentMapping = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: Array<VideoContent>;
  videoContentId?: Array<VideoContent>;
};
